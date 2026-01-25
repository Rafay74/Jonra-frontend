import { UploadCloud } from "lucide-react"

interface IProposalCard {
  title: string
  fileUpload?: boolean
}
const ProposalCard = ({ title, fileUpload }: IProposalCard) => {
  return (
    <div className="rounded-3xl p-4 bg-[#bcb7b733]">
      <div className=" w-full h-full  flex flex-col gap-4">
        <span className="text-[#1EC5E0] text-lg  font-bold">{title}</span>

        {
          fileUpload ? <div className="flex-1 bg-[#193744] rounded-2xl p-6 border-4 border-dashed border-white flex flex-col items-center justify-center">
            <UploadCloud className="w-12 h-10 text-white mb-4" />
            <p className="text-white text-lg font-bold">Drag and Drop</p>
            <p className="text-gray-400 text-sm text-center mt-1">
              Allowed formats: PDF, Word, Excel, ZIP
            </p>
          </div> :
            <div className="bg-[#C9C9C933] border border-gray-400 rounded-2xl h-full text-lg text-white p-4 flex flex-col items-center justify-center ">
              <span>2025/00146</span>
              <span>2744554572</span>
            </div>

        }

      </div>
    </div>
  )
}

export { ProposalCard }
