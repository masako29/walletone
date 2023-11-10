import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Modal } from '../components';

const DATA = [
  { name: 'Aktionariat', url: 'aktionariat' },
  { name: 'AT Wallet', url: 'at' },
  { name: 'Atomic', url: 'atomic' },
  { name: 'Authereum', url: 'authereum' },
  { name: 'Binance Smart Chain', url: 'binancesmartchain' },
  { name: 'BitKeep', url: 'bitkeep' },
  { name: 'BitPay', url: 'bitpay' },
  { name: 'Blockchain', url: 'blockchain' },
  { name: 'Coin98', url: 'coin98' },
  { name: 'Coinbase', url: 'coinbase' },
  { name: 'Coinomi', url: 'coinomi' },
  { name: 'Cool Wallet', url: 'cool' },
  { name: 'Crypto.com | DeFi Wallet', url: 'crypto' },
  { name: 'CYBAVO Wallet', url: 'cybavowallet' },
  { name: "D'CENT Wallet", url: 'dcentwallet' },
  { name: 'Dok Wallet', url: 'dok' },
  { name: 'EasyPocket', url: 'easypocket' },
  { name: 'GridPlus', url: 'gridplus' },
  { name: 'imToken', url: 'imtoken' },
  { name: 'Infinito', url: 'infinitowallet' },
  { name: 'Infinity Wallet', url: 'infinitywallet' },
  { name: 'KEYRING PRO', url: 'keyringpro' },
  { name: 'Ledger Live', url: 'ledgerlive' },
  { name: 'Ledger Wallet', url: 'ledgerwallet' },
  { name: 'Maiar', url: 'maiar' },
  { name: 'MathWallet', url: 'mathwallet' },
  { name: 'MEET.ONE', url: 'meetone' },
  { name: 'Metamask', url: 'metamask' },
  { name: 'Midas Wallet', url: 'midaswallet' },
  { name: 'Morix Wallet', url: 'morixwallet' },
  { name: 'MYKEY', url: 'mykey' },
  { name: 'ONTO', url: 'onto' },
  { name: 'Other wallets', url: 'others' },
  { name: 'Ownbit', url: 'ownbit' },
  { name: 'Partity Signer', url: 'parity-signer' },
  { name: 'PEAKDEFI Wallet', url: 'peakdefi' },
  { name: 'Phantom', url: 'phantom' },
  { name: 'Rabby Wallet', url: 'rabbywallet' },
  { name: 'Rainbow', url: 'rainbow' },
  { name: 'SafePal', url: 'safepal' },
  { name: 'SparkPoint', url: 'sparkpoint' },
  { name: 'StepN', url: 'stepn' },
  { name: 'TokenPocket', url: 'tokenpocket' },
  { name: 'Trust', url: 'trust-wallet' },
  { name: 'TrustVault', url: 'trustvault' },
  { name: 'Unstoppable Wallet', url: 'unstoppable' },
  { name: 'ViaWallet', url: 'viawallet' },
  { name: 'Vision', url: 'vision' },
  { name: 'Walleth', url: 'walleth' },
  { name: 'wallet.io', url: 'walletio' },
  { name: 'wazirx', url: 'wazirx' },
  { name: 'XDC Wallet', url: 'xdc' },
  { name: 'ZelCore', url: 'zelcore' }
];
const Wallets = () => {
  const router = useRouter();
  const [selectedWallet, setSelectedWallet] = useState(null);
  const closeModal = () => setSelectedWallet(null);
  const [wallets, setWallets] = useState(DATA);

  const filterWallets = (value) => {
    if (value === '') return setWallets(DATA);
    setWallets(
      wallets.filter((wallet) =>
        wallet.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="w-full h-max px-[8vw]">
      <header
        className="flex items-center justify-between cursor-pointer"
        onClick={() => router.push('/')}
      >
        <p className="text-xl text-[#5878bc]">Wallets</p>
        <Image src="/wallets/images.png" width={120} height={120} alt="logo" />
        <p className="text-xl text-[#5878bc]">Apps</p>
      </header>

      <div className="my-[40px] w-full flex flex-col justify-center items-center">
        <p className="text-center text-3xl font-abc text-[#587087]">Wallets</p>
        <p className="mt-[40px] max-w-[700px] text-center text-lg text-[#587087]">
          Multiple iOS and Android wallets support the protocol. Simply scan a
          QR code from your desktop computer screen to start securely using a
          dApp with your mobile wallet. Interaction between mobile apps and
          mobile browsers are supported via mobile deep linking.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full mb-12">
        <input
          type="text"
          placeholder="Search for wallets..."
          className="p-3 w-[70vw] md:w-[50vw] border border-black rounded-md"
          onChange={(e) => filterWallets(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[55px] px-[8vw]">
        {wallets.map((wallet) => {
          return (
            <div
              onClick={() => setSelectedWallet(wallet)}
              key={wallet.name}
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <Image
                src={`/wallets/${wallet.url}.png`}
                alt={wallet}
                width={150}
                height={150}
                className="object-cover rounded-[64px]"
              />

              <p className="mt-[25px] text-xl font-abc-bold text-[#587087] text-center">
                {wallet.name}
              </p>
            </div>
          );
        })}
      </div>
      <footer className="mt-[130px] flex flex-col items-center justify-center">
        <p className="mb-[50px] text-[#587087] text-center">
          Open a pull request on <span className="text-[#4199fc]">Github</span>{' '}
          to add your wallet here.
        </p>
        <div className="mb-[80px] flex items-center justify-center space-x-[70px]">
          <div className="flex space-x-2 items-center text-[#587087]">
            <Image src="/discord.svg" alt="discord" height={20} width={20} />
            <p>Discord</p>
          </div>
          <div className="flex space-x-2 items-center text-[#587087]">
            <Image src="/twitter.svg" alt="twitter" height={20} width={20} />

            <p>Twitter</p>
          </div>
          <div className="flex space-x-2 items-center text-[#587087]">
            <Image src="/github.svg" alt="github" height={20} width={20} />
            <p>Github</p>
          </div>
        </div>
      </footer>
      {selectedWallet && (
        <Modal wallet={selectedWallet} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Wallets;
