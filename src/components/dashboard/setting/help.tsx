import { ButtonAtom } from '@/components/atoms'
import { FormField } from '@/components/molecules'
import { UploadField } from '@/components/molecules/upload-field'
import { useForm, Controller } from 'react-hook-form'

interface ISettingHelp {
  name: string,
  title: string,
  message: string,
  attachments: File[]
}

const SettingHelp = () => {
  const {
    register,
    handleSubmit,
    control,
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
            error={errors.title}
            labelClassName="text-white"
          />


          <FormField
            name="message"
            label="Type your message here"
            placeholder="Type your query here"
            register={register}
            error={errors.message}
            labelClassName="text-white"
            showTextArea
          />

          <Controller
            name="attachments"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <UploadField
                label="Attachments"
                labelClassName="text-white"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />


          <ButtonAtom
            htmlType="submit"
            className="h-12 sm:h-full px-6 rounded-xl text-white font-medium shrink-0"
            style={{
              background: 'linear-gradient(90deg, #1EC5E0 0%, #9F8EFF 100%)',
            }}
          >
            Submit Now
          </ButtonAtom>

        </form>
      </div>
    </div>
  )
}
export { SettingHelp }
