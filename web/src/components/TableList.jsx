import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useApplicationData from '../hooks/useApplicationData';
import BasicButtons from './Buttons';

export default function TableList() {
  const { state, setState, stateCopy, setStateCopy } = useApplicationData();

  return (
    <div>
      <BasicButtons
        state={state}
        setState={setState}
        stateCopy={stateCopy}
        setStateCopy={setStateCopy}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: 'lightblue' }}>
              <TableCell>Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Language</TableCell>
              <TableCell align="right">Forks Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stateCopy.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.language}</TableCell>
                <TableCell align="right">{row.forks_count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
