import { InputAtom, LabelAtom } from '@/components/atoms'
import type { InputProps } from 'antd'

interface InputFieldProps extends Omit<InputProps, 'size'> {
  label?: string
  error?: string
  required?: boolean
  type?: 'text' | 'password' | 'email'
  labelClassName?: string
}

const InputField = ({ label, error, required, type, labelClassName, ...rest }: InputFieldProps) => (
  <div className="w-full">
    {label && (
      <LabelAtom required={required} className={labelClassName}>
        {label}
      </LabelAtom>
    )}
    <InputAtom type={type} {...rest} />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
)

export { InputField }
