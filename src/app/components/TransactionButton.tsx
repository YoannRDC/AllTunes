import { useSendTransaction, useAccount } from 'wagmi'
import { ethers } from 'ethers';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function TransactionButton() {
  const { data: hash, sendTransaction } = useSendTransaction();
  const { address, isConnected } = useAccount();

  const handleTransaction = async () => {
   
    const to = address;
    const value = ethers.parseEther("0.01");
    sendTransaction({ to, value });
  };

  return (
    <div>
      {isConnected ? (
        <div>
          <button onClick={handleTransaction}>Send Transaction</button>
        </div>
      ) : (
        <div className='flex justify-end p-5'>
        <ConnectButton />
        </div>
        
      )}
    </div>
  );
}

export default TransactionButton;