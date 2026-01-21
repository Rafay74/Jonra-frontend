import { type UseFormRegister, type FieldError, type Path } from 'react-hook-form'
import { InputField } from '../input-field'

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
}: FormFieldProps<T>) => {
  return (
    <InputField
      type={type}
      placeholder={placeholder}
      label={label}
      required={required}
      error={error?.message}
      labelClassName={labelClassName}
      {...register(name, { valueAsNumber })}
    />
  )
}

export { FormField }
