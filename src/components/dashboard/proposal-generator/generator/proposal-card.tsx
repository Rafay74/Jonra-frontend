interface IProposalCard {
  title: string
}
const ProposalCard = ({ title }: IProposalCard) => {
  return (
    <div className="rounded-3xl p-4 bg-[#bcb7b733]">
      <div className=" w-full h-full  flex flex-col gap-4">
        <span className="text-[#1EC5E0] text-lg  font-bold">{title}</span>
        <div className="bg-[#C9C9C933] border border-gray-400 rounded-2xl h-full text-lg text-white p-4 flex flex-col items-center justify-center ">
          <span>2025/00146</span>
          <span>2744554572</span>
        </div>
      </div>
    </div>
  )
}

export { ProposalCard }
