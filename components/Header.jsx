import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header className="fixed z-[50] mt-[10px] top-0 w-[90vw]  md:w-[86vw] flex pl-[10px] justify-between items-center bg-[#272a2aa8] rounded-full border border-white/10 text-white font-thin tracking-wider font-abc">
      <div className="flex">
        <div className="w-[180px] h-[20px] md:w-[14vw] md:h-[25px] relative">
          <Image
            src="/walletconnect.svg"
            alt="logo"
            fill
            className="object-cover"
          />
        </div>
        <ul className="hidden md:flex items-center space-x-[45px]">
          <li className="ml-[45px]">PRODUCTS</li>
          <li>DOCS</li>
          <li>EXPLORER</li>
        </ul>
      </div>
      <button
        className="m-1 font-thin tracking-wider rounded-full border border-white/20 py-[8px] px-[15px]"
        onClick={() => router.push("/dapps")}
      >
        SIGN IN
      </button>
    </header>
  );
};

export default Header;
