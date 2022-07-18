import { React, useState } from 'react'
import { Tooltip, Fab, Box, Modal, Typography, Button, TextField } from '@mui/material'
import { updateStudent } from '../features/studentSlice'
import { useDispatch } from 'react-redux'

const EditStudentModal = ({ openEditModal, setOpenEditModal, newStudent, setNewStudent }) => {

    const [openAlert, setOpenAlert] = useState(false)
    const dispatch = useDispatch()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
    
        setOpenAlert(false)
    }

    const handleChange = (e) => {
        const val = e.target.value

        setNewStudent({
            ...newStudent,
            [e.target.name]: val
        })
    }

    const handleEdit = (e) => {
        e.preventDefault()
        setOpenAlert(false)
        setOpenEditModal(false)
        console.log(newStudent)
    
        //dispatch addStudent
        dispatch(updateStudent(newStudent))
    
        //Reset state
        setNewStudent({ firstName: '', lastName: ''})
    }


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: '10px',
        boxShadow: 24,
        p: 4,
        
      };

  return (
    <Modal
    open={openEditModal}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
        <Box component='form' autoComplete='off' sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Edit Student
            </Typography>
            <TextField id="outlined-basic" value={newStudent.firstName} onChange={handleChange}  name='firstName'  label="First Name" variant="outlined" sx={{width: '100%', m: '15px 0'}} />
            <TextField id="outlined-basic" value={newStudent.lastName} onChange={handleChange}  name='lastName'  label="Last Name" variant="outlined" sx={{width: '100%', m: '15px 0'}}/>
            <Button sx={{ mr: 2 }} color='primary' variant='outlined' onClick={handleEdit}>Update Student</Button>
            <Button color='secondary' variant='outlined' onClick={() => setOpenEditModal(false)}>Cancel</Button>
        </Box>
    </Modal>
  )
}

export default EditStudentModal