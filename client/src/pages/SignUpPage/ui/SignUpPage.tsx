import { JSX, useEffect } from "react";
import { AuthForm } from "@/features";

export function SignUpPage(): JSX.Element {

    useEffect(() => {
      document.title = 'Registration Page'
  }, [])

  return (
    <>
      <AuthForm type={"signup"}/>
    </>
  );
}
