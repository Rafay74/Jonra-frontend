import { METRICS_CARD } from '@/constants/data'

import CardComponent from '../../common/card'

import StatusPipeline from './status-pipeline'
import Rfq from './rfq'
import TotalUsers from './total-users'
import Activities from './activities'
import Traffic from './traffic'
import RfqUpload from './rfq-upload'

const MainDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="text-[#1EC5E0] text-2xl font-bold">Overview Metrics</div>

      <div className="flex w-full justify-between gap-6">
        <div className="space-y-9 flex-1 ">
          <div className="flex-1 grid grid-cols-4 gap-4">
            {METRICS_CARD.map((metrics, index) => (
              <CardComponent
                key={index}
                title={metrics.title}
                value={metrics.value}
                subtitle={metrics.subtitle}
                color={metrics.color}
                isFirst={index === 0}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 mr-8">
            <StatusPipeline />
            <Rfq />
          </div>
          <TotalUsers />
        </div>

        <div className="flex flex-col space-y-5">
          <RfqUpload />
          <Activities />
          <Traffic />
        </div>
      </div>
    </div>
  )
}

export default MainDashboard
