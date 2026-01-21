import { ButtonAtom } from '@/components/atoms'
import me from '@/assets/me.svg'
import { PersonalInformation } from './personal'
import { AboutSection } from './about-section'

const ProfileOverview = () => {
  return (
    <div className="h-full flex flex-col p-4 md:p-6 gap-4 md:gap-6">
      <div className="text-[#1EC5E0] text-xl lg:text-2xl font-bold">Profile Overview</div>

      <div className="bg-[#C9C9C933] rounded-2xl p-4 md:p-6 lg:p-8 gap-4 flex items-center justify-between">
        <div className="flex items-center gap-4 ">
          <img src={me} className="w-32 shrink-0" />
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-2 text-white ">
              <span className="text-3xl">John Smith</span>
              <div className="border border-white rounded-2xl p-1 px-4 text-md">Online</div>
            </div>
            <span className="text-[#1EC5E0]">cacut@vctguy.com</span>
          </div>
        </div>

        

        <div>
          <ButtonAtom
            className="h-12 sm:h-full px-6 rounded-xl text-white font-medium shrink-0"
            style={{
              background: 'linear-gradient(90deg, #1EC5E0 0%, #9F8EFF 100%)',
            }}
          >
            Edit Profile
          </ButtonAtom>
        </div>
      </div>

      <div className="flex gap-4 flex-1 min-h-0">
        <div className="bg-[#C9C9C933] w-full max-w-lg rounded-2xl p-4 flex flex-col overflow-hidden">
          <PersonalInformation />
        </div>
        <div className="bg-[#C9C9C933] w-full p-4 rounded-2xl">
          <AboutSection />
        </div>
      </div>
    </div>
  )
}

export { ProfileOverview }
