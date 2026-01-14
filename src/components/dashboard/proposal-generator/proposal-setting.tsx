import { SwitchAtom } from '@/components/atoms'

interface ISettingToggle {
  label: string
}

const SettingToggle = ({ label }: ISettingToggle) => {
  return (
    <div className="flex items-center gap-2 text-white">
      <span className="text-md font-medium">{label}</span>
      <SwitchAtom />
    </div>
  )
}

export { SettingToggle }
