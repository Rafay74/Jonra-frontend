import CrossIcon from '@/assets/X.svg'
import me from '@/assets/me.svg'
import { ButtonAtom } from '@/components/atoms'

interface IProfileModal {
  onClose: () => void
}

const ProfileModal = ({ onClose }: IProfileModal) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-80 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-4 md:p-6 w-full max-w-xl max-h-[90vh] md:max-h-[80vh] flex flex-col justify-between overflow-y-auto">
        <div className="flex justify-end mb-4">
          <div
            className="rounded-full border p-2 cursor-pointer w-fit"
            onClick={onClose}
          >
            <img
              src={CrossIcon}
              alt="cross"
              className="w-4 h-4 md:w-5 md:h-5"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center flex-1">
          <img src={me} alt="" className="w-full max-w-32 md:max-w-40" />
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold">John Smith</span>
            <span className="text-gray-500 text-sm md:text-md">
              Account User
            </span>
          </div>
        </div>

        <div className="bg-[#C9F7FF] rounded-2xl flex flex-col justify-center items-center gap-3 md:gap-4 p-4 md:p-6 mt-4">
          <div className="flex flex-col items-center gap-1 justify-center">
            <span className="text-sm md:text-md font-semibold">
              Email Address
            </span>
            <span className="text-gray-500 text-xs md:text-md">
              smithjohn@mail.com
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 justify-center">
            <span className="text-sm md:text-md font-semibold">
              Phone Number
            </span>
            <span className="text-gray-500 text-xs md:text-md">
              +1 234 567 890
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 justify-center">
            <span className="text-sm md:text-md font-semibold">Location</span>
            <span className="text-gray-500 text-xs md:text-md">
              New York, USA
            </span>
          </div>

          <ButtonAtom
            className="h-12 px-6 rounded-xl text-white font-medium shrink-0 mt-2"
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
