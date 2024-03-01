// import React from 'react'
// import ColumnGroupingTable from "../components/Table"
import TableTabs from "../components/Tabs"
import AdminHeader from "../components/admin/AdminHeader"
// import { stockTableColumns } from "../utils/constants/constants"

const Stock = () => {
  return (
    <div>
      <AdminHeader title='Склад' />
      <TableTabs />
      {/* <ColumnGroupingTable coloumnData={stockTableColumns} /> */}
    </div>
  
  )
}

export default Stock