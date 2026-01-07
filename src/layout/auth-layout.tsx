import type { ReactNode } from 'react'
import cover from '../assets/background.svg'
import logo from '../assets/FF 1.svg'

interface IAuthLayout {
  children: ReactNode
}

const AuthLayout = ({ children }: IAuthLayout) => {
  return (
    <main
      className="relative min-h-screen "
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="flex justify-center items-center py-6 lg:hidden">
          <img src={logo} alt={'logo'} className="h-16 lg:h-auto" />
        </div>

        <div className="lg:m-20 lg:w-[1100px] bg-[#C9F7FF] rounded-4xl hidden lg:flex justify-center items-center">
          <img src={logo} alt={'logo'} className="" />
        </div>
        <div className="m-10 lg:m-20 flex-1 flex flex-col ">
          <div className="flex-1 w-full max-w-[500px] mx-auto py-8">
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}

export default AuthLayout
