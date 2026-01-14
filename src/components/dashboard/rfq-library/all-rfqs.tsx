import flag from '@/assets/flag.svg'
import { ButtonAtom } from '@/components/atoms'
import { RFQ_LIBRARY } from '@/constants/data'

const RfqLibrary = () => {
  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6 ">
      <div className="text-[#1EC5E0] text-xl lg:text-2xl font-bold">
        RFQ Library{' '}
        <span className="font-normal">(Global Aircraft Fleet RFQ )</span>
      </div>

      <div className="bg-[#C9C9C933] h-screen rounded-2xl p-8 flex flex-col gap-4 overflow-y-scroll">
        {RFQ_LIBRARY.map((rfq) => {
          return (
            <>
              <div className="rounded-full bg-gray-600 border-2 border-white p-2">
                <div className="flex justify-between items-center py-1 px-4 text-white">
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <span className="text-2xl mb-0">{rfq.description}</span>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <img src={flag} alt="" />
                        <span>{rfq.country}</span>
                      </div>
                      <span className="rounded-full bg-white text-black p-2">
                        Deadline: {rfq.deadline}
                      </span>
                    </div>
                  </div>
                  <div>
                    <ButtonAtom size="large" bgColor="#007AFF" block>
                      View Details
                    </ButtonAtom>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export { RfqLibrary }
