import { FormField } from '@/components/molecules'
import type { FieldError, UseFormRegister } from 'react-hook-form'

interface IBillingSection {
  title: string
  register: UseFormRegister<any>
  errors: Record<string, FieldError | undefined>
}

const BillingSection = ({ title, register, errors }: IBillingSection) => {
  return (
    <div className="space-y-4">
      <h3 className="text-white font-medium">{title}</h3>

      <div className="grid grid-cols-2 gap-4">
        <FormField
          placeholder="Name"
          name="name"
          register={register}
          error={errors.name}
        />

        <FormField
          placeholder="Last Name"
          name="lastName"
          register={register}
          error={errors.lastName}
        />

        <FormField
          placeholder="State"
          name="state"
          register={register}
          error={errors.state}
        />

        <FormField
          placeholder="Postal Code"
          name="postalCode"
          register={register}
          error={errors.postalCode}
        />

        <div className="col-span-2">
          <FormField
            placeholder="City"
            name="city"
            register={register}
            error={errors.city}
          />
        </div>

        <FormField
          placeholder="Add Phone No"
          name="phoneNo"
          register={register}
          error={errors.phoneNo}
        />
        <FormField
          placeholder="Add GST"
          name="gst"
          register={register}
          error={errors.gst}
        />

        <div className="col-span-2">
          <FormField
            placeholder="Add Email Address"
            name="email"
            register={register}
            error={errors.email}
          />
        </div>
      </div>
    </div>
  )
}

export { BillingSection }
