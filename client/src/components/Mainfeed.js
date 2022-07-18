import React from 'react'
import { Container, Box, Typography, Grid, Paper } from '@mui/material'
import theme from '../theme'
import ActivityList from './ActivityList'
import TestComponent from './TestComponent'
import { useSelector } from 'react-redux'
import SingleSWActivity from './SingleSWActivity'

const Mainfeed = () => {

  //Boolean for was single switch activity clicked
  const singleSW = useSelector((state) => state.activities.singleSWActivity)


  return (
    <Box flex={4} component='main' sx={{ backgroundColor: theme.palette.grey[100], height: '100vh', overflow: 'auto'}}>
        {singleSW ? (
        <Container maxWidth='lg' sx={{mt: 4, mb: 4}}>
          <Grid container>
            <Grid item xs={8} md={11}>
              <Paper>
                <SingleSWActivity />
              </Paper>
            </Grid>
          </Grid>
        </Container>
        ) : (
        
        <Container maxWidth='lg' sx={{mt: 4, mb: 4}}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240}}>
                <Typography variant='h5' color='primary'>Activity Scores</Typography>
                <TestComponent />
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              <Paper sx={{p: 2, display: 'flex', flexDirection: 'column', height: 240}}>
                <Typography variant='h5' color='primary'>All Activities</Typography>
                <Typography variant='h6' sx={{fontWeight: '200', mt: 2}} >Weekly: 2</Typography>
                <Typography variant='h6' sx={{fontWeight: '200', mt: 2}}>Monthly: 8</Typography>
                <Typography variant='h6' sx={{fontWeight: '200', mt: 2}} >Prompting: 83%</Typography>
                <Typography variant='h6' sx={{fontWeight: '200', mt: 2}}>Engagement: 95%</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex'}}>
                <ActivityList />
              </Paper>
            </Grid>
          </Grid>
        </Container>
        )
        }
    </Box>
  )
}

export default Mainfeed