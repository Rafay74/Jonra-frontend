import { PIPELINE_DATA } from '@/constants/data'
import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const StatusPipeline = () => {
  return (
    //<div className="w-full max-w-[660px] aspect-7/5 border-2 border-[#1EC5E066] rounded-4xl p-6 bg-[#123C4E]">
    // <div className="w-full border-2 border-[#1EC5E066] rounded-4xl p-6 bg-[#123C4E] flex flex-col h-full">
    <div className="w-full border-2 border-[#1EC5E066] rounded-4xl p-3 sm:p-4 md:p-6 bg-[#123C4E] flex flex-col h-full">
      <div className="text-[#1EC5E0] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4">
        {' '}
        Status Pipeline (Turbo Tax)
      </div>
      <div className="px-2 pb-4 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#1EC5E0]"></div>
          <span className="text-white text-sm">Progress</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          <span className="text-white text-sm">Remaining</span>
        </div>
      </div>
      <div className="w-full flex-1 min-h-[290px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={PIPELINE_DATA}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#1a4d5f"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              dataKey="name"
              type="category"
              stroke="#9ca3af"
              fontSize={12}
              tick={{ fill: '#fff' }}
              angle={-45}
              textAnchor="end"
              height={100}
            />
            <YAxis
              type="number"
              stroke="#9ca3af"
              fontSize={12}
              label={{
                value: 'Hr',
                angle: -90,
                position: 'insideLeft',
                fill: '#9ca3af',
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#9F8EFF',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
              }}
            />
            <Bar
              dataKey="Progress"
              stackId="a"
              fill="#1EC5E0"
              radius={[0, 0, 6, 6]}
            />
            <Bar
              dataKey="Remaining"
              stackId="a"
              fill="#9ca3af"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default StatusPipeline
