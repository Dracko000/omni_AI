#!/bin/bash

echo "Deploying Bridge Contract to Polkadot Testnet..."
substrate-contracts-cli deploy --contract backend/contracts/polkadot/bridge.wasm --url ws://rococo-parachain.io
