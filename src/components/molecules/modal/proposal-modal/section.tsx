interface IProposalSection {
    heading: string,
    fields: string[]
}

const ProposalSection = ({ heading, fields }: IProposalSection) => {
    return (
        <div className="flex flex-col items-start gap-1">
            <div className="bg-[#CFF8FF] text-sm text-[#1EC5E0] font-semibold rounded-2xl px-3 py-1 min-w-50 text-start">
                {heading}
            </div>

            {fields.map((field) => (
                <div
                    key={field}
                    className="px-2 flex items-center justify-between w-full text-sm"
                >
                    <span>{field}:</span>
                    <span className="flex-1 border-b border-gray-400 ml-3" />
                </div>
            ))}
        </div>

    )
}

export { ProposalSection }