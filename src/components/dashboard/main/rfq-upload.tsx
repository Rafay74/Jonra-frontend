import { UploadCloud } from 'lucide-react'

const RfqUpload = () => {
  return (
    <div className="border-2 border-[#1EC5E066] rounded-4xl p-6 bg-[#123C4E] flex flex-col h-[400px]">
      <div className="text-[#1EC5E0] text-2xl font-bold mb-4">RFQ Upload</div>

      <div className="flex-1 bg-[#193744] rounded-2xl p-6 border-4 border-dashed border-white flex flex-col items-center justify-center">
        <UploadCloud className="w-12 h-10 text-white mb-4" />
        <p className="text-white text-lg font-bold">Drag and Drop</p>
        <p className="text-gray-400 text-sm text-center mt-1">
          Allowed formats: PDF, Word, Excel, ZIP
        </p>
      </div>
    </div>
  )
}

export default RfqUpload
