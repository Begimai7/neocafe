// import React from 'react'

import ColumnGroupingTable from "../components/Table"
import AdminHeader from "../components/admin/AdminHeader"
import { stockTableColumns } from "../utils/constants/constants"

const AdminMenu = () => {
  return (
    <div>
      <AdminHeader title='Меню' />
      <ColumnGroupingTable coloumnData={stockTableColumns} />
    </div>
  )
}

export default AdminMenu