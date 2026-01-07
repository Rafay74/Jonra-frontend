import { TrendingUp } from 'lucide-react'

interface ICard {
  title: string
  value: string
  subtitle: string
  color: string
  isFirst?: boolean
}

const CardComponent = ({ title, value, subtitle, color, isFirst }: ICard) => {
  return (
    <div
      className={`rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col gap-2 sm:gap-3 md:gap-4 ${
        isFirst ? '' : `${color} bg-opacity-20`
      }`}
      style={
        isFirst
          ? {
              background: 'linear-gradient(135deg, #1EC5E0 0%, #9F8EFF 100%)',
            }
          : undefined
      }
    >
      <div
        className={`font-semibold text-[#092835] text-xs sm:text-sm md:text-base truncate`}
      >
        {title}
      </div>{' '}
      <div className="flex items-center justify-between">
        <span className={`text-xs sm:text-sm md:text-md text-[#092835]`}>
          Value
        </span>
        <div className="flex items-center gap-2">
          <span className={`text-md text-[#092835]`}>{value}</span>
          <TrendingUp className={`w-4 h-4 text-[#092835]`} />
        </div>
      </div>
      <div className={`h-px ${isFirst ? 'bg-white/30' : 'bg-gray-400'}`}></div>
      <p className={`text-md text-[#092835]`}>{subtitle}</p>
    </div>
  )
}

export default CardComponent
