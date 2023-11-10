import Image from "next/image";

const WebThree = () => {
  return (
    <div className="mt-[150px] md:mt-[240px] text-white">
      <p className="relative z-[10] text-3xl md:text-4xl font-abc-bold max-w-lg md:ml-[50px] md:mb-[-50px]">
        We make it easy for you to plug into web3.
      </p>
      <div className="w-[100%] h-[350px] md:h-[880px] relative">
        <Image
          src="/section-image.jpeg"
          alt="logo"
          fill
          className="rounded-[64px]"
        />
      </div>
      <div className="relative z-[10] flex flex-wrap w-full items-center gap-[0.8rem] mb-[-50px] mt-[-80px] md:ml-[50px] whitespace-normal">
        <p className="text-[1.1rem] md:text-3xl font-abc whitespace-nowrap">
          Curious about
        </p>
        <p className="text-[#2bee4b] border-2 border-[#2bee4b] text-xl md:text-3xl font-abc px-[10px] py-[5px] md:px-[20px] md:py-[10px] rounded-[74px] bg-[#272a2aa8]">
          DeFi
        </p>
        <p className="text-[#ff974c] border-2 border-[#ff974c] text-xl md:text-3xl font-abc px-[10px] py-[5px] md:px-[20px] md:py-[10px] bg-[#272a2aa8]">
          NFTs
        </p>
        <p className="text-[#1ac6ff] border-2 border-[#1ac6ff]  text-xl md:text-3xl font-abc px-[10px] py-[5px] md:px-[20px] md:py-[10px] rounded-[100%] bg-[#272a2aa8]">
          DAOs
        </p>
      </div>
    </div>
  );
};

export default WebThree;
