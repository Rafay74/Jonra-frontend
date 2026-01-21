import { LabelAtom } from '@/components/atoms'
import { FormField } from '@/components/molecules'
import { useForm } from 'react-hook-form'

interface ISettingHelp {}
const SettingHelp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISettingHelp>()

  const onSubmit = (data: ISettingHelp) => {
    console.log(data)
  }

  return (
    <div className="h-full flex flex-col p-4 md:p-6 gap-4 md:gap-6">
      <div className="text-[#1EC5E0] text-xl lg:text-2xl font-bold">
        Settings ( Help & Support )
      </div>

      <div className="bg-[#C9C9C933] rounded-2xl p-4 md:p-6  flex flex-col gap-3 md:gap-4 overflow-y-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4 lg:space-y-6">
          <FormField
            type="text"
            name="name"
            label="Name"
            placeholder="Enter your Name"
            register={register}
            error={errors.name}
            labelClassName="text-white"
          />

          <FormField
            type="text"
            name="title"
            label="Title"
            placeholder="Enter your Issue Title"
            register={register}
            error={errors.name}
            labelClassName="text-white"
          />
        </form>
      </div>
    </div>
  )
}
export { SettingHelp }
