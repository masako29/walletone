import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Looking = () => {
  const router = useRouter();

  const [wallets, setWallets] = useState(["Rainbow", "Metamask", "Argent"]);

  return (
    <div className="mt-[100px] lg:mt-[240px] text-white lg:ml-[-30px]">
      <div className="lg:flex lg:items-center px-[50px">
        <p className="text-3xl text-center lg:text-left whitespace-nowrap lg:text-4xl font-abc-bold ">
          Looking for a wallet?
        </p>
        <div
          className="mt-[10px] lg:text-xl lg:mt-0 flex space-x-2 text-[#66b0ff] ml-[25vw] font-abc"
          onClick={() => router.push("/dapps")}
        >
          <p>VIEW ALL WALLETS</p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>

      <div className="md:w-[100%] mt-[100px] flex flex-col flex-wrap md:gap-y-7 lg:flex-row justify-between space-y-[100px] lg:space-y-0 lg:space-x-[60px]">
        {wallets.map((wallet) => (
          <div
            key={wallet}
            className="relative rounded-[64px] border pl-[20px] pt-[20px]"
          >
            <Image
              src={`/wallets/${wallet.toLowerCase()}.png`}
              width={80}
              height={80}
              alt="wallets"
              className="rounded-2xl mt-[-60px]"
            />
            <p className="my-[20px] text-3xl font-abc">{wallet}</p>
            <Link
              href={
                wallet === "Rainbow"
                  ? "https://www.rainbow.me"
                  : wallet === "Metamask"
                  ? "https://www.metamask.io"
                  : "https://www.argent.xyz"
              }
            >
              <div className="w-fit mb-[20px] lg:mb-0 flex space-x-1 items-center px-[20px] py-[15px] lg:py-[8px] border border-[#66b0ff] bg-[#3396ff] hover:bg-[#66B0FF] hover:border-[#99cbff] transition-all 2000 ease-in-out cursor-pointer rounded-full">
                <button className="text-white font-abc">GET {wallet}</button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </Link>

            <div className="relative bottom-0 left-0 w-[100%] md:w-[90%] lg:w-[355px] h-[355px] lg:mr-[-30px] mt-[30px]  mb-[-30px]">
              <Image
                src={`/${wallet.toLowerCase()}.png`}
                fill
                alt="wallet screenshot"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Looking;
