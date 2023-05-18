"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

import { Button } from "@mui/material";

const GitSignInButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl: any = searchParams.get("callbackUrl");

  return (
    <Button
      variant="contained"
      onClick={() => signIn("github", { callbackUrl })}
      sx={{
        "& svg": {
          width: "1em",
          height: "1em",
          marginRight: "8px",
        },
        width: "75%",
        marginTop: 0,
        marginBottom: 2,
      }}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-icon="git"
        className="mr-8 w-5"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="#F05032"
          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 464c-119.103 0-216-96.897-216-216S136.897 40 256 40s216 96.897 216 216-96.897 216-216 216zm64-208h-64v64h-32v-64h-64v-32h64v-64h32v64h64v32z"
        ></path>
      </svg>
      Continue with GIT
    </Button>
  );
};

export default GitSignInButton;
