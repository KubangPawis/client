import { React, useState } from 'react'
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@mui/material';

const LoggingTable = () => {
    const columns = [
        {id: 'directoryButton', name: 'Directory'},
    ]

    const rowsLevel1 = [
       {id: <button>Main Directory 1</button>}
    ]
    
    const rowsLevel2 = [
        {id: <button>Sub Directory 1</button>},
        {id: <button>Sub Directory 2</button>},
        {id: <button>Sub Directory 3</button>},
     ]

  return (
    <div className='align-center'>
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
                            {rowsLevel1.map((row) => (
                                <TableRow key={row.directoryButton}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell>{row.directoryButton}</TableCell>
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

export default LoggingTable
