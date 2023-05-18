"use client";

import {
  TextField,
  Button,
  Box,
  Typography,
  Divider,
  Avatar,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import GoogleSignInButton from "../components/GoogleSignInButton";
import GitSignInButton from "../components/GitSignInButton";

const SignInPage = () => {
  const [email, setEmail] = useState<FormDataEntryValue | null>("");
  const [password, setPassword] = useState<FormDataEntryValue | null>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    setEmail(data.get("email"));
    setPassword(data.get("password"));
  };

  return (
    <Box
      height="100vh"
      sx={{
        paddingTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper
        component="form"
        onSubmit={handleSubmit}
        elevation={3} // Add elevation for a raised effect
        sx={{
          mt: 3,
          width: "50%", // Adjust the width of the form
          padding: "1rem", // Add padding inside the form
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          sx={{ width: "75%" }}
        />
        <TextField
          sx={{ width: "75%" }}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          // fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, width: "75%" }}
        >
          Sign In
        </Button>
        <Typography
          align="center"
          variant="h6"
          color="textSecondary"
          sx={{ mt: 0, mb: 1 }}
        >
          OR
        </Typography>
        <GoogleSignInButton />
        <GitSignInButton />
      </Paper>
    </Box>
  );
};

export default SignInPage;
