import { Table } from 'antd'
import type { TableProps, TableColumnsType } from 'antd'

interface TableMoleculeProps<T> extends Omit<TableProps<T>, 'className'> {
  columns: TableColumnsType<T>
  dataSource: T[]
  loading?: boolean
}

function TableMolecule<T extends object>({
  columns,
  dataSource,
  loading = false,
  pagination = { pageSize: 50 },

  ...restProps
}: TableMoleculeProps<T>) {
  return (
    <Table<T>
      className="rounded-full"
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      pagination={pagination}
      {...restProps}
    />
  )
}

export { TableMolecule }
