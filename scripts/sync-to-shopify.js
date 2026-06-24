/**
 * Cloud Cutters Shopify Sync Script
 * 
 * This script reads product data from a CSV file and syncs it to Shopify as Drafts
 * using the Shopify Admin REST API.
 * 
 * PREREQUISITES:
 * 1. Node.js (v18 or higher recommended) installed on your computer.
 * 2. The CSV file 'shopify-product-import-fixed.csv' in the same directory as this script.
 * 
 * USAGE:
 * node sync-to-shopify.js
 * 
 * You can also override the configuration using environment variables:
 * SHOPIFY_STORE_URL=your-store.myshopify.com SHOPIFY_API_TOKEN=your-token node sync-to-shopify.js
 */

const fs = require('fs');

// --- CONFIGURATION ---
const SHOPIFY_STORE_URL = process.env.SHOPIFY_STORE_URL || 'cloudcutters.myshopify.com';
const SHOPIFY_API_TOKEN = process.env.SHOPIFY_API_TOKEN || 'e57ecc25dd6315b23fd0f8b0c568c822';
const SHOPIFY_API_VERSION = '2024-10';
const CSV_FILE_PATH = process.env.CSV_PATH || 'shopify-product-import-fixed.csv';

// --- MAIN FUNCTION ---
async function main() {
  console.log('--- Cloud Cutters Shopify Sync ---');
  
  if (!fs.existsSync(CSV_FILE_PATH)) {
    console.error(`Error: CSV file not found at ${CSV_FILE_PATH}`);
    console.log('Please ensure the CSV file is in the same directory or set CSV_PATH env var.');
    process.exit(1);
  }

  console.log(`Reading CSV: ${CSV_FILE_PATH}...`);
  const content = fs.readFileSync(CSV_FILE_PATH, 'utf8');
  const productsData = parseShopifyCSV(content);
  
  const productHandles = Object.keys(productsData);
  console.log(`Found ${productHandles.length} unique products to sync.`);

  for (let i = 0; i < productHandles.length; i++) {
    const handle = productHandles[i];
    const product = productsData[handle];
    
    console.log(`[${i + 1}/${productHandles.length}] Syncing product: ${product.title || handle}...`);
    
    try {
      await createProduct(product);
      console.log(`  Successfully created ${product.title}`);
    } catch (err) {
      console.error(`  Failed to sync ${handle}: ${err.message}`);
    }
    
    // Simple rate limiting (Shopify REST API allows 2 requests per second by default)
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log('\nSync complete!');
}

// --- SHOPIFY API HELPER ---
async function createProduct(product) {
  const url = `https://${SHOPIFY_STORE_URL}/admin/api/${SHOPIFY_API_VERSION}/products.json`;
  
  const body = JSON.stringify({ product });
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': SHOPIFY_API_TOKEN
    },
    body: body
  });

  const data = await response.json();

  if (!response.ok) {
    const errorMsg = data.errors ? JSON.stringify(data.errors) : response.statusText;
    throw new Error(`Shopify API Error: ${response.status} - ${errorMsg}`);
  }

  return data.product;
}

// --- CSV PARSER HELPER ---
function parseShopifyCSV(content) {
  const lines = content.split(/\r?\n/);
  if (lines.length < 2) return {};

  const headers = parseCSVLine(lines[0]);
  const products = {};

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const values = parseCSVLine(line);
    const row = {};
    headers.forEach((header, index) => {
      row[header] = values[index];
    });

    const handle = row['Handle'];
    if (!handle) continue;

    if (!products[handle]) {
      products[handle] = {
        title: row['Title'],
        body_html: row['Body (HTML)'],
        vendor: row['Vendor'],
        product_type: row['Type'],
        tags: row['Tags'],
        status: row['Status'] || 'draft',
        options: [],
        variants: []
      };

      if (row['Option1 Name']) products[handle].options.push({ name: row['Option1 Name'] });
      if (row['Option2 Name']) products[handle].options.push({ name: row['Option2 Name'] });
      if (row['Option3 Name']) products[handle].options.push({ name: row['Option3 Name'] });
    } else {
      // Fill in missing metadata from subsequent rows if necessary
      if (!products[handle].title && row['Title']) products[handle].title = row['Title'];
      if (!products[handle].body_html && row['Body (HTML)']) products[handle].body_html = row['Body (HTML)'];
    }

    const variant = {
      sku: row['Variant SKU'],
      price: row['Variant Price'],
      requires_shipping: row['Variant Requires Shipping'] === 'TRUE',
      taxable: row['Variant Taxable'] === 'TRUE',
      inventory_policy: 'deny',
      fulfillment_service: 'manual'
    };

    if (row['Option1 Value']) variant.option1 = row['Option1 Value'];
    if (row['Option2 Value']) variant.option2 = row['Option2 Value'];
    if (row['Option3 Value']) variant.option3 = row['Option3 Value'];

    products[handle].variants.push(variant);
  }

  return products;
}

function parseCSVLine(line) {
  const result = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(cur.trim());
      cur = '';
    } else {
      cur += char;
    }
  }
  result.push(cur.trim());
  return result;
}

// Run the script
main().catch(err => {
  console.error('Fatal Error:', err);
  process.exit(1);
});
