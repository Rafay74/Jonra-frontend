import { Input, type InputProps } from 'antd'

interface IInputAtomProps extends InputProps {
  type?: 'text' | 'password' | 'email'
}

const InputAtom = ({
  type = 'text',
  className,
  style,
  ...rest
}: IInputAtomProps) => {
  const InputComponent = type === 'password' ? Input.Password : Input

  return (
    <InputComponent
      className={`input-field-height ${className || ''}`}
      style={{
        fontSize: '16px',
        padding: '10px 24px',
        borderRadius: 999,
        ...style,
      }}
      {...rest}
    />
  )
}

export { InputAtom }
