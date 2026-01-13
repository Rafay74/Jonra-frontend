import { Mail, MapPin, Phone } from 'lucide-react'
import { ContactMap } from './map'

const ContactContent = () => {
  return (
    <>
      <div className="bg-[#123C4E] h-screen rounded-2xl p-8 flex flex-col xl:flex-row gap-4">
        <div className="bg-[#123C4E] w-full">
          <div className="h-full flex flex-col py-12 items-start gap-6 px-12">
            <span className="text-[#1EC5E0] text-4xl font-bold">
              Send Us a Message
            </span>

            <p className=" text-white text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              repellat, voluptatem voluptatibus delectus nemo quaerat quidem
              nesciunt ut possimus qui dignissimos iusto voluptatum facilis
              maxime explicabo corrupti perspiciatis a perferendis!
            </p>

            <div className="flex flex-col gap-6 text-white text-xl">
              <div className="flex items-center gap-4">
                <div className="rounded-full border p-4 ">
                  <MapPin className="w-8 h-8" />
                </div>
                <div className="flex flex-col gap-2">
                  <span>Location</span>
                  <span>123 Literary Lane, Booktown, USA 45678</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full border p-4">
                  <Phone className="w-8 h-8" />
                </div>
                <div className="flex flex-col gap-2">
                  <span>Phone Number</span>
                  <span>(+62) 1234 567 890</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full border p-4">
                  <Mail className="w-8 h-8" />
                </div>
                <div className="flex flex-col gap-2">
                  <span>Email Address</span>
                  <span>lipsum@mail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactMap />
      </div>
    </>
  )
}
export { ContactContent }
