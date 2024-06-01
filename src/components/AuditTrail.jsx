import { React, useState } from 'react'
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@mui/material';

const AuditTrail = () => {
    const [userID, setUserID] = useState(0);
    const [page, setPageChange] = useState(0);
    const [rowperpage, setRowPerPage] = useState(5);

    const handleID = () => {
        setUserID(userID + 1);
    }
    const handlePageChange = (event, newPage) => {
        setPageChange(newPage);
    }
    const handleRowsPerPage = (event) => {
        setRowPerPage(+event.target.value);
        pageChange(0);
    }

    const columns = [
        {id: 'id', name: 'ID'},
        {id: 'datetime', name: 'Date Time'},
        {id: 'email', name: 'Email'},
        {id: 'action', name: 'Action'},
        {id: 'details', name: 'Details'}
    ]

    const rows = [
        {id: 1, datetime: '2022-14-11', email: 'test_email@gmail.com', action: 'Logged Out', details: 'User logged out of account'},
        {id: 2, datetime: '2022-14-11', email: 'test_email@gmail.com', action: 'Logged Out', details: 'User logged out of account'},
        {id: 3, datetime: '2022-14-11', email: 'test_email@gmail.com', action: 'Logged Out', details: 'User logged out of account'},
        {id: 4, datetime: '2022-14-11', email: 'test_email@gmail.com', action: 'Logged Out', details: 'User logged out of account'},
        {id: 5, datetime: '2022-14-11', email: 'test_email@gmail.com', action: 'Logged Out', details: 'User logged out of account'},
        {id: 6, datetime: '2022-14-11', email: 'test_email@gmail.com', action: 'Logged Out', details: 'User logged out of account'},
        {id: 7, datetime: '2022-14-11', email: 'test_email@gmail.com', action: 'Logged Out', details: 'User logged out of account'},
        {id: 8, datetime: '2022-14-11', email: 'test_email@gmail.com', action: 'Logged Out', details: 'User logged out of account'},
        {id: 9, datetime: '2022-14-11', email: 'test_email@gmail.com', action: 'Logged Out', details: 'User logged out of account'},
        {id: 10, datetime: '2022-14-11', email: 'test_email@gmail.com', action: 'Logged Out', details: 'User logged out of account'},
        {id: 11, datetime: '2022-14-11', email: 'test_email@gmail.com', action: 'Logged Out', details: 'User logged out of account'},
        
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
                                    <TableCell>{row.datetime}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.action}</TableCell>
                                    <TableCell>{row.details}</TableCell>
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

export default AuditTrail
