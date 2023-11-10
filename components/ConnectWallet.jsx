import Image from "next/image";

const ConnectWallet = () => {
  return (
    <div className="text-white mt-[110px]">
      <p className="text-3xl md:text-4xl  font-abc-bold max-w-3xl md:ml-[50px] mb-[30px] md:mb-0">
        With WalletConnect, you can connect your wallet with hundreds of apps,
        opening the doors to a new world of web3 experiences
      </p>
      <div className="hidden relative mt-[60px] border border-[#3b4040] rounded-[54px] p-[10px] bg-gradient-to-r from-[#272a2a] to-[#141414] md:flex justify-between items-center">
        <div className="max-w-[36%] md:max-w-full lg:max-w-[36%] flex-col space-y-[10px] pb-[70px]">
          <div className="p-[30px] border border-[#ffffff54] rounded-[54px]">
            <div className="flex justify-between space-x-[20px] text-3xl font-abc-bold text-[#9ea9a9]">
              <p className="flex-1">Click &apos;Connect Wallet&apos;</p>
              <span className="text-white font-abc w-[30px] h-[30px] rounded-full bg-[#3396ff] flex items-center justify-center text-lg">
                1
              </span>
            </div>
            <p className="text-xl text-[#9ea9a9] font-abc leading-tight mt-[40px]">
              Locate the button on your desired app, as this will enable you to
              log in with your preferred wallet.
            </p>
          </div>
          <div className="p-[30px] border border-[#ffffff54] bg-[#00000054] rounded-[54px] overflow-hidden">
            <div className="flex justify-between items-center space-x-[20px] text-3xl font-abc-bold text-[#9ea9a9]">
              <p className="flex-1 text-white">
                Scan the QR code or find your wallet
              </p>
              <span className="text-white font-abc w-[30px] h-[30px] rounded-full bg-[#3396ff] flex items-center justify-center text-lg">
                2
              </span>
            </div>
          </div>
          <div className="p-[30px] border border-[#ffffff54]  rounded-[54px]">
            <div className="flex justify-between items-center space-x-[20px] text-3xl font-abc-bold text-[#9ea9a9]">
              <p className="flex-1">Start exploring!</p>
              <span className="text-white font-abc w-[30px] h-[30px] rounded-full bg-[#3396ff] flex items-center justify-center text-lg">
                3
              </span>
            </div>
          </div>
        </div>
        <div className="absolute right-0 h-[100%] w-[63%] overflow-hidden tilt rounded-[64px] shadow-[#00000066] shadow-sm md:hidden lg:block lg:w-[60%] lg:h-[90%] lg:right-4">
          <Image src="/skew1.jpeg" alt="logo" fill />
          <div className="absolute bottom-[-9%] left-[-20%] h-[65%] w-[100%]">
            <Image src="/skew2.png" fill alt="logo" />
          </div>
        </div>
      </div>

      <div className="absolute h-[50%] w-[90%] mt-[30px] overflow-hidden rounded-[64px] shadow-[#00000066] shadow-sm md:hidden">
        <Image src="/skew1.jpeg" alt="logo" fill />
        <div className="absolute bottom-[-9%] left-[-20%] h-[65%] w-[100%]">
          <Image src="/skew2.png" fill alt="logo" />
        </div>
      </div>
      <div className="border border-[#3b4040] rounded-[54px] p-[10px] bg-gradient-to-r from-[#272a2a] to-[#141414] md:hidden">
        <div className="w-full mt-[60vh] flex-col space-y-[10px] pb-[50px]">
          <div className="p-[30px] border border-[#ffffff54] rounded-[54px]">
            <div className="flex justify-between space-x-[20px] text-xl font-abc-bold text-[#9ea9a9]">
              <p className="flex-1">Click &apos;Connect Wallet&apos;</p>
              <span className="text-white font-abc w-[30px] h-[30px] rounded-full bg-[#3396ff] flex items-center justify-center text-lg">
                1
              </span>
            </div>
            <p className="text-md text-[#9ea9a9] font-abc leading-tight mt-[20px]">
              Locate the button on your desired app, as this will enable you to
              log in with your preferred wallet.
            </p>
          </div>
          <div className="p-[30px] border border-[#ffffff54] bg-[#00000054] rounded-[54px] overflow-hidden">
            <div className="flex justify-between items-center space-x-[20px] text-xl font-abc-bold text-[#9ea9a9]">
              <p className="flex-1 text-white">
                Scan the QR code or find your wallet
              </p>
              <span className="text-white font-abc w-[30px] h-[30px] rounded-full bg-[#3396ff] flex items-center justify-center text-lg">
                2
              </span>
            </div>
          </div>
          <div className="p-[30px] border border-[#ffffff54]  rounded-[54px]">
            <div className="flex justify-between items-center space-x-[20px] text-xl font-abc-bold text-[#9ea9a9]">
              <p className="flex-1">Start exploring!</p>
              <span className="text-white font-abc w-[30px] h-[30px] rounded-full bg-[#3396ff] flex items-center justify-center text-lg">
                3
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
