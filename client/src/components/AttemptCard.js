import { React, useState } from 'react'
import { Container, Box, Typography, Grid, Paper, Button, TextField, FormControl, Select, MenuItem, InputLabel } from '@mui/material'


const AttemptCard = (props) => {

 const [selectedAnswer, setSelectedAnswer] = useState()
 const [prompting, setPrompting] = useState('')
 const [engagement, setEngagement] = useState('')

 const { attempt, setSingleSwitchActivity, singleSwitchActivity } = props

 const handlePromptingChange = (event, attemptID) => {
    setPrompting(event.target.value);
    console.log(attemptID)
  };

  const handleEngagementChange = (event) => {
    setEngagement(event.target.value);
  };


  const setSwitch1Answer = (attemptID, ans) => {
        
        let updatedArray = singleSwitchActivity.activityAttempts.map((activ) => {
            return activ.attemptId === attemptID ? {...activ, selectedSW1Answer: ans} : activ
        })

        setSingleSwitchActivity({
            ...singleSwitchActivity,
            activityAttempts: updatedArray
            
        })
        console.log(attemptID, ans)

        console.log(singleSwitchActivity)
  }

  

 //styling

 const sxPaper = {
     margin: '15px 0',
     padding: '22px 15px',
     display: 'flex',
     flexDirection: 'column',
     gap: '15px'

 }

 const sxAnswerButtons = {
    display: 'flex',
    justifyContent: 'center', 
    flexDirection: {xs: 'column', sm: 'column', md: 'row'},
    gap: {xs: '15px', sm: '15px', md: 'none'}
 }

 const sxDropdowns = {
     display: 'flex',
     flexDirection: {xs: 'column', sm: 'column', md: 'row'},
     gap: 3,
     marginTop: 5

 }

 //THE IDX CONDITIONAL WILL NOT WORK TO COLOR THE SELECTED BUTTON

  return (
    <Paper elevation={4} sx={{...sxPaper}}>
        <Typography sx={{alignSelf: 'center'}}>Attempt 1</Typography>
        <Box sx={{ ...sxAnswerButtons }}>
       {attempt.switch1Answers.map((ans, idx) => {
           return <Button sx={{m: '0 10px'}} variant={idx === selectedAnswer ? "contained" : "outlined"} onClick={() => {setSelectedAnswer(idx); setSwitch1Answer(attempt.attemptId, ans)}}>{ans}</Button>
        })}
       </Box>
       <Box sx={{...sxDropdowns}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Prompting</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={prompting}
                label="Age"
                onChange={(event) => handlePromptingChange(event, attempt.attemptId)}
                >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={'No Prompt'}>No Prompt</MenuItem>
                <MenuItem value={'Visual Prompt'}>Visual Prompt</MenuItem>
                <MenuItem value={'Verbal Prompt'}>Verbal Prompt</MenuItem>
                <MenuItem value={'Physical Prompt'}>Physical Prompt</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Engagement</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={engagement}
                label="Age"
                onChange={handleEngagementChange}
                >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={'Engaged'}>Engaged</MenuItem>
                <MenuItem value={'Somewhat'}>Somewhat Engaged</MenuItem>
                <MenuItem value={'Not Engaged'}>Not Engaged</MenuItem>
                
                </Select>
            </FormControl>
       </Box>
    </Paper>
  )
}

export default AttemptCard