import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const PieChartWithCustomizedLabel = () => {

  const card = 12

  const local = 4

  let donate = parseFloat((100 / card) * local)



  let bakiASe = (100 - parseFloat(donate))




  const data02 = [
    { name: 'Group A', value: bakiASe, fill: '#FF5733' }, // Custom color for Group A
    { name: 'Donate', value: donate , fill: '#33FF57' }, // Custom color for Group B
  ];

  return (
    <div>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data02}
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
          fill={(entry) => entry.fill} // Dynamically set the fill color based on the 'fill' property
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PieChartWithCustomizedLabel;
