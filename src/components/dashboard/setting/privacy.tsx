import { ButtonAtom, SwitchAtom } from '@/components/atoms'
import { ProgressBar } from '@/components/molecules'

const SettingPrivacy = () => {
  return (
    <>
      <div className="h-full flex flex-col p-4 md:p-6 gap-4 md:gap-6">
        <div className="text-[#1EC5E0] text-xl lg:text-2xl font-bold">
          Settings ( Privacy & Security )
        </div>

        <div className="bg-[#C9C9C933] rounded-2xl p-4 md:p-6  flex flex-col gap-3 md:gap-4 overflow-y-auto">
          <div className=" bg-gray-600 p-6 rounded-2xl flex flex-col lg:items-center justify-between gap-6 lg:flex-row">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <ProgressBar />
              <div className="flex flex-col gap-2">
                <span className="text-white text-2xl font-semibold">
                  Your account security is 90%
                </span>
                <span className="text-gray-200">
                  Please review your account security settings regularly and update your password
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <ButtonAtom
                className="h-10 px-4 rounded-lg text-white font-medium ml-4"
                style={{
                  background: 'transparent',
                  border: '1px solid white',
                }}
              >
                Dismiss
              </ButtonAtom>
              <ButtonAtom
                className="h-12 sm:h-full px-6 rounded-xl text-white font-medium shrink-0"
                style={{
                  background: 'linear-gradient(90deg, #1EC5E0 0%, #9F8EFF 100%)',
                }}
              >
                Review Security
              </ButtonAtom>
            </div>
          </div>

          <div className=" bg-gray-600 p-6 rounded-2xl flex flex-col lg:items-center justify-between gap-6 lg:flex-row">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="flex flex-col gap-2">
                <span className="text-white text-2xl font-semibold">Profile Visibility</span>
                <span className="text-gray-200">Show my profile in search results</span>
              </div>
            </div>
            <SwitchAtom />
          </div>


        </div>
      </div>
    </>
  )
}

export { SettingPrivacy }
