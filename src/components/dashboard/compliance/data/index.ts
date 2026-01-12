import type { TableColumnsType } from 'antd'

interface IComplianceCheck {
  Level: string
  Action: number
  Result: string
  Roles: string
  Status: string
  ExpiresAt: string
}

export const COMPLIANCE_CHECK_COLUMNS: TableColumnsType<IComplianceCheck> = [
  {
    title: 'Level',
    dataIndex: 'Level',
  },
  {
    title: 'Action',
    dataIndex: 'Action',
  },
  {
    title: 'Result',
    dataIndex: 'Result',
  },
  {
    title: 'Roles',
    dataIndex: 'Roles',
  },
  {
    title: 'Status',
    dataIndex: 'Status',
  },
  {
    title: 'ExpiresAt',
    dataIndex: 'ExpiresAt',
  },
]
