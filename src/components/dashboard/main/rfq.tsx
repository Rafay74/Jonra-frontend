import { Circle, Clock, Eye, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

import rfq from '@/assets/rfq.svg'
import filter from '@/assets/filter.svg'

const Rfq = () => {
  return (
    <div className="w-full border-2 border-[#1EC5E066] rounded-4xl p-6 bg-[#123C4E] flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-[#1EC5E0] text-2xl font-semibold">
          RFQs Table
        </span>
        <div className="flex gap-2 items-center">
          <Link
            to={''}
            className="text-white text-sm hover:text-[#1EC5E0] transition-colors"
          >
            See All
          </Link>
          <div className="rounded-full p-2 border border-white">
            <Eye className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2].map((item) => (
          <div
            key={item}
            className={`bg-white rounded-2xl ${item > 2 ? 'opacity-40' : ''}`}
          >
                <div className="relative w-full h-20">
                  {' '}
                  <img
                    src={rfq}
                    alt="rfq"
                    className="object-cover w-full h-full rounded-t-2xl"
                  />
                  <div className="absolute top-2 right-2 bg-[#d1eff4] px-2 rounded-lg flex items-center justify-center gap-1">
                    <img src={filter} alt="filter" className="w-3 h-3" />
                    <span className="text-white text-xs">Last 7 Days</span>
                  </div>
                </div>

                <div className="p-2 space-y-2">
                  <div className="text-[#092835] font-semibold text-lg">
                    RFQ (DLA)
                  </div>
                  <div className="flex flex-wrap gap-2 items-center text-sm text-[#092835]">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      1:30hrs
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Date: 22/11/2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Circle className="w-2 h-2 fill-[#9F8EFF] text-[#9F8EFF]" />
                      Status: <strong>Pending</strong>
                    </div>
                  </div>
                </div>
              </div>
        ))}
      </div>
    </div>
  )
}

export default Rfq
