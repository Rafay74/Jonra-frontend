import { Switch, type SwitchProps } from 'antd'
import type { ReactNode } from 'react'

interface SwitchComponentProps extends SwitchProps {
  label?: ReactNode
}

const SwitchComponent = ({
  label,
  className,
  ...rest
}: SwitchComponentProps) => {
  return (
    <div className={`flex items-center gap-2 ${className || ''}`}>
      <Switch size="small" {...rest} />
      {label && <span>{label}</span>}
    </div>
  )
}

export default SwitchComponent
