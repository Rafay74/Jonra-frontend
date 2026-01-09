const Traffic = () => {
  return (
    <div className="border-2 border-[#1EC5E066] rounded-4xl p-4 md:p-5 2xl:p-6 bg-[#123C4E] min-h-[200px] flex flex-col">
      <div className="w-full flex-1 flex flex-col">
        <div className="text-[#1EC5E0] text-xl md:text-2xl font-bold mb-4 md:mb-6">
          Traffic
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 flex-1 justify-center">
          {/* Last Uploaded RFQ */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white text-sm md:text-base">
                Last Uploaded RFQ
              </span>
              <span className="text-white text-base md:text-lg font-bold">
                98%
              </span>
            </div>
            <div className="relative h-3 md:h-4 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-white rounded-full transition-all duration-300"
                style={{ width: '98%' }}
              ></div>
            </div>
          </div>

          {/* Check Compliance Issues */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white text-sm md:text-base">
                Check Issues
              </span>
              <span className="text-white text-base md:text-lg font-bold">
                82%
              </span>
            </div>
            <div className="relative h-3 md:h-4 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-white rounded-full transition-all duration-300"
                style={{ width: '82%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Traffic
