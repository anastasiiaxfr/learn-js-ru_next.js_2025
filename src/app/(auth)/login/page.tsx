import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import s from "./styles.module.css";

import LoginForm from "./login-form";
import RegisterForm from "./register-form";

const Login = () => {
  return (
    <div className={s.tabs}>
      <Tabs defaultValue="signin">
        <TabsList className="mx-auto">
          <TabsTrigger value="signin">SignIn</TabsTrigger>
          <TabsTrigger value="signup">SignUp</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <Card>
            <CardHeader>
              <CardTitle>SignIn</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <LoginForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>SignUp</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <RegisterForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
