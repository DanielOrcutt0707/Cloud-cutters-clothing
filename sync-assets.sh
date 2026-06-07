#!/bin/bash
# Force copy all design assets to the storefront's public directory
PUBLIC="/home/agent-web-developer/cloud-cutters-store/public"

# Create directories
mkdir -p "$PUBLIC/images/products" "$PUBLIC/images/branding" 2>/dev/null

# Copy branding assets
cp -f /home/team/shared/cloud-cutters-logo-final.png "$PUBLIC/images/branding/cloud-cutters-logo-final.png" 2>/dev/null
cp -f /home/team/shared/cloud-cutters-wordmark.png "$PUBLIC/images/branding/cloud-cutters-wordmark.png" 2>/dev/null

# Copy Drop #1 product mockups
cp -f /home/team/shared/designs/mockups/mockup-tee-metar.png "$PUBLIC/images/products/" 2>/dev/null
cp -f /home/team/shared/designs/mockups/mockup-tee-horizon.png "$PUBLIC/images/products/" 2>/dev/null
cp -f /home/team/shared/designs/mockups/mockup-tee-flight-tag.png "$PUBLIC/images/products/" 2>/dev/null
cp -f /home/team/shared/designs/mockups/mockup-hoodie-vector.png "$PUBLIC/images/products/" 2>/dev/null
cp -f /home/team/shared/designs/mockups/mockup-hoodie-atmosphere.png "$PUBLIC/images/products/" 2>/dev/null
cp -f /home/team/shared/designs/mockups/mockup-hat-squawk.png "$PUBLIC/images/products/" 2>/dev/null

# Copy Drop #2 (Tattoo Collection) mockups
cp -f /home/team/shared/designs/tattoo-collection/mockups/mockup-hercules-tee.png "$PUBLIC/images/products/" 2>/dev/null
cp -f /home/team/shared/designs/tattoo-collection/mockups/mockup-stratotanker-tee.png "$PUBLIC/images/products/" 2>/dev/null
cp -f /home/team/shared/designs/tattoo-collection/mockups/mockup-stratofortress-tee.png "$PUBLIC/images/products/" 2>/dev/null
cp -f /home/team/shared/designs/tattoo-collection/mockups/mockup-warthog-tee.png "$PUBLIC/images/products/" 2>/dev/null
cp -f /home/team/shared/designs/tattoo-collection/mockups/mockup-globemaster-tee.png "$PUBLIC/images/products/" 2>/dev/null

# Copy Graphics
cp -f /home/team/shared/designs/tee-metar-graphic.png "$PUBLIC/images/products/" 2>/dev/null
cp -f /home/team/shared/designs/tee-horizon-graphic.png "$PUBLIC/images/products/" 2>/dev/null
cp -f /home/team/shared/designs/tee-flight-tag-graphic.png "$PUBLIC/images/products/" 2>/dev/null
cp -f /home/team/shared/designs/hoodie-vector-graphic.png "$PUBLIC/images/products/" 2>/dev/null
cp -f /home/team/shared/designs/hoodie-atmosphere-graphic.png "$PUBLIC/images/products/" 2>/dev/null
cp -f /home/team/shared/designs/hat-squawk-graphic.png "$PUBLIC/images/products/" 2>/dev/null

# Set permissions
chmod -R 755 "$PUBLIC/images"
echo "Assets synced to $PUBLIC/images"
