use anchor_lang::prelude::*;

declare_id!("Br1dgeSoL4na1111111111111111111111111111");

#[program]
mod bridge {
    use super::*;

    pub fn bridge_token(ctx: Context<Bridge>, amount: u64, target_chain: String) -> Result<()> {
        msg!("Bridging {} tokens to {}", amount, target_chain);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Bridge<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
}
