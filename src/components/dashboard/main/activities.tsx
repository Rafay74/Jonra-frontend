import { ACTIVITES } from '@/constants/data'
import { Download } from 'lucide-react'

const Activities = () => {
  return (
    <div className=" border-2 border-[#1EC5E066] rounded-4xl p-6 bg-[#123C4E]">
      <div className="w-[600px] space-y-4 shrink-0">
        <div className="text-[#1EC5E0] text-2xl font-bold p-2">
          Activities
        </div>
        <div className="space-y-6">
          {ACTIVITES.map((activity, index) => (
            <div key={index} className="flex items-start gap-4 relative">
              <div className="relative z-10 flex-shrink-0">
                {activity.logo_src ? (
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={activity.logo_src}
                      alt={activity.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-400"></div>
                )}
              </div>

              <div className="flex-1 pt-1">
                <h3 className="text-white font-medium mb-1">
                  {activity.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {activity.description}
                </p>

                {index === ACTIVITES.length - 1 && (
                  <>
                    <p className="text-gray-400 text-sm mt-1">
                      Commercial proposal preview (XLSX style)
                    </p>
                    <button className="mt-3 flex items-center gap-2 text-[#1EC5E0] hover:text-[#1EC5E0]/80 transition-colors">
                      <Download className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        Download DOCX/XLSX
                      </span>
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Activities

