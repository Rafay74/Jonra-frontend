import { useForm } from 'react-hook-form'

import { Link } from 'react-router-dom'
import { FormField } from '../molecules'
import { ButtonAtom, DividerAtom, SwitchAtom } from '../atoms'

interface ILogin {
  email: string
  password: string
}

// Google Icon component
const GoogleIcon = () => (
  <img
    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
    alt="Google"
    className="w-5 h-5"
  />
)

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>()

  const onSubmit = (data: ILogin) => {
    console.log(data)
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Form centered vertically */}
      <div className="flex-1 flex items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-4 lg:space-y-6"
        >
          <h1 className="text-2xl md:text-3xl lg:text-[40px] text-[#1EC5E0] font-black">
            WELCOME TO LIGHTNX
          </h1>

          <FormField
            type="email"
            name="email"
            label="Email Address"
            placeholder="Email or phone number"
            register={register}
            error={errors.email}
          />

          <FormField
            type="password"
            name="password"
            label="Password"
            placeholder="Enter password"
            register={register}
            error={errors.password}
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
            <SwitchAtom label="Remember me" />
            <Link to="/forgot-password" className="text-[15px] hover:underline">
              Forgot password?
            </Link>
          </div>

          <ButtonAtom size="large" bgColor="#007AFF" block>
            Login Now
          </ButtonAtom>

          <DividerAtom text="Or" />

          <ButtonAtom
            size="large"
            bgColor="#000000"
            block
            icon={<GoogleIcon />}
          >
            Or sign in with Google
          </ButtonAtom>
        </form>
      </div>

      {/* Sign up link - at bottom */}
      <div className="text-center py-4">
        <span className="text-gray-600">Dont have an account? </span>
        <Link
          to="/register"
          className="text-[#1EC5E0] hover:underline font-semibold"
        >
          Sign up now
        </Link>
      </div>
    </div>
  )
}

export default Login
