pragma circom 2.0.0;

template BatchBridgeVerification() {
    signal input senders[10];  // Maksimal 10 transaksi per batch
    signal input amounts[10];
    signal input targetChains[10];
    signal output aggregated_valid;

    aggregated_valid <== 0;
    for (var i = 0; i < 10; i++) {
        aggregated_valid <== aggregated_valid + (senders[i] * amounts[i] * targetChains[i]);
    }
}

component main = BatchBridgeVerification();
