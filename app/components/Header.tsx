"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
       
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link  href="/">
            NEXT
            </Link>
          </Typography>
      
        <Button color="inherit" href="/reposCSR">
          Repository CSR
        </Button>
        <Button color="inherit" href="/repos">
          Repos SSR
        </Button>
        <Button variant="contained" color="error" onClick={()=>signOut()}>
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
