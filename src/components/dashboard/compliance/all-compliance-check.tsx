import { TableMolecule } from '@/components/molecules'
import { COMPLIANCE_CHECK_COLUMNS } from './data'

import { useState } from 'react'

const AllComplianceCheck = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <div className="h-full flex flex-col p-4 md:p-6 gap-4 md:gap-6">
      <div className="text-[#1EC5E0] text-xl lg:text-2xl font-bold">
        Compliance Check
      </div>

      <div className="flex-1 min-h-0">
        <TableMolecule
          columns={COMPLIANCE_CHECK_COLUMNS}
          dataSource={data}
          loading={loading}
          pagination={{ pageSize: 20 }}
          scroll={{ y: 'max(400px, calc(100vh - 200px))' }}
        />
      </div>
    </div>
  )
}

export default AllComplianceCheck
