import { Button, TextField, Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import Center from './Center'
import useForm from '../hooks/useForm'


const getFreshModelObject = () => ({

  email: '',
  name: ''
})

export default function Login() {

  const {values, setValues, errors, setErrors, handleInputChange, resetFormControls} = useForm(getFreshModelObject)

  const login = e => {
    e.preventDefault()
    console.log(values)
  }

  const validate = () => {
    let temp ={}
    temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid."
    temp.name = values.name != "" ? "" : "This field is required."
    setErrors(temp)
    return Object.values(temp).every(x => x == "")
  }

  return (

    <Center>
      <Card sx={{width: '400px'}}>
        <CardContent sx={{textAlign: "center"}}>
          <Typography variant="h3" sx={{my:3}}>Quiz App</Typography>
          <Box sx={{
            '& .MuiTextField-root': {
              m: 1,
              width: '90%',
            }
          }}>
            <form noValidate onSubmit={login}>
              <TextField label="Email" name='email' variant='outlined' value={values.email} onChange={handleInputChange} autoComplete='off' />
              <TextField label="Name" name="name" value={values.name} onChange={handleInputChange} variant="outlined" />
              <Button type='submit' variant='contained' size='large' sx={{width:'90%'}}>Start</Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Center>

  )
}
