import type { ReactNode } from 'react'
import cover from '@/assets/background.svg'
import logo from '@/assets/FF 1.svg'

interface IAuthLayout {
  children: ReactNode
}

const AuthLayout = ({ children }: IAuthLayout) => {
  return (
    <main
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col lg:flex-row min-h-screen p-6 lg:p-12 xl:p-16 gap-6 lg:gap-8">
        <div className="flex justify-center items-center lg:hidden">
          <img src={logo} alt={'logo'} className="h-16" />
        </div>

        <div className="hidden lg:flex lg:w-[45%] xl:w-[50%] bg-[#C9F7FF] rounded-4xl justify-center items-center shrink-0">
          <img src={logo} alt={'logo'} className="max-w-[70%] h-auto" />
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 w-full max-w-[600px] mx-auto py-8">
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}

export default AuthLayout
