use anchor_lang::prelude::*;

declare_id!("BridGeSolana123456789012345678901234567890");

#[program]
pub mod bridge {
    use super::*;

    pub fn send_tokens(ctx: Context<SendTokens>, amount: u64, target_chain: String) -> Result<()> {
        let sender = &ctx.accounts.sender;
        let receiver = &ctx.accounts.receiver;
        let token_program = &ctx.accounts.token_program;

        // Lock tokens di smart contract
        let transfer_instruction = spl_token::instruction::transfer(
            token_program.key,
            sender.key,
            receiver.key,
            sender.key,
            &[],
            amount,
        )?;
        anchor_lang::solana_program::program::invoke(
            &transfer_instruction,
            &[
                sender.to_account_info(),
                receiver.to_account_info(),
                token_program.to_account_info(),
            ],
        )?;

        emit!(BridgeEvent {
            sender: sender.key(),
            amount,
            target_chain
        });

        Ok(())
    }
}

#[derive(Accounts)]
pub struct SendTokens<'info> {
    #[account(mut)]
    pub sender: Signer<'info>,
    #[account(mut)]
    pub receiver: AccountInfo<'info>,
    pub token_program: Program<'info, Token>,
}

#[event]
pub struct BridgeEvent {
    pub sender: Pubkey,
    pub amount: u64,
    pub target_chain: String,
}
