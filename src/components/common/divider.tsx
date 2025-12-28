import { Divider, type DividerProps } from 'antd'

interface DividerComponentProps extends DividerProps {
  text?: string
}

const DividerComponent = ({ text = 'Or', ...rest }: DividerComponentProps) => {
  return <Divider {...rest}>{text}</Divider>
}

export default DividerComponent

