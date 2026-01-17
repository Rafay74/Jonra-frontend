import { Mail, MapPin, Phone } from 'lucide-react'
import { ContactMap } from './map'

// contact/content.tsx
const ContactContent = () => {
  return (
    <>
      <div className="bg-[#123C4E] rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col xl:flex-row gap-4 md:gap-6 items-stretch">
        <div className="bg-[#123C4E] w-full xl:w-1/2">
          <div className="h-full flex flex-col py-6 md:py-8 lg:py-12 items-start gap-4 md:gap-6 px-4 md:px-8 lg:px-12">
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1EC5E0]">
              Send Us a Message
            </span>

            <p className="text-white text-base md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              repellat, voluptatem voluptatibus delectus nemo quaerat quidem
              nesciunt ut possimus qui dignissimos iusto voluptatum facilis
              maxime explicabo corrupti perspiciatis a perferendis!
            </p>

            <div className="flex flex-col gap-4 md:gap-6 text-white text-base md:text-lg lg:text-xl">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="rounded-full border p-3 md:p-4">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <span className="text-sm md:text-base lg:text-lg">
                    Location
                  </span>
                  <span className="text-xs md:text-sm lg:text-base">
                    123 Literary Lane, Booktown, USA 45678
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="rounded-full border p-3 md:p-4">
                  <Phone className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <span className="text-sm md:text-base lg:text-lg">
                    Phone Number
                  </span>
                  <span className="text-xs md:text-sm lg:text-base">
                    (+62) 1234 567 890
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="rounded-full border p-3 md:p-4">
                  <Mail className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <span className="text-sm md:text-base lg:text-lg">
                    Email Address
                  </span>
                  <span className="text-xs md:text-sm lg:text-base">
                    lipsum@mail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 flex items-stretch">
          <ContactMap />
        </div>
      </div>
    </>
  )
}

export { ContactContent }
