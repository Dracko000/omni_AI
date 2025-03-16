#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

#[ink::contract]
mod bridge {
    use ink_storage::traits::{SpreadAllocate, SpreadLayout};

    #[ink(storage)]
    #[derive(SpreadAllocate)]
    pub struct Bridge {
        owner: AccountId,
    }

    impl Bridge {
        #[ink(constructor)]
        pub fn new() -> Self {
            ink_lang::utils::initialize_contract(|contract: &mut Self| {
                contract.owner = Self::env().caller();
            })
        }

        #[ink(message)]
        pub fn send_tokens(&self, amount: u128, target_chain: String) -> bool {
            let caller = self.env().caller();
            self.env().emit_event(BridgeEvent {
                sender: caller,
                amount,
                target_chain,
            });
            true
        }
    }

    #[ink(event)]
    pub struct BridgeEvent {
        #[ink(topic)]
        sender: AccountId,
        amount: u128,
        target_chain: String,
    }
}
