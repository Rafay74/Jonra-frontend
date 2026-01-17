import CrossIcon from '@/assets/X.svg'
import me from '@/assets/me.svg'
import { ButtonAtom } from '@/components/atoms'

interface IProfileModal {
  onClose: () => void
}

const ProfileModal = ({ onClose }: IProfileModal) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 w-full h-full max-h-[80vh] max-w-xl flex flex-col justify-between">
        <div className="flex justify-end">
          <div
            className="rounded-full border p-2 cursor-pointer"
            onClick={onClose}
          >
            <img src={CrossIcon} alt="cross" />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center flex-1 ">
          <img src={me} alt="" className="w-full max-w-40" />
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">John Smith</span>
            <span className="text-gray-500 text-md">Account User</span>
          </div>
        </div>

        <div className="bg-[#C9F7FF] rounded-2xl flex flex-col justify-center items-center flex-1 gap-4 ">
          <div className="flex flex-col items-center gap-1 justify-center ">
            <span className="text-md font-semibold">Email Address</span>
            <span className="text-gray-500 text-md ">smithjohn@mail.com</span>
          </div>
          <div className="flex flex-col items-center gap-1 justify-center">
            <span className="text-md font-semibold">Email Address</span>
            <span className="text-gray-500 text-md">smithjohn@mail.com</span>
          </div>
          <div className="flex flex-col items-center gap-1 justify-center">
            <span className="text-md font-semibold">Email Address</span>
            <span className="text-gray-500 text-md">smithjohn@mail.com</span>
          </div>

          <ButtonAtom
            className="h-12 sm:h-full px-6 rounded-xl text-white font-medium shrink-0"
            style={{
              background: 'linear-gradient(90deg, #1EC5E0 0%, #9F8EFF 100%)',
            }}
          >
            Edit Your Profile
          </ButtonAtom>
        </div>
      </div>
    </div>
  )
}

export { ProfileModal }
