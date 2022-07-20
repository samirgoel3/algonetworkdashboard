import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Services from '../../network/services';
import { useEffect } from 'react';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'color', label: 'Color', minWidth: 100 },
  {
    id: 'id',
    label: 'Mongo Db ID',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'active',
    label: 'Active',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  }
];

function createData(id, name, color, icon, active) {
  return { id, name, color, icon, active };
}


export default function AlgoListTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([])


  useEffect(() => { fetchAlgoCategories() }, [])

  const fetchAlgoCategories = async () => {
    try {
      const response = await Services.AlgoService.getAlgoCategories();
      if (response) {
        // setCategories(response.data.response)
        let mRow = [] ;
        for(var i=0 ; i < response.data.response.length ; i++){
          mRow.push(createData(response.data.response[i]._id,response.data.response[i].name, response.data.response[i].color, response.data.response[i].icon, 1))
        }
        setRows(mRow)
      }
      //  setCategories(response.data.response)
    } catch (e) {
      alert(e.message)
    }
  }




  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: 'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === 'color' ?
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                              <div style={{ width: 30, height: 10, borderRadius: 10, backgroundColor: value, marginRight: 5 }}></div>
                              {value}
                            </div> :
                            value}
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
        rowsPerPageOptions={[5, 10, 25, 100]}
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

