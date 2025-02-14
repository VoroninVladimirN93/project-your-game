import React from "react";
import { useEffect } from "react";

import { AuthForm } from "@/features";



export function SignInPage(): React.JSX.Element {

  useEffect(() => {
    document.title = 'Authorization Page'
}, [])

  return (
    <>
      <AuthForm type={"signin"} />
    </>
  );
}
