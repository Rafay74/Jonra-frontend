import { COMPLIANCE_CHECK_COLUMNS } from '@/components/dashboard/compliance/data'

const SecondTable = () => {
  return (
    <>
      <div className="bg-white flex justify-between items-center p-6">
        {COMPLIANCE_CHECK_COLUMNS.map((column) => {
          return <span>{column?.title}</span>
        })}
      </div>
      <div className="bg-red-200 p-7 h-screen">data</div>
    </>
  )
}

export default SecondTable
