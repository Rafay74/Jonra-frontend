import { useForm } from 'react-hook-form'
import { FormField } from '../molecules'
import { ButtonAtom } from '../atoms'
interface IResetPassword {
  email: string
}

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetPassword>()

  const onSubmit = (data: IResetPassword) => {
    console.log(data)
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 flex items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-4 lg:space-y-6"
        >
          <h1 className="text-[40px] text-[#1EC5E0] font-black">
            RESET PASSWORD
          </h1>

          <FormField
            type="email"
            name="email"
            label="Email Address"
            placeholder="Enter Email Address"
            register={register}
            error={errors.email}
          />

          <ButtonAtom size="large" bgColor="#007AFF" block>
            Reset Password
          </ButtonAtom>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
