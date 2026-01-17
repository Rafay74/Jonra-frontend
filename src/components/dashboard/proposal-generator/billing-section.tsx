import { FormField } from '@/components/molecules'
import type { FieldErrors, FieldError, UseFormRegister } from 'react-hook-form'

interface IBillingSection {
  title: string
  register: UseFormRegister<any>
  errors: FieldErrors<any>
}

const BillingSection = ({ title, register, errors }: IBillingSection) => {
  // Helper function to safely get error
  const getError = (
    error: FieldErrors<any>[string]
  ): FieldError | undefined => {
    return error && 'message' in error ? (error as FieldError) : undefined
  }

  return (
    <div className="space-y-4">
      <h3 className="text-white font-medium">{title}</h3>

      <div className="grid grid-cols-2 gap-4">
        <FormField
          placeholder="Name"
          name="name"
          register={register}
          error={getError(errors.name)}
        />

        <FormField
          placeholder="Last Name"
          name="lastName"
          register={register}
          error={getError(errors.lastName)}
        />

        <FormField
          placeholder="State"
          name="state"
          register={register}
          error={getError(errors.state)}
        />

        <FormField
          placeholder="Postal Code"
          name="postalCode"
          register={register}
          error={getError(errors.postalCode)}
        />

        <div className="col-span-2">
          <FormField
            placeholder="City"
            name="city"
            register={register}
            error={getError(errors.city)}
          />
        </div>

        <FormField
          placeholder="Add Phone No"
          name="phoneNo"
          register={register}
          error={getError(errors.phoneNo)}
        />
        <FormField
          placeholder="Add GST"
          name="gst"
          register={register}
          error={getError(errors.gst)}
        />

        <div className="col-span-2">
          <FormField
            placeholder="Add Email Address"
            name="email"
            register={register}
            error={getError(errors.email)}
          />
        </div>
      </div>
    </div>
  )
}

export { BillingSection }
