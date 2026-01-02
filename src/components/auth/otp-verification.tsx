import { useState } from 'react'
import { Input } from 'antd'
import ButtonComponent from '../common/button'

const OtpVerification = () => {
  const [otp, setOtp] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 flex items-center">
        <form onSubmit={handleSubmit} className="w-full space-y-6 text-center">
          <h1 className="text-[40px] text-[#1EC5E0] font-black">OTP</h1>

          <p className="text-gray-700 font-semibold">
            Enter the security code we sent to
            <br />
            <span className="text-black font-bold">+9752752814</span>
          </p>

          <div className="flex justify-center">
            <Input.OTP
              length={6}
              value={otp}
              onChange={setOtp}
              styles={{
                input: {
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  textAlign: 'center',
                  fontSize: '18px',
                },
              }}
            />
          </div>

          <ButtonComponent size="large" bgColor="#007AFF" block>
            Next
          </ButtonComponent>
        </form>
      </div>
    </div>
  )
}

export default OtpVerification
