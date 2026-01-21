import { ButtonAtom } from '@/components/atoms'
import { Check } from 'lucide-react'
interface IStatusModal {
  onClose: () => void
}

const StatusModal = ({ onClose }: IStatusModal) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-80 flex items-center justify-center p-4">
      <div
        className="rounded-2xl p-4 md:p-6 w-full max-w-lg h-full max-h-[40vh] 
        flex flex-col justify-between overflow-y-auto
        bg-linear-to-br from-[#1EC5E0] via-[#1EC5E0] to-[#9F8EFF]"
      >
        <div className="flex flex-col gap-4 items-center justify-center flex-1 text-white">
          <div className="rounded-full bg-white p-1">
            <div className="rounded-full bg-green-500 p-2">
              <Check />
            </div>
          </div>
          <span className="text-2xl md:text-4xl">Congratulations!</span>
          <span className=" text-sm md:text-md">Your invoice has been created successfully</span>
          <ButtonAtom className="h-12 px-6 rounded-xl text-white font-medium shrink-0 mt-2">
            Done
          </ButtonAtom>
        </div>
      </div>
    </div>
  )
}

export { StatusModal }
