import { ButtonAtom } from '@/components/atoms'
import { useForm } from 'react-hook-form'
import { BillingSection } from './billing-section'
import { PROPOSAL_SETTINGS } from './data'
import { SettingToggle } from './proposal-setting'
import { ProposalCard } from './proposal-card'

interface IProposalForm {
  name: string
  lastName: string
  state: string
  postalCode: string
  city: string
  phoneNo: string
  gst: string
  email: string
}

const ProposalGenerator = () => {
  const {
    register,
    formState: { errors },
  } = useForm<IProposalForm>()
  return (
    <div className="h-full flex flex-col p-4 md:p-6 gap-4 md:gap-6">
      <div className="text-[#1EC5E0] text-xl lg:text-2xl font-bold">Proposal Generator</div>
      <div className="bg-[#C9C9C933] h-screen rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col gap-4 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <ProposalCard title="Add a Business Logo" />
          <ProposalCard title="Invoice No:" />
          <ProposalCard title="Select Template" />
          <ProposalCard title="Add Due Date" />
        </div>
        <div className="flex-1 bg-[#bcb7b733] rounded-3xl p-4 md:p-6 space-y-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-lg md:text-xl font-bold text-[#1EC5E0]">Information</span>

            <ButtonAtom
              htmlType='submit'
              className="h-11 px-4 md:px-6 rounded-xl text-white font-medium w-full sm:w-auto"
              style={{
                background: 'linear-gradient(90deg, #1EC5E0 0%, #9F8EFF 100%)',
              }}
            >
              Submit Now
            </ButtonAtom>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <BillingSection
              title="Company Details (Billed by)"
              register={register}
              errors={errors}
            />
            <BillingSection
              title="Company Details (Billed to)"
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <div className="flex-1 rounded-3xl bg-[#bcb7b733] p-4 md:p-6 space-y-4">
          <span className="text-lg md:text-xl font-bold text-[#1EC5E0]">Settings</span>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              {PROPOSAL_SETTINGS.map((item) => (
                <SettingToggle key={item.key} label={item.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProposalGenerator }
