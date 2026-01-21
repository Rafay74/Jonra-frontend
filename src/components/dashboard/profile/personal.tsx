import { CONTACT_INFORMATION, PERSONAL_INFORMATION } from './data'

const PersonalInformation = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="text-[#1EC5E0] text-xl font-bold">Contact Information</div>
      <div className="flex flex-col gap-4 p-4 overflow-y-auto flex-1 min-h-0">
        {CONTACT_INFORMATION.map((contact, index) => (
          <div key={index} className="flex gap-2 items-center justify-start text-white">
            <div className="bg-white rounded-full p-2">
              {contact?.icon && <contact.icon className="text-black" />}
            </div>
            <div className="flex flex-col">
              <span>{contact?.name}</span>
              <span className="text-gray-400">{contact?.description}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-[#1EC5E0] text-xl font-bold">Personal Information</div>
      <div className="flex flex-col gap-4 p-4 overflow-y-auto flex-1 min-h-0">
        {PERSONAL_INFORMATION.map((contact, index) => (
          <div key={index} className="flex gap-2 items-center justify-start text-white">
            <div className="bg-white rounded-full p-2">
              {contact?.icon && <contact.icon className="text-black" />}
            </div>
            <div className="flex flex-col">
              <span>{contact?.name}</span>
              <span className="text-gray-400">{contact?.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { PersonalInformation }
