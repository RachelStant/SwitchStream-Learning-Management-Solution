import {React, useEffect, useState } from 'react'
import { Container, Box, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Switch, Fab, Divider, IconButton, Alert, ListItemSecondaryAction } from '@mui/material'
import { Person, ModeNight, Add, Delete, Edit} from '@mui/icons-material'
import AddStudent from './AddStudent'
import { getStudents, deleteStudent } from '../features/studentSlice'
import { useDispatch, useSelector } from 'react-redux'
import { borderRight } from '@mui/system'
import EditStudentModal from './EditStudentModal'

import { setSingleSWActivity } from '../features/activitySlice'



const Leftbar = () => {

const { getStudLoading, getStudError, students } = useSelector((state) => state.students)
const dispatch = useDispatch()
const [newStudent, setNewStudent] = useState({firstName: '', lastName: ''})
const [selectedforUpdate, setSelectedForUpdate] = useState('')
const [openEditModal, setOpenEditModal] = useState(false)


//Activities
const [singleSwitchActivity, setSingleSwitchActivity] = useState(false)

// useEffect(() => {
//   const updatedStudent = selectedforUpdate !== 'undefined' && students.length ? students[selectedforUpdate] : null
//   if (updatedStudent) {
//     setNewStudent({firstName: updatedStudent.firstName, lastName: updatedStudent.lastName})
//   }

// }, [selectedforUpdate])

const handleEditModal = (editStud) => {
  setNewStudent(editStud)
  setOpenEditModal(true)
}

const handleDeleteStudent = (id) => {
  dispatch(deleteStudent(id))
}

const handleCreateSingleSWActivity = (id) => {
  dispatch(setSingleSWActivity(id))

}


useEffect(() => {
  dispatch(getStudents())
}, [])

  return (
    <>
    <Box flex={1.14}>
    <Box position='fixed' sx={{width: '22%'}}>
    <List sx={{ width: '100%'}}>
        <ListItem>
            <ListItemIcon>
            <AddStudent newStudent={newStudent} setNewStudent={setNewStudent} />
            </ListItemIcon>
            <ListItemText primary='Add Student'/>
        </ListItem>
        <Divider />
        {getStudLoading && <div>Loading...</div>}
        {!getStudLoading && getStudError ? <Alert severity='error'>{getStudError}</Alert>: null}
        {!getStudLoading && students.length ? students.map((student) => {
            return(
            <>
            <ListItem key={student._id} sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}
            secondaryAction={
            <>
            {/* <IconButton onClick={() => {setOpenEditModal(true); setSelectedForUpdate(idx)}}> <Edit /></IconButton>  */}
            <IconButton onClick={() => handleEditModal(student)}> <Edit /></IconButton>
            <IconButton onClick={() => handleDeleteStudent(student._id)}><Delete /></IconButton>
            </>}
            >
              <ListItemButton>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary={`${student.firstName} ${student.lastName}`} />
              </ListItemButton>
            <Box sx={{ display: 'flex', gap: '10px', pt: 1, alignSelf: 'center', pb: '10px'}}>
                  <Fab sx={{fontSize:'0.7rem', textTransform: 'none'}} variant='extended' size='small' onClick={() => handleCreateSingleSWActivity(student._id)}>Single SW</Fab>
                  <Fab sx={{fontSize:'0.7rem', textTransform: 'none'}} variant='extended' size='small'>Multi SW</Fab>
            </Box>
            
          </ListItem> 
          <Divider component="li" />
          </>
            )
        }) : null}
    </List>
    </Box>
    </Box>
    <EditStudentModal newStudent={newStudent} setNewStudent={setNewStudent} openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} />
    </>
  )
}

export default Leftbar