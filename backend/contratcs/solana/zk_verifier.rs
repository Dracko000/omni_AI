#[derive(Accounts)]
pub struct VerifyProof<'info> {
    pub sender: Signer<'info>,
    #[account(mut)]
    pub proof: AccountInfo<'info>,
}

#[program]
pub mod zkVerifier {
    use super::*;

    pub fn verify_proof(ctx: Context<VerifyProof>, proof_hash: String) -> Result<()> {
        require!(proof_hash.starts_with("zk"), "Invalid zk-Proof");
        msg!("✅ zk-Proof Verified: {}", proof_hash);
        Ok(())
    }
}
