import { useState } from "react";

const Statistics = () => {
  const [stats, setStats] = useState([
    {
      name: "Total Connections",
      averaged: "per day",
      count: 1107304399,
    },
    {
      name: "Active Connections",
      averaged: "currently",
      count: 887924,
    },
    {
      name: "Messages",
      averaged: "per second",
      count: 24761,
    },
    {
      name: "Wallets",
      averaged: "integrated",
      count: "170+",
    },
    {
      name: "Apps",
      averaged: "integrated",
      count: "450+",
    },
  ]);
  return (
    <div className="flex justify-between text-white mt-[30px] px-[20px] overflow-x-scroll space-x-[30px] scrollbar-hide">
      {stats.map((stats, index) => {
        return (
          <div key={index}>
            <p className="text-md: md:text-xl font-semibold whitespace-nowrap">
              {stats.name}
            </p>
            <p className="text-2xl md:text-5xl">
              {typeof stats.count === "number"
                ? stats.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : stats.count}
            </p>
            <p className="text-md md:text-lg font-abc whitespace-nowrap">
              {stats.averaged}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Statistics;
