import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import services from '../public/services.png';
const Services = () => {
  const router = useRouter();
  const DATA = [
    {
      title: 'Migration',
      description: 'Click here for migrate or anything related to migration.'
    },
    {
      title: 'Claim Token',
      description: 'Click here to claim tokens or have issues claiming tokens.'
    },
    {
      title: 'Swap',
      description:
        'Click here for token swap or any occurred issues while trying to swap tokens.'
    },
    {
      title: 'Slippage Error',
      description: 'Click here for slippage related or transaction fee related.'
    },
    {
      title: 'Unable To Buy Coins/Tokens',
      description:
        'To trade crypto your account must be marked as a trusted payment source.'
    },
    {
      title: 'Restore',
      description:
        'Click here for wallet restore/change and token recovery related'
    },
    {
      title: 'Connect to Dapps',
      description: 'Click here for error while connecting to dapps'
    },
    {
      title: 'Slippage',
      description: 'Click here for slippage issue or transaction fee related.'
    },
    {
      title: 'Exchange',
      description:
        'Click here for token exchange or error while exchanging tokens'
    },
    {
      title: 'Cross Chain Transfer',
      description:
        'Click here for cross bridge issues while doing cross transfer'
    },
    {
      title: 'Staking / Unstaking',
      description: 'Click here for token staking/unstake related issues'
    },
    {
      title: 'Buy Coins/Tokens',
      description:
        'To trade, your account must be marked as a trusted payment source'
    },
    {
      title: 'Locked Account',
      description: ' Click here if your account was locked or wallet stuck'
    },
    {
      title: 'NFTs',
      description: 'Click here for NFTs minting/transfer issues'
    },
    {
      title: 'Missing/Irregular Balance',
      description: 'Click here to recover your lost or missing funds'
    },
    {
      title: 'Delayed Transaction',
      description:
        'Click here for any transaction error or delayed transactions'
    },
    {
      title: 'Rectification',
      description: 'Rectification support warranties completely decentralized'
    },

    {
      title: 'Staking Pool',
      description: 'Staking pool of completely decentralized supports wallet'
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
