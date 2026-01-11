import { Divider, type DividerProps } from 'antd'

interface IDividerAtomProps extends DividerProps {
  text?: string
}

const DividerAtom = ({ text = 'Or', ...rest }: IDividerAtomProps) => {
  return <Divider {...rest}>{text}</Divider>
}

export { DividerAtom }
