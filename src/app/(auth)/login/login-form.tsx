"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import s from "./styles.module.css";

import { useActionState, useEffect } from "react";
import { loginAction } from "./login-action";
import { LoginState } from "@/types/login";

function LoginForm() {
  const [{ error, redirectTo }, formAction, isPending] = useActionState<
    LoginState,
    FormData
  >(loginAction, {
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
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
