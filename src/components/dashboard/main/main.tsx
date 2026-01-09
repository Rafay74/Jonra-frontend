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
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="text-[#1EC5E0] text-xl lg:text-2xl font-bold">
        Overview Metrics
      </div>

      <div className="flex flex-col xl:flex-row gap-4 md:gap-5 lg:gap-6 w-full">
        <div className="flex-1 space-y-4 md:space-y-5 lg:space-y-6 min-w-0">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
            <div className="lg:flex-1">
              <StatusPipeline />
            </div>
            <div className="lg:flex-1 lg:flex lg:justify-end">
              <Rfq />
            </div>
          </div>
          <TotalUsers />
        </div>

        <div className="flex flex-col space-y-4 md:space-y-5 lg:space-y-5 xl:space-y-6 xl:w-[320px] 2xl:w-[400px] xl:shrink-0 min-w-0">
          <RfqUpload />
          <Activities />
          <Traffic />
        </div>
      </div>
    </div>
  )
}

export default MainDashboard
