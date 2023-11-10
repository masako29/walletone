import Image from 'next/image';
import { useRouter } from 'next/router';
const Hero = () => {
  const router = useRouter();

  return (
    <div className="relative mt-[60px] flex flex-col items-center text-white">
      <div className="w-[100%] h-[85vh] relative">
        <Image
          src="/hero.jpeg"
          alt="logo"
          fill
          priority
          className="object-cover rounded-[64px]"
        />
      </div>
      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full">
        <div className="w-[145px] h-[90px] relative">
          <Image
            src="/logo.svg"
            alt="logo"
            fill
            priority
            className="object-cover rounded-[64px]"
          />
        </div>
        <div className="my-[5px] flex flex-col items-center  font-abc-bold">
          <p className="text-6xl md:text-[100px]">Connecting</p>
          <p className="text-6xl md:text-[100px]">web3</p>
        </div>
        <p className="max-w-[490px] text-center text-base md:text-xl text-[#99A4A4] tracking-wide leading-tight">
          The communications protocol for web3, WalletConnect brings the
          ecosystem together by enabling wallets and apps to securely connect
          and interact.
        </p>
        <div className="mt-[20px] md:mt-[30px] md:flex md:space-x-2">
          <div className="mb-[20px] md:mb-0 flex space-x-1 items-center px-[20px] py-[15px] md:py-[8px] border border-[#66b0ff] bg-[#3396ff] hover:bg-[#66B0FF] hover:border-[#99cbff] transition-all 2000 ease-in-out cursor-pointer rounded-full">
            <button
              className="text-white font-abc"
              onClick={() => router.push('/dapps')}
            >
              LEARN MORE
            </button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLineJoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
          <div className="flex space-x-1 items-center px-[18px] md:px-[20px] py-[15px] border border-white bg-[#f1f3f3] hover:bg-[#9ea9a9] hover:border-[#c9cfcf] transition-all 2000 ease-in-out cursor-pointer rounded-full">
            <button
              className="text-[#141414] font-abc"
              onClick={() => router.push('/dapps')}
            >
              CONNECT WALLET
            </button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#141414"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
