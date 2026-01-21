import { USER_DATA } from '@/constants/data'
import {
  LineChart,
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const TotalUsers = () => {
  return (
    <div className="w-full border-2 border-[#1EC5E066] rounded-4xl p-6 bg-[#123C4E]">
      <div className="flex items-center justify-between mb-4 gap-4">
        <div className="text-[#1EC5E0] text-2xl font-semibold">Total Users</div>
        <div className="flex items-center gap-4 text-white font-semibold text-sm">
          <span>A: RFQs Uploaded by Month</span>
          <span>B: Win-Rate Tracker</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={USER_DATA} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1a4d5f"
            horizontal={true}
            vertical={false}
          />
          <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} tick={{ fill: '#fff' }} />
          <YAxis
            stroke="#9ca3af"
            fontSize={12}
            tick={{ fill: '#fff' }}
            label={{
              value: 'Users (K)',
              angle: -90,
              position: 'insideLeft',
              fill: '#9ca3af',
            }}
            domain={[0, 35]}
            ticks={[0, 10, 20, 30]}
            tickFormatter={(value) => `${value}K`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#123C4E',
              border: '1px solid #1a4d5f',
              borderRadius: '8px',
              color: '#fff',
            }}
          />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="circle"
            formatter={(value) => <span style={{ color: '#fff', fontSize: '12px' }}>{value}</span>}
          />
          <Line
            type="monotone"
            dataKey="This year"
            stroke="#ffffff"
            strokeWidth={2}
            dot={{ fill: '#ffffff', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="Last year"
            stroke="#1EC5E0"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: '#1EC5E0', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TotalUsers
