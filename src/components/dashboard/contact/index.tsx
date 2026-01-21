import { ContactContent } from './content'

const Contact = () => {
  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6 ">
      <div className="text-[#1EC5E0] text-xl lg:text-2xl font-bold">Contact Us</div>

      <ContactContent />
    </div>
  )
}

export { Contact }
