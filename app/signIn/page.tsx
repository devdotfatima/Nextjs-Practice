'use client'

import { TextField, Button, Box, Typography, Divider } from "@mui/material";
import {useState} from 'react'
import GoogleSignInButton from "../components/GoogleSignInButton";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <Box
      p={4}
      border={1}
      borderColor="grey.300"
      borderRadius={8}
      width={400}
      textAlign="center"
    >
      <Typography variant="h5" component="h1" gutterBottom>
        Login
      </Typography>
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Divider />
      <Typography variant="h4" color="textSecondary" mt={2} mb={1}>
        OR
      </Typography>
      <GoogleSignInButton/>
    </Box>
  </Box>
  )
}

export default SignInPage;