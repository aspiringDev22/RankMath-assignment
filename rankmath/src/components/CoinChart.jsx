import React from "react";
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BsDot } from "react-icons/bs";

const CoinChart = ({ data }) => {
  const lowestPrice = Number(data.length > 0 ? data[0].price : 0).toFixed(3);
  const highestPrice = Number(
    data.length > 0 ? data[data.length - 1].price : 0
  ).toFixed(3);
  const lastPriceFor1BTC = Number(
    data.length > 0 ? data[data.length - 1].price : 0
  ).toFixed(3);

  return (
    <div className="chart-container">
      <p className="label lowerPrice">
        <BsDot className="point" size="28" color="#ef345f" />
        Lower: ${lowestPrice}
      </p>
      <p className="label higherPrice">
        <BsDot className="point" size="28" color="#1cc06d" />
        Higher: ${highestPrice}
      </p>
      <p className="label btcprice">
        <BsDot className="points" size="42" color="#fc9016" /> 1BTC = ${lastPriceFor1BTC}
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 80, right: 5, left: 0, bottom: 0 }}
        >
          <Tooltip />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#feaa2c"
            fill="#fef7ed"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CoinChart;
