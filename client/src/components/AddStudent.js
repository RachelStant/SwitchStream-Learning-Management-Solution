import { React, useState } from 'react'
import { Tooltip, Fab, Box, Modal, Typography, Button, TextField } from '@mui/material'
import { Add } from '@mui/icons-material'
import { addStudents } from '../features/studentSlice'
import { useDispatch, useSelector } from 'react-redux'



const AddStudent = ({ newStudent, setNewStudent }) => {

const [open, setOpen] = useState(false)
const [openAlert, setOpenAlert] = useState(false)


const dispatch = useDispatch()


const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return
    }

    setOpenAlert(false)
}

const inputChange = (e) => {
    const value = e.target.value

    setNewStudent({
        ...newStudent,
        [e.target.name]: value
    })

}

const handleSubmit = (e) => {
    e.preventDefault()
    setOpenAlert(false)
    setOpen(false)


    //dispatch addStudent
    dispatch(addStudents(newStudent))

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
    <div>
    <Tooltip title='Add' onClick={() => setOpen(true)}>
        <Fab color='primary' aria-label='add' size='small'>
            <Add />
        </Fab>
    </Tooltip>

    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
        <Box component='form' autoComplete='off' sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                New Student
            </Typography>
            <TextField id="outlined-basic"  name='firstName' onChange={inputChange} label="First Name" variant="outlined" sx={{width: '100%', m: '15px 0'}} />
            <TextField id="outlined-basic"  name='lastName' onChange={inputChange} label="Last Name" variant="outlined" sx={{width: '100%', m: '15px 0'}}/>
            <Button sx={{ mr: 2 }} color='primary' variant='outlined' onClick={handleSubmit}>Add</Button>
            <Button color='secondary' variant='outlined' onClick={() => setOpen(false)}>Cancel</Button>
        </Box>
    </Modal>
    </div>
  )
}

export default AddStudent