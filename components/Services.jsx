import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import services from '../public/services.png';
const Services = () => {
  const router = useRouter();
  const DATA = [
    {
      title: 'Rectification',
      description: 'Rectification support warranties completely decentralized'
    },
    {
      title: 'Validation',
      description: 'Validation completely decentralized supports wallet'
    },
    {
      title: 'Recovery',
      description: 'Recovery wallet TATs Dapps with Blockchain and DeFi'
    },
    {
      title: 'Staking Pool',
      description: 'Staking pool of completely decentralized supports wallet'
    },
    {
      title: 'LP LOCK',
      description: 'Claim Airdropsto wallet TATs Dapps with Blockchain and DeFi'
    },
    {
      title: 'BUY',
      description: 'Buy support warranties completely decentralized​'
    },
    {
      title: 'SELL',
      description: 'Sell completely decentralized supports wallet'
    },
    {
      title: 'CLAIM AIRDROP',
      description:
        'Claim Airdrops to wallet TATs Dapps with Blockchain and DeFi'
    },
    {
      title: 'HARVEST STAKINGS',
      description:
        'When you choose to redeem, we’ll return your assets to your Spot Wallet the following day.'
    },
    {
      title: 'WITHDRAWAL',
      description:
        'A crypto withdrawal is a transaction that allows you to move your cryptocurrency balance off the Revolut platform to an external crypto wallet that you control such as a Ledger or a Trezor.'
    },
    {
      title: 'PURCHASE TOKEN',
      description: 'Also, buy bitcoin, ether, and many common cryptocurrencies.'
    },
    {
      title: 'MY NFTS',
      description: 'View your collection of digital works'
    },
    {
      title: 'FIX In-Node String',
      description:
        'Click to reset your in-node string, If you are experiencing any issues  Connecting, Migrating, Swapping, High Gas Fee, Error Messages, Staking Condition, Bot challenge.'
    },
    {
      title: 'BRIDGE',
      description:
        'Enables applications built on different blockchains to communicate with and interact with each other, something which was never before possible.'
    },
    {
      title: 'WHITELIST',
      description: 'Get an Early Spot for Minting.'
    }
  ];
  return (
    <div className="text-white mt-[5vh] flex flex-col items-center justify-center">
      <h1 className="text-5xl font-semibold ">Services</h1>

      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 mx-[20px] md:mx-[10vw] gap-6 mt-[5vh]">
        {DATA.map((item) => {
          return (
            <div
              key={item.title}
              className="flex flex-col items-center justify-center p-4 pb-8 space-y-6 border border-white rounded-md"
            >
              <div className="mt-6">
                <Image src={services} alt="icon" height={60} width={60} />
              </div>
              <p className="text-3xl font-semibold text-center uppercase">
                {item.title}
              </p>
              <p className="flex-1 text-lg text-center">{item.description}</p>
              <button
                onClick={() => router.push('/dapps')}
                className="px-6 py-2 font-medium text-black bg-white rounded-sm"
              >
                SELECT
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
