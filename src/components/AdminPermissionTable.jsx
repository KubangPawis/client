import { React, useState } from 'react'
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@mui/material';
import PermissionBoxes from './PermissionBoxes'

const AdminPermissionTable = () => {
    const [page, setPageChange] = useState(0);
    const [rowperpage, setRowPerPage] = useState(5);

    const handlePageChange = (event, newPage) => {
        setPageChange(newPage);
    }
    const handleRowsPerPage = (event) => {
        setRowPerPage(+event.target.value);
        pageChange(0);
    }

    const columns = [
        {id: 'id', name: 'ID'},
        {id: 'username', name: 'Username'},
        {id: 'email', name: 'Email'},
        {id: 'permissions', name: 'Permissions'}
    ]

    const rows = [
        {id: 1, username: 'LanceVen', email: 'test_email@gmail.com', 
        permissions: <PermissionBoxes />},
        {id: 2, username: 'Marcus', email: 'test_email@gmail.com', 
        permissions: <PermissionBoxes />},
        {id: 3, username: 'Eli', email: 'test_email@gmail.com', 
        permissions: <PermissionBoxes />},
        {id: 4, username: 'Eli', email: 'test_email@gmail.com', 
        permissions: <PermissionBoxes />},
        {id: 5, username: 'Eli', email: 'test_email@gmail.com', 
        permissions: <PermissionBoxes />},
        {id: 6, username: 'Eli', email: 'test_email@gmail.com', 
        permissions: <PermissionBoxes />},
        {id: 7, username: 'Eli', email: 'test_email@gmail.com', 
        permissions: <PermissionBoxes />},
        {id: 8, username: 'Eli', email: 'test_email@gmail.com', 
        permissions: <PermissionBoxes />},
        {id: 9, username: 'Eli', email: 'test_email@gmail.com', 
        permissions: <PermissionBoxes />},
        {id: 10, username: 'Eli', email: 'test_email@gmail.com', 
        permissions: <PermissionBoxes />},
        {id: 11, username: 'Eli', email: 'test_email@gmail.com', 
        permissions: <PermissionBoxes />}
    ]

  return (
    <div className='w-full flex justify-center'>
        <Paper sx={{width: '90%'}}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id}>{column.name}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {rows && rows
                            .slice(page*rowperpage, page*rowperpage+rowperpage)
                            .map((row) => (
                                <TableRow key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.username}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.permissions}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            rowsPerPage={rowperpage}
            page={page}
            count={rows.length}
            component="div"
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPage}
            >
            </TablePagination>
        </Paper>
    </div>
  )
}

export default AdminPermissionTable
