import { Link } from "react-router-dom";

import { Button } from "../components/Button.jsx";
import { Input } from "../components/Input.jsx";
import { Label } from "../components/Label.jsx";

export default function LoginPage() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="bg-muted  lg:block">
        <img
          src="/images/imglanding.jpeg"
          alt="Image"
          //   width="1920"
          //   height="1080"
          className="md:h-full md:w-full max-h-[250px] min-w-[100%] object-fill lg:max-h-full dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link className="underline" to={"/sign-up"}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
