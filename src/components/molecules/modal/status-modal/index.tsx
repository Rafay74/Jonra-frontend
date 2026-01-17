interface IStatusModal {
  onClose: () => void
}

const StatusModal = ({ onClose }: IStatusModal) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-100 flex items-center justify-center"></div>
  )
}

export { StatusModal }
