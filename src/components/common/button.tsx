import { Button, type ButtonProps } from 'antd'
import type { ReactNode } from 'react'

interface IButtonProps extends Omit<ButtonProps, 'children' | 'type'> {
  children: ReactNode
  color?: string
  className?: string
}

const ButtonComponent = ({
  children,
  size = 'large',
  loading = false,
  block = false,
  color,
  className,
  style,
  ...rest
}: IButtonProps) => {
  const buttonStyle: React.CSSProperties = {
    ...(color && {
      backgroundColor: color,
      borderColor: color,
    }),
    borderRadius: 999,
    ...style,
  }

  return (
    <Button
      type="primary"
      size={size}
      loading={loading}
      block={block}
      className={`btn ${className || ''}`}
      style={buttonStyle}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default ButtonComponent
