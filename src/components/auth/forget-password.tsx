import { useForm } from 'react-hook-form'
import { FormField } from '../molecules'
import { ButtonAtom } from '../atoms'

interface IForgotPassword {
  email: string
}

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPassword>()

  const onSubmit = (data: IForgotPassword) => {
    console.log(data)
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 flex items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-4 lg:space-y-6"
        >
          <h1 className="text-[40px] text-[#1EC5E0] font-black ">
            FORGOT PASSWORD
          </h1>

          <FormField
            type="email"
            name="email"
            label="Your Email"
            placeholder="Enter Email Address"
            register={register}
            error={errors.email}
          />

          <ButtonAtom size="large" bgColor="#007AFF" block>
            Next
          </ButtonAtom>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
