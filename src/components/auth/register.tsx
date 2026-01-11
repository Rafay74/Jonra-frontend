import { useForm } from 'react-hook-form'

import { Link } from 'react-router-dom'
import { FormField } from '../molecules'
import { ButtonAtom } from '../atoms'

interface IRegister {
  name: string
  dateOfBirth: string
  age: string
  city: string
  zipCode: string
  country: string
  state: string
  password: string
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>()

  const onSubmit = (data: IRegister) => {
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
            CREATE AN ACCOUNT
          </h1>

          <FormField
            type="text"
            name="name"
            label="Your Name"
            placeholder="Enter Name"
            register={register}
            error={errors.name}
          />

          <div className="flex gap-4">
            <div className="flex-1">
              <FormField
                type="text"
                name="dateOfBirth"
                label="Date of Birth"
                placeholder="Enter Age"
                register={register}
                error={errors.dateOfBirth}
              />
            </div>
            <div className="flex-1">
              <FormField
                type="text"
                name="age"
                label="Age"
                placeholder="Enter Age"
                register={register}
                error={errors.age}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <FormField
                type="text"
                name="city"
                label="City"
                placeholder="Enter Country"
                register={register}
                error={errors.city}
              />
            </div>
            <div className="flex-1">
              <FormField
                type="text"
                name="zipCode"
                label="Zip Code"
                placeholder="Enter Zip"
                register={register}
                error={errors.zipCode}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <FormField
                type="text"
                name="country"
                label="Country"
                placeholder="Enter Country"
                register={register}
                error={errors.country}
              />
            </div>
            <div className="flex-1">
              <FormField
                type="text"
                name="state"
                label="City"
                placeholder="Enter Your City"
                register={register}
                error={errors.state}
              />
            </div>
          </div>

          <FormField
            type="password"
            name="password"
            label="Password"
            placeholder="Enter password"
            register={register}
            error={errors.password}
          />

          <ButtonAtom size="large" bgColor="#007AFF" block>
            Create Your Account
          </ButtonAtom>
        </form>
      </div>

      <div className="text-center py-4">
        <span className="text-gray-600">Already have an account?</span>
        <Link to={'/'} className="text-[#1EC5E0] hover:underline font-semibold">
          Login Now
        </Link>
      </div>
    </div>
  )
}

export default Register
