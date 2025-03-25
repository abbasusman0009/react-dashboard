import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    month: 'Jan',
    sales: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    month: 'Feb',
    sales: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    month: 'Mar',
    sales: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    month: 'Apr',
    sales: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    month: 'May',
    sales: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    month: 'Jun',
    sales: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    month: 'Jul',
    sales: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Chart = () => {
    return (
      <div className='bg-[#F9F9FA] ml-4 shadow-lg rounded px-4 py-4 space-y-4'> 
      <div className='flex justify-between items-center text-[#000000]'>
      <span className='text-md font-bold'>Analytics</span>
      <span className='opacity-[40%]  text-md font-bold'>Total drivers</span>
      <span className='text-md font-bold opacity-[40%]'>Operating Status</span>
      <div className='border-l-2 border-[#00000033] h-4'></div>
      <span className='text-md font-bold opacity-[75%]'>This year</span>
      <span className='text-md font-bold opacity-[75%]'>Last Year</span>
      </div>
      <ResponsiveContainer width="100%" aspect={3}>  
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset={0} stopColor="#000000" stopOpacity={0.2} />
              <stop offset={0.8} stopColor="#000000" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" opacity={0.8} vertical={false} horizontal={false} />
          <XAxis dataKey="month" axisLine={false} tickLine={false}/>
          <YAxis axisLine={false} tickLine={false} tickMargin={10}/>
          <Tooltip />
          <Area  dataKey="sales" stroke="#000000" fill='url(#color)' />
          <Area  dataKey="sales" stroke="#646cffaa" fill='url(#color)' />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    );
  };

export default Chart;
