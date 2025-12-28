import { Input, type InputProps } from 'antd'

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
  type = 'text',
  className,
  style,
  ...rest
}: InputFieldProps) => {
  const InputComponent = type === 'password' ? Input.Password : Input

  return (
    <div className="w-full">
      {label && (
        <label className="block text-[18px] mb-2 text-gray-700 font-semibold">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <InputComponent
        className={`h-[50px]  ${className || ''}`}
        style={{
          fontSize: '16px',
          padding: '10px 24px',
          borderRadius: 999,
          ...style,
        }}
        {...rest}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}

export default InputField
