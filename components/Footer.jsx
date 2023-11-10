import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="flex flex-col mt-[11rem]">
			<div className="flex items-center justify-center mb-[3.75rem]">
				<Image src="/footer-logo.svg" alt="footer logo" width="93" height="57" />
			</div>
			<div className="flex justify-between flex-wrap font-abc gap-y-[2.5rem]">
				<div className="flex flex-col text-white w-1/2 gap-[0.65rem] lg:w-auto">
					<h3 className="text-[#9ea9a9] text-base font-abc-bold mb-[6px]">WalletConnect</h3>
					<Link href="/products" className="text-[0.89rem] font-[500] tracking-[0.04rem]">
						PRODUCTS
					</Link>
					<Link href="/partners" className="text-[0.89rem] font-[500] tracking-[0.04rem]">
						PARTNERS
					</Link>
					<Link href="/explorer" className="text-[0.89rem] font-[500] tracking-[0.04rem]">
						EXPLORER
					</Link>
				</div>
				<div className="flex flex-col text-white w-1/2 gap-[0.65rem] lg:w-auto">
					<h3 className="text-[#9ea9a9] text-base font-abc-bold mb-[6px]">Resources</h3>
					<Link href="/docs" className="text-[0.875rem] font-[500] tracking-[0.04rem]">
						DOCS
					</Link>
					<Link href="/github" className="text-[0.875rem] font-[500] tracking-[0.04rem]">
						GITHUB
					</Link>
					<Link href="/explorer" className="text-[0.875rem] font-[500] tracking-[0.04rem]">
						FAQ
					</Link>
				</div>
				<div className="flex flex-col text-white w-1/2 gap-[0.65rem] lg:w-auto">
					<h3 className="text-[#9ea9a9] text-base font-abc-bold mb-[6px]">Company</h3>
					<Link href="/blogs" className="text-[0.875rem] font-[500] tracking-[0.04rem]">
						BLOG
					</Link>
					<Link href="/jobs" className="text-[0.875rem] font-[500] tracking-[0.04rem]">
						JOBS
					</Link>
					<Link href="/brands" className="text-[0.875rem] font-[500] tracking-[0.04rem]">
						BRAND
					</Link>
				</div>
				<div className="flex flex-col text-white w-1/2 gap-[0.65rem] lg:w-auto">
					<h3 className="text-[#9ea9a9] text-base font-abc-bold mb-[6px]">Connect</h3>
					<Link href="/twitter" className="text-[0.875rem] font-[500] tracking-[0.04rem]">TWITTER</Link>
					<Link href="/discord" className="text-[0.875rem] font-[500] tracking-[0.04rem]">
						DISCORD
					</Link>
					<Link href="/mirror" className="text-[0.875rem] font-[500] tracking-[0.04rem]">
						MIRROR
					</Link>
				</div>
				<div className="flex flex-col text-white w-full gap-[0.65rem] lg:mt-8 xl:w-[auto] xl:mt-0">
					<h3 className="text-[#9ea9a9] text-base font-abc-bold mb-[6px]">Our Newsletter</h3>
					<form className="flex lg:w-[40%] xl:w-[auto]">
						<input id="footer-input" type="email" name="newsletter" placeholder="Email" className="shrink w-full mr-[10px] bg-[#272a2a] rounded-[12px] px-4 text-base text-[#9ea9a9] placeholder:text-[#686868] placeholder:font-abc font-abc outline-none h-[40px] grow outline-1 " />
						<button className=" rounded-[20px] flex items-center justify-center h-[40px] min-h-[40px] border-[1px] border-white px-4">SUBSCRIBE</button>
					</form>
				</div>
			</div>
			<div className="mt-[3.75rem] flex flex-col gap-y-4 lg:flex-row lg:justify-between lg:items-center">
				<h3 className="text-[#9ea9a9] text-base font-abc-bold mb-[6px]">&copy; 2022 WalletConnect, Inc</h3>
				<div className="text-[#9ea9a9] font-abc flex gap-x-8 lg:gap-x-[6rem] lg:w-[45%]">
					<Link className="text-[0.875rem] font-[500] tracking-[0.04rem]" href="/terms-of-service">TERMS OF SERVICE</Link>
					<Link className="text-[0.875rem] font-[500] tracking-[0.04rem]" href="/privacy-policy">PRIVACY POLICY</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
