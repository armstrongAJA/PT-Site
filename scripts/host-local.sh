#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

cd "$PROJECT_ROOT"

if [ ! -d "node_modules" ]; then
  echo "Dependencies not found. Installing with npm..."
  npm install
fi

echo "Starting local dev host..."
echo "Press Ctrl+C to stop."
npm run dev -- --host 0.0.0.0 --port 5173
