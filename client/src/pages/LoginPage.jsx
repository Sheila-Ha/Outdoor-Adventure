import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../components/Button.jsx";
import { Input } from "../components/Input.jsx";
import { Label } from "../components/Label.jsx";
import { ChatGPTButton } from "../components/APIs/ChatGPT.jsx";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutation/index.js";
import { useLoggedInUser } from "../context/UserContext.jsx";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [user, setUser] = useState({ email: "", password: "" });
  const { setLoggedInUser } = useLoggedInUser();
  const [login] = useMutation(LOGIN);
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  }
  async function handleClick() {
    try {
      const { data } = await login({
        variables: {
          ...user,
        },
      });
      localStorage.setItem("token", data.login);
      const decode = jwtDecode(data.login);
      // console.log(decode, "decode");
      setLoggedInUser(decode.userInfo);
      navigate("/");
      return data;
    } catch (error) {
      console.log(error);
    }
    setUser({ email: "", password: "" });
  }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="p-4 lg:block">
        <img
          src="/images/imglanding.jpeg"
          alt="Image"
          //   width="1920"
          //   height="1080"
          className="md:h-full rounded-md md:w-full max-h-[250px] min-w-[100%] object-fill lg:max-h-full dark:brightness-[0.2] dark:grayscale"
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
                name="email"
                value={user.email}
                required
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                name="password"
                value={user.password}
                required
                onChange={handleChange}
                onKeyPress={(event) => {
                  // console.log(event.key);
                  if (event.key === "Enter") {
                    handleClick();
                  }
                }}
              />
            </div>
            <Button type="submit" className="w-full" onClick={handleClick}>
              Login
            </Button>
          </div>
          <div className="mt-4 text-sm text-center">
            Don&apos;t have an account?{" "}
            <Link className="underline" to={"/sign-up"}>
              Sign up
            </Link>
            <ChatGPTButton />
          </div>
        </div>
      </div>
    </div>
  );
}
