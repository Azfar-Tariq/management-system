import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { data } from '../data/data';
// import { useEffect } from 'react';

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

export default function StickyHeadTable( {searchTerm} ) {
  // const [tableData, setTableData] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

// const getProductList=()=>{
//   fetch('https://dummyjson.com/products')
//   .then(res => res.json()) // Parse the response as JSON
//   .then(data => {
//     console.log(data); // Process the JSON data
//     setTableData(data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });
// }

//   useEffect(() => {
//     getProductList()
//   }, []);

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
            {data /* tableData */ 
              .filter(row =>
                row.name.toLowerCase().includes(searchTerm.toLowerCase())
                // || 
                // row.email.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={item.code}>
                    {columns.map((column) => {
                      const value = item[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                        {column.id === 'name' && item.email ? (
                            <div>
                              <div>{value}</div>
                              <div>{item.email}</div>
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
        rowsPerPageOptions={[5, 10, 15, 20]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}