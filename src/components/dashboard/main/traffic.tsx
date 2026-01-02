const Traffic = () => {
  return (
    <div className="border-2 border-[#1EC5E066] rounded-4xl p-6 bg-[#123C4E]">
      <div className="w-[600px] space-y-4 shrink-0">
        <div className="text-[#1EC5E0] text-2xl font-bold mb-4">
          Traffic
        </div>

        <div className="flex gap-6">
          {/* Last Uploaded RFQ */}
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-white text-sm">
                Last Uploaded RFQ
              </span>
              <span className="text-white text-sm font-medium">98%</span>
            </div>
            <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-white rounded-full"
                style={{ width: '98%' }}
              ></div>
            </div>
          </div>

          {/* Check Compliance Issues */}
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-white text-sm">
                Check Compliance Issues
              </span>
              <span className="text-white text-sm font-medium">82%</span>
            </div>
            <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-white rounded-full"
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

