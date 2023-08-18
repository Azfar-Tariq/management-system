import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'position', label: '', minWidth: 100 },
  {
    id: 'createDate',
    label: 'Create Date',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'role',
    label: 'Role',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, email, position, createDate, role, action) {
  return { name, email, position, createDate, role, action };
}

const rows = [
  createData('David Wagner', 'david_wagner@example.com', 'Super Admin', '24 Oct, 2015', 'Lorem Ipsum', (
    <React.Fragment>
        <IconButton>   
            <EditIcon/>
        </IconButton> 
        <IconButton>
            <DeleteIcon />
        </IconButton>
    </React.Fragment>
  )),
  createData('Ina Hogan', 'windler.warren@runte.net', 'HR Admin', '24 Oct, 2015', 'Lorem Ipsum', (
    <React.Fragment>
        <IconButton>   
            <EditIcon/>
        </IconButton> 
        <IconButton>
            <DeleteIcon />
        </IconButton>
    </React.Fragment>
  )),
  createData('David Wagner', 'david_wagner@example.com', 'Employee', '24 Oct, 2015', 'Lorem Ipsum', (
    <React.Fragment>
        <IconButton>   
            <EditIcon/>
        </IconButton> 
        <IconButton>
            <DeleteIcon />
        </IconButton>
    </React.Fragment>
  )),
  createData('David Wagner', 'david_wagner@example.com', 'Employee', '24 Oct, 2015', 'Lorem Ipsum', (
    <React.Fragment>
        <IconButton>   
            <EditIcon/>
        </IconButton> 
        <IconButton>
            <DeleteIcon />
        </IconButton>
    </React.Fragment>
  )),
  createData('David Wagner', 'david_wagner@example.com', 'Admin', '24 Oct, 2015', 'Lorem Ipsum', (
    <React.Fragment>
        <IconButton>   
            <EditIcon/>
        </IconButton> 
        <IconButton>
            <DeleteIcon />
        </IconButton>
    </React.Fragment>
  )),
  createData('David Wagner', 'david_wagner@example.com', 'Super Admin', '24 Oct, 2015', 'Lorem Ipsum', (
    <React.Fragment>
        <IconButton>   
            <EditIcon/>
        </IconButton> 
        <IconButton>
            <DeleteIcon />
        </IconButton>
    </React.Fragment>
  )),
  createData('David Wagner', 'david_wagner@example.com', 'HR Admin', '24 Oct, 2015', 'Lorem Ipsum', (
    <React.Fragment>
        <IconButton>   
            <EditIcon/>
        </IconButton> 
        <IconButton>
            <DeleteIcon />
        </IconButton>
    </React.Fragment>
  )),
  createData('David Wagner', 'david_wagner@example.com', 'Employee', '24 Oct, 2015', 'Lorem Ipsum', (
    <React.Fragment>
        <IconButton>   
            <EditIcon/>
        </IconButton> 
        <IconButton>
            <DeleteIcon />
        </IconButton>
    </React.Fragment>
  )),
  createData('David Wagner', 'david_wagner@example.com', 'Admin', '24 Oct, 2015', 'Lorem Ipsum', (
    <React.Fragment>
        <IconButton>   
            <EditIcon/>
        </IconButton> 
        <IconButton>
            <DeleteIcon />
        </IconButton>
    </React.Fragment>
  )),
  createData('David Wagner', 'david_wagner@example.com', 'Admin', '24 Oct, 2015', 'Lorem Ipsum', (
    <React.Fragment>
        <IconButton>   
            <EditIcon/>
        </IconButton> 
        <IconButton>
            <DeleteIcon />
        </IconButton>
    </React.Fragment>
  )),
  createData('David Wagner', 'david_wagner@example.com', 'Employee', '24 Oct, 2015', 'Lorem Ipsum', (
    <React.Fragment>
        <IconButton>   
            <EditIcon/>
        </IconButton> 
        <IconButton>
            <DeleteIcon />
        </IconButton>
    </React.Fragment>
  )),
  createData('David Wagner', 'david_wagner@example.com', 'Super Admin', '24 Oct, 2015', 'Lorem Ipsum', (
    <React.Fragment>
        <IconButton>   
            <EditIcon/>
        </IconButton> 
        <IconButton>
            <DeleteIcon />
        </IconButton>
    </React.Fragment>
  )),
  createData('David Wagner', 'david_wagner@example.com', 'Employee', '24 Oct, 2015', 'Lorem Ipsum', (
    <React.Fragment>
        <IconButton>   
            <EditIcon/>
        </IconButton> 
        <IconButton>
            <DeleteIcon />
        </IconButton>
    </React.Fragment>
  )),
  createData('David Wagner', 'david_wagner@example.com', 'Admin', '24 Oct, 2015', 'Lorem Ipsum', (
    <React.Fragment>
        <IconButton>   
            <EditIcon/>
        </IconButton> 
        <IconButton>
            <DeleteIcon />
        </IconButton>
    </React.Fragment>
  )),
  createData('David Wagner', 'david_wagner@example.com', 'Super Admin', '24 Oct, 2015', 'Lorem Ipsum', (
    <React.Fragment>
        <IconButton>   
            <EditIcon/>
        </IconButton> 
        <IconButton>
            <DeleteIcon />
        </IconButton>
    </React.Fragment>
  )),
];

export default function StickyHeadTable( {searchTerm} ) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 360 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .filter(row =>
                row.name.toLowerCase().includes(searchTerm.toLowerCase())
                // || 
                // row.email.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                        {column.id === 'name' && row.email ? (
                            <div>
                              <div>{value}</div>
                              <div>{row.email}</div>
                            </div>
                          ) : (
                            column.format && typeof value === 'number'
                              ? column.format(value)
                              : value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 15, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}