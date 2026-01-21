import { ButtonAtom } from '@/components/atoms'
import googleIcon from '@/assets/google.svg'
import facebookIcon from '@/assets/facebook.svg'
import instaIcon from '@/assets/insta.svg'
import card from '@/assets/card.svg'

const AboutSection = () => {
  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="space-y-3">
        <div className="text-[#1EC5E0] text-xl font-bold">About</div>
        <p className="text-white text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laboriosam excepturi velit
          voluptatem temporibus eveniet corporis? Aut ullam, in laudantium dolorum itaque at quo
          aperiam voluptatem asperiores odio! Odio, fuga. Corrupti exercitationem repellat ab et,
          excepturi voluptates dolorum omnis id quidem fugit. Aut aperiam numquam laboriosam, quam
          rem, quo corrupti praesentium minima non necessitatibus perspiciatis itaque architecto
          ducimus blanditiis eveniet!
        </p>
      </div>

      <div className="flex flex-wrap justify-between items-start gap-6">
        <div className="flex flex-col gap-3">
          <span className="text-[#1EC5E0] text-xl font-bold">Social Accounts</span>
          <div className="flex gap-3">
            <div className="bg-white rounded-full p-2 hover:opacity-80 transition-opacity cursor-pointer">
              <img src={googleIcon} alt="Google" className="w-6 h-6" />
            </div>
            <div className="bg-white rounded-full p-2 hover:opacity-80 transition-opacity cursor-pointer">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            </div>
            <div className="bg-white rounded-full p-2 hover:opacity-80 transition-opacity cursor-pointer">
              <img src={instaIcon} alt="Instagram" className="w-6 h-6" />
            </div>
            <div className="bg-white rounded-full p-2 hover:opacity-80 transition-opacity cursor-pointer">
              <img src={googleIcon} alt="Google" className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center">
          <span className="text-[#1EC5E0] text-xl font-bold">Delete Account</span>
          <ButtonAtom
            className="h-12 px-6 rounded-xl text-white font-medium"
            style={{
              background: 'linear-gradient(90deg, #1EC5E0 0%, #9F8EFF 100%)',
            }}
          >
            Delete Your Account
          </ButtonAtom>
        </div>

        <div className="flex flex-col gap-3 items-center">
          <span className="text-[#1EC5E0] text-xl font-bold">Deactivate Account</span>
          <ButtonAtom
            className="h-12 px-6 rounded-xl text-white font-medium"
            style={{
              background: 'linear-gradient(90deg, #1EC5E0 0%, #9F8EFF 100%)',
            }}
          >
            Deactivate Your Account
          </ButtonAtom>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-start gap-6 mt-12">
        <div className="flex flex-col gap-4">
          <div className="space-y-1">
            <div className="text-[#1EC5E0] text-xl font-bold">Payment Method</div>
            <p className="text-white text-base">Manage your default payment method</p>
          </div>
          <ButtonAtom
            className="h-12 px-6 rounded-xl text-white font-medium w-fit"
            style={{
              background: 'linear-gradient(90deg, #1EC5E0 0%, #9F8EFF 100%)',
            }}
          >
            Add Payment Method
          </ButtonAtom>
        </div>

        <div className="flex flex-col gap-4 border border-gray-600 rounded-2xl px-6">
          <div className="flex items-center gap-8 rounded-xl p-4 ">
            <img src={card} alt="Card" className="w-12 h-auto" />
            <div className="flex flex-col">
              <span className="text-white font-medium">Master Card ****12</span>
              <span className="text-gray-400 text-sm">Expiry 02/25</span>
            </div>
            <ButtonAtom
              className="h-10 px-4 rounded-lg text-white font-medium ml-4"
              style={{
                background: 'transparent',
                border: '1px solid white',
              }}
            >
              Update
            </ButtonAtom>
          </div>

          <div className="flex items-center gap-8  rounded-xl p-4">
            <img src={card} alt="Card" className="w-12 h-auto" />
            <div className="flex flex-col">
              <span className="text-white font-medium">Master Card ****12</span>
              <span className="text-gray-400 text-sm">Expiry 02/25</span>
            </div>
            <ButtonAtom
              className="h-10 px-4 rounded-lg text-white font-medium ml-4"
              style={{
                background: 'transparent',
                border: '1px solid white',
              }}
            >
              Update
            </ButtonAtom>
          </div>
        </div>
      </div>
    </div>
  )
}

export { AboutSection }
