// import flag from '@/assets/flag.svg'
// import { ButtonAtom } from '@/components/atoms'
// import { RFQ_LIBRARY } from '@/constants/data'

// const RfqLibrary = () => {
//   return (
//     <div className="p-4 md:p-6 space-y-4 md:space-y-6 ">
//       <div className="text-[#1EC5E0] text-xl lg:text-2xl font-bold">
//         RFQ Library{' '}
//         <span className="font-normal">(Global Aircraft Fleet RFQ )</span>
//       </div>

//       <div className="bg-[#C9C9C933] h-screen rounded-2xl p-8 flex flex-col gap-4 overflow-y-scroll">
//         {RFQ_LIBRARY.map((rfq) => {
//           return (
//             <>
//               <div className="rounded-full bg-gray-600 border-2 border-white p-2">
//                 <div className="flex justify-between items-center py-1 px-4 text-white">
//                   <div className="flex flex-col gap-2 justify-start items-start">
//                     <span className="text-2xl mb-0">{rfq.description}</span>
//                     <div className="flex items-center space-x-4">
//                       <div className="flex items-center space-x-2">
//                         <img src={flag} alt="" />
//                         <span>{rfq.country}</span>
//                       </div>
//                       <span className="rounded-full bg-white text-black p-2">
//                         Deadline: {rfq.deadline}
//                       </span>
//                     </div>
//                   </div>
//                   <div>
//                     <ButtonAtom size="large" bgColor="#007AFF" block>
//                       View Details
//                     </ButtonAtom>
//                   </div>
//                 </div>
//               </div>
//             </>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export { RfqLibrary }

import flag from '@/assets/flag.svg'
import { ButtonAtom } from '@/components/atoms'
import { RFQ_LIBRARY } from '@/constants/data'
import { Link } from 'react-router-dom'

const RfqLibrary = () => {
  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="text-[#1EC5E0] text-xl lg:text-2xl font-bold">
        RFQ Library{' '}
        <span className="font-normal">(Global Aircraft Fleet RFQ)</span>
      </div>

      <div className="bg-[#C9C9C933] rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col gap-3 md:gap-4 overflow-y-auto">
        {RFQ_LIBRARY.map((rfq, index) => {
          return (
            <div
              key={index}
              className="rounded-3xl bg-gray-600 border-2 border-white p-3 md:p-4"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 py-1 px-2 md:px-4 text-white">
                <div className="flex flex-col gap-2 justify-start items-start flex-1">
                  <span className="text-base md:text-lg lg:text-xl xl:text-2xl mb-0">
                    {rfq.description}
                  </span>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                      <img
                        src={flag}
                        alt="flag"
                        className="w-4 h-4 md:w-5 md:h-5"
                      />
                      <span className="text-sm md:text-base">
                        {rfq.country}
                      </span>
                    </div>
                    <span className="rounded-2xl bg-white text-black px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm whitespace-nowrap">
                      Deadline: {rfq.deadline}
                    </span>
                  </div>
                </div>
                <Link to={'/rfq-detail/1'}>
                  <div className="w-full lg:w-auto lg:shrink-0">
                    <ButtonAtom
                      size="large"
                      bgColor="#007AFF"
                      block={false}
                      className="w-full lg:w-auto"
                    >
                      View Details
                    </ButtonAtom>
                  </div>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { RfqLibrary }
