"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import s from "./styles.module.css";

import { useActionState, useEffect } from "react";
import { registerAction } from "./register-action";
import { SignupState } from "@/types/signup";

function RegisterForm() {
  const [{ error, redirectTo }, formAction, isPending] = useActionState<
    SignupState,
    FormData
  >(registerAction, {
    error: "",
    redirectTo: "",
  });

  useEffect(() => {
    if (redirectTo) {
      location.assign(redirectTo);
    }
  }, [redirectTo]);
  return (
    <form action={formAction} className={s.form}>
      <div className={s.form_row}>
        <Label htmlFor="login">Login</Label>
        <Input type="text" placeholder="Login" name="login" />
      </div>

      <div className={s.form_row}>
        <Label htmlFor="password">Password</Label>
        <Input type="password" placeholder="Password" name="password" />
      </div>

      {error && <div className={s.form_error}>{error}</div>}

      <Button disabled={isPending} className={s.btn}>
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;
