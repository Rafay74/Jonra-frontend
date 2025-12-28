import { ConfigProvider } from 'antd'
import type { ReactNode } from 'react'

interface AntdProviderProps {
  children: ReactNode
}

const AntdProvider = ({ children }: AntdProviderProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "'PolySans Trial', sans-serif",
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default AntdProvider
