import { ButtonAtom } from "@/components/atoms"
import { ProposalModal } from "@/components/molecules/modal"
import { ALL_PROPOSALS, } from "@/constants/data"
import { useState } from "react"

const AllProposalGenerators = () => {
    const [showDetailModal, setShowDetailModal] = useState(false)

    const handleViewProposalButton = () => {
        setShowDetailModal(true)
    }

    // const CloseModal = () => {
    //     setShowDetailModal(false)
    // }

    return (
        <>
            <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                <div className="text-[#1EC5E0] text-xl lg:text-2xl font-bold">
                    All Proposals
                </div>

                <div className="bg-[#C9C9C933] rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col gap-3 md:gap-4 overflow-y-auto">
                    {ALL_PROPOSALS.map((proposals, index) => {
                        return (
                            <div key={index} className="rounded-3xl bg-gray-600 border-2 border-white p-3 md:p-4">
                                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 py-1 px-2 md:px-4 text-white">
                                    <div className="flex flex-col gap-2 justify-start items-start flex-1">
                                        <span className="text-base md:text-lg lg:text-xl xl:text-2xl mb-0">
                                            {proposals.name}
                                        </span>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 flex-wrap">
                                            <div className="flex items-center gap-2">

                                                <span className="text-sm md:text-base">{proposals.description}</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="w-full lg:w-auto lg:shrink-0">
                                        <ButtonAtom
                                            onClick={handleViewProposalButton}
                                            size="large"
                                            bgColor="#007AFF"
                                            block={false}
                                            className="w-full lg:w-auto"
                                        >
                                            View Proposal
                                        </ButtonAtom>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {
                showDetailModal && <ProposalModal />
            }
        </>
    )
}

export { AllProposalGenerators }