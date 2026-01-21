import { User, ChevronRight } from 'lucide-react'
import { SETTING_DATA } from './data'
import { Link } from 'react-router-dom'

const Setting = () => {
  return (
    <div className="h-full flex flex-col p-4 md:p-6 gap-4 md:gap-6">
      <div className="text-[#1EC5E0] text-xl lg:text-2xl font-bold">Settings</div>

      <div className="bg-[#C9C9C933] rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col gap-4 overflow-y-auto">
        {SETTING_DATA.map((item, index) => {
          return (
            <Link to={item.path} key={index}>
              <div className="border-2 border-white rounded-2xl flex justify-between items-center px-4 md:px-6 py-3 md:py-4 gap-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="rounded-full p-2 md:p-3 bg-white shrink-0">
                    <User className="w-5 h-5 md:w-6 md:h-6" />
                  </div>

                  <span className="text-white text-base md:text-lg lg:text-xl">{item.title}</span>
                </div>
                <div className="shrink-0">
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export { Setting }
