import { InputAtom, LabelAtom } from '@/components/atoms'
import type { InputProps } from 'antd'

interface InputFieldProps extends Omit<InputProps, 'size'> {
  label?: string
  error?: string
  required?: boolean
  type?: 'text' | 'password' | 'email'
}

const InputField = ({
  label,
  error,
  required,
  type,
  ...rest
}: InputFieldProps) => (
  <div className="w-full">
    {label && <LabelAtom required={required}>{label}</LabelAtom>}
    <InputAtom type={type} {...rest} />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
)

export { InputField }
