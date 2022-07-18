import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Link } from '@mui/material'

const ActivityList = () => {

const rows = [
    {id: 1, date: '16 Mar 2019', name: 'Lights', time: '0:15', score: '100%', format: 'Single-Switch'},
    {id: 2, date: '16 Mar 2019', name: 'Sounds', time: '0:15', score: '90%', format: 'Single-Switch'},
    {id: 3, date: '16 Mar 2019', name: 'Music', time: '0:19', score: '90%', format: 'Single-Switch'},
    {id: 4, date: '16 Mar 2019', name: 'Cars', time: '0:13', score: '50%', format: 'Single-Switch'},
]

  return (
      <Table>
          <TableHead>
              <TableRow>
                  <TableCell>Activity Date</TableCell>
                  <TableCell>Activity Name</TableCell>
                  <TableCell>Activity Time</TableCell>
                  <TableCell>Activity Score</TableCell>
                  <TableCell>Activity Format</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
              {rows.map((row) => (
                  <TableRow key={row.id}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.time}</TableCell>
                      <TableCell>{row.score}</TableCell>
                      <TableCell>{row.format}</TableCell>
                  </TableRow>
              ))}
          </TableBody>
      </Table>
    
  )
}

export default ActivityList