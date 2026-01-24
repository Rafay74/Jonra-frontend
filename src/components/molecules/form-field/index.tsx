import { type UseFormRegister, type FieldError, type Path } from 'react-hook-form'

import { InputField } from '../input-field'
import { TextAreaField } from '../textarea-field'

interface FormFieldProps<T extends Record<string, any>> {
  type?: 'text' | 'password' | 'email'
  placeholder?: string
  label?: string
  name: Path<T>
  register: UseFormRegister<T>
  error?: FieldError
  required?: boolean
  valueAsNumber?: boolean
  labelClassName?: string
  showTextArea?: boolean
}

const FormField = <T extends Record<string, any>>({
  type = 'text',
  placeholder,
  label,
  name,
  register,
  error,
  required,
  valueAsNumber,
  labelClassName,
  showTextArea,
}: FormFieldProps<T>) => {
  return (
    <>
      {
        showTextArea ?
          <TextAreaField
            label={label}
            labelClassName={labelClassName}
            required={required}
            error={error?.message}
          />
          :
          <InputField
            type={type}
            placeholder={placeholder}
            label={label}
            required={required}
            error={error?.message}
            labelClassName={labelClassName}
            {...register(name, { valueAsNumber })}
          />
      }
    </>
  )
}

export { FormField }
