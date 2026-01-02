import { Button, type ButtonProps } from 'antd'
import type { ReactNode } from 'react'

interface IButtonProps extends Omit<
  ButtonProps,
  'children' | 'type' | 'color'
> {
  children: ReactNode
  bgColor?: string
  className?: string
}

const ButtonComponent = ({
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
    height: 50,
    paddingInline: 32,
    ...style,
  }

  return (
    <Button
      type="primary"
      size={size}
      loading={loading}
      block={block}
      className={className}
      style={buttonStyle}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default ButtonComponent
