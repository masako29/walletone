import {
  ConnectWallet,
  Footer,
  Header,
  Hero,
  Looking,
  Services,
  Statistics,
  Supported,
  WebThree
} from '../components';

const Home = () => {
  return (
    <div className="pb-[4rem] w-full min-h-screen bg-[#141414] px-[20px] md:px-[3rem] py-[10px] font-thin text-sm">
      <Header />
      <Hero />
      <Statistics />
      <Services />
      <WebThree />
      <ConnectWallet />
      <Looking />
      <Supported />
      <Footer />
    </div>
  );
};

export default Home;
