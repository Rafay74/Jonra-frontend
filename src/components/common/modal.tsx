import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import ButtonComponent from './button'

interface ModalProps {
  onClose?: () => void
  onDone?: () => void
  data: {
    title: string
    text: string
  }
}

const Modal = ({ onClose, onDone, data }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="relative w-full max-w-[450px] rounded-3xl p-8 text-center mx-4"
        style={{
          background: 'linear-gradient(135deg, #1EC5E0 0%, #9F8EFF 100%)',
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <CloseOutlined className="text-lg" />
        </button>

        <div className="flex justify-center mt-8 mb-6">
          <div className="rounded-full w-18 h-18 bg-white flex items-center justify-center ">
            <div className="w-16 h-16 rounded-full bg-[#4CD964] flex items-center justify-center">
              <CheckOutlined className="text-white text-3xl" />
            </div>
          </div>
        </div>

        <h1 className="text-[32px] text-white font-black mb-2">{data.title}</h1>
        <p className="text-white mb-8">{data.text}</p>

        <ButtonComponent size="large" bgColor="#007AFF" block onClick={onDone}>
          Done
        </ButtonComponent>
      </div>
    </div>
  )
}

export default Modal
