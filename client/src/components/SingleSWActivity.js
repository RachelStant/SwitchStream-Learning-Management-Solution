import { React, useState, useEffect } from 'react'
import { Container, Box, Typography, Grid, Paper, Button, TextField, Stack, IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material' 
import { Close } from '@mui/icons-material';


//Redux
import { setSingleSWActivity } from '../features/activitySlice'
import { saveNewActivity } from '../features/activitySlice'
import AttemptCard from './AttemptCard'


const SingleSWActivity = () => {

    //Redux
    const { studentID } = useSelector((state) => state.activities)
    const dispatch = useDispatch()

    //Activity State
    const [singleSwitchActivity, setSingleSwitchActivity] = useState(
      {activityName: '',
       activityObserver: '',
       switchPosition: '',
       activityAttempts: [],
       activityScore: null,
       activityPrompting: null,
       actiityEngagement: null,
       activityComment: '',
       studentID: ''
      })
    const [userAttempts, setUserAttempts] = useState(0)
    const [activityComment, setActivityComment] = useState('')



  //Set The studentID state to the studentID set in Redux store, run once on render

      useEffect(() => {
        setSingleSwitchActivity({
          ...singleSwitchActivity,
          studentID: studentID
        })

      }, [])




    const handleAddAttempt = () => {
    setUserAttempts(userAttempts + 1)

    let attemptArray = []
    for (let i = 0; i <= userAttempts; i++) {
      let attemptId = Math.floor(Math.random() * 10000) + 1
      attemptArray.push({attemptId, switch1Answers: ['Correct', 'InCorrect', 'No Attempt'], selectedSW1Answer: ''})
    }

    setSingleSwitchActivity({...singleSwitchActivity, activityAttempts: attemptArray})

    console.log(singleSwitchActivity)
  } 


  const handleInputChange = (e) => {
    let value = e.target.value

    setSingleSwitchActivity({
      ...singleSwitchActivity,
      [e.target.name]: value
    })
  }

  const handleCommentChange = (event) => {
    setActivityComment(event.target.value);
  };


  const handleSaveActivity = (e) => {

    e.preventDefault()
    console.log(singleSwitchActivity)
   

    //Dispatch Save New Activity Action in activitySlice (studentID needed as part of object to destructure in the async thunk)
    dispatch(saveNewActivity(singleSwitchActivity))
  }



    //Styling
    const ContentStyle = styled('div')(({ theme }) => ({
      margin: 'auto',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: theme.spacing(8, 2)
      

    }))

    const sxFormSection = {
      display: 'flex',
      flexDirection: 'column'
    }

    const sxCloseButton = {
      position: 'absolute',
      right: '10px',
      top: '5px'
    }


  return (
      <Container maxWidth='lg' sx={{ position: 'relative'}}>
        <IconButton sx={{ ...sxCloseButton}} onClick={() => dispatch(setSingleSWActivity(studentID))}>
          <Close />
        </IconButton>
      <ContentStyle>
      <Typography variant='h4' gutterBottom sx={{ textAlign: 'center', color: 'brandColor.main'}}>New switch activity</Typography>
      <Box component="form" noValidate autoComplete='off' sx={{'& .MuiTextField-root': { m: 1.2, width: '45ch' }, ...sxFormSection}}>
        <TextField id="outlined-basic" label="Activity name" variant="outlined" name='activityName'  onChange={handleInputChange} />
        <TextField id="outlined-basic" label="Activity observer" variant="outlined" name='activityObserver'  onChange={handleInputChange}  />
        <TextField id="outlined-basic" label="Switch Position" variant="outlined" name='switchPosition' onChange={handleInputChange} />
        
      </Box>
      
      <Button variant='contained' sx={{ my: 2, py: 1, alignSelf:'center'}} onClick={handleAddAttempt}>Add Attempts</Button>
      {/* <h2>{userAttempts}</h2> */}
      {singleSwitchActivity.activityAttempts ? (
        singleSwitchActivity.activityAttempts.map((attempt, idx) => (
          //Add SEPARATE ATTEMPT CARD
         <AttemptCard key={idx} attempt={attempt} setSingleSwitchActivity={setSingleSwitchActivity} singleSwitchActivity={singleSwitchActivity} /> ))
        
      ):(<h2>Please add attempts</h2>)}

      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '99%' }, my: 3,
      }}
      noValidate
      autoComplete="off"
    >
       <TextField
          id="outlined-multiline-static"
          label="Activity Comments"
          multiline
          rows={4}
          defaultValue=""
          onChange={handleCommentChange}
          
        />

      </Box>

    <Button variant="contained" onClick={handleSaveActivity}>Save Activity</Button>
    <Button variant="outlined">End Activity</Button>
    </ContentStyle>
    </Container>
  )
}

export default SingleSWActivity