fly launch \
  # Get 2 CPU cores and 4GB of memory
  --vm-size=performance-2x \
  # Disable 2x replication
  --ha=false \
  # Use Remotion's port
  --internal-port=3000 \
  # Use Docker, not Node
  --dockerfile Dockerfile