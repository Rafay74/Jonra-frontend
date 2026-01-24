import logo from '@/assets/FF 1.svg'
import { ProposalSection } from './section'


// interface IProposalModal {
//     onClose: () => void
// }

const ProposalModal = () => {
    return (

        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-80 overflow-y-auto">
            <div className="min-h-full flex items-start md:items-center justify-center p-4">

                <div className="bg-white rounded-2xl p-4 md:p-6 w-full max-w-xl md:max-h-screen flex flex-col items-center">
                    <img src={logo} alt="logo" className="w-50 h-50" />

                    <div className="text-center ">
                        <div className="text-2xl font-bold">MAINTENANCE WORK ORDER</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quasi deserunt id itaque magnam?</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                            <ProposalSection heading={"CONTRACTOR"} fields={["COMPANY", "ADDRESS", "CITY,STATE", "ZIP", "PHONE", "EMAIL"]} />
                            <ProposalSection heading={"CLIENT"} fields={["COMPANY", "ADDRESS", "CITY,STATE", "ZIP", "PHONE", "EMAIL"]} />
                            <ProposalSection heading={"PAYMENT"} fields={["DOWN PAY", "DUE PAYMENT", "SUB TOTAL", "TOTAL AMT"]} />
                            <ProposalSection heading={"SCHEDULE"} fields={["DATE", "WORK ORDER", "START TIME", "END TIME",]} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export { ProposalModal }