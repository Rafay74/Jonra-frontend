import { Button, type ButtonProps } from 'antd'
import type { ReactNode } from 'react'

interface IButtonProps extends Omit<ButtonProps, 'children' | 'type'> {
  children: ReactNode
  bgColor?: string
  className?: string
}

const ButtonAtom = ({
  children,
  size = 'large',
  loading = false,
  block = false,
  bgColor,
  className,
  style,
  ...rest
}: IButtonProps) => {
  const buttonStyle: React.CSSProperties = {
    ...(bgColor && {
      backgroundColor: bgColor,
      borderColor: bgColor,
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

export { ButtonAtom }
