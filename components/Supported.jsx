import Image from "next/image";
import { useEffect, useState } from "react";

const Supported = () => {
  // hack to import all images at once
  function importAll(r) {
    return r.keys().map(r);
  }
  const allImages = importAll(
    require.context("../public/wallets", false, /\.(png|jpe?g|svg)$/)
  );

  const [images, setImages] = useState([]);

  useEffect(() => {
    const images = allImages.map((image) => {
      const { blurDataURL, src } = image.default;
      return {
        src,
        blurDataURL,
      };
    });
    setImages(images);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-[100px] text-white">
      <p className="text-3xl md:text-4xl font-abc-bold md:ml-[50px] md:mb-[-50px]">
        We&apos;re supported by over 170 wallets
      </p>

      <div className="relative overflow-x-hidden flex items-center  mt-[60px] scrollbar-hide ">
        <div className="animate-marquee-infinite flex items-center justify-center space-x-[60px] ">
          {images.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              blurDataURL={image.blurDataURL}
              width={80}
              height={80}
              alt="supported wallets"
              className="rounded-2xl"
            />
          ))}
        </div>
        <div className="absolute animate-marquee2-infinite flex items-center justify-center space-x-[60px] ">
          {images.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              blurDataURL={image.blurDataURL}
              width={80}
              height={80}
              alt="supported wallets"
              className="rounded-2xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supported;
