import { Link } from "react-router-dom";
import { Button } from "../components/Button.jsx";
import { Input } from "../components/Input.jsx";
import { Label } from "../components/Label.jsx";
import { useMutation } from "@apollo/client";
import { SIGNUP } from "../graphql/mutation/index.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [signUp] = useMutation(SIGNUP);

  async function handleChange(event) {
    const { name, value } = event.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  }
  async function handleClick() {
    try {
      const { data } = await signUp({
        variables: {
          signUpDetails: {
            ...newUser,
          },
        },
      });
      localStorage.setItem("token", data.signUp);
      navigate("/");
      setNewUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="p-4 lg:block">
        <img
          src="/images/signup.jpeg"
          alt="Image"
          //   width="1920"
          //   height="1080"
          className="md:h-full md:w-full max-h-[250px] rounded-md min-w-[100%] object-fill lg:max-h-full dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Enter your information to create an account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input
                id="first-name"
                placeholder="Max"
                required
                name="firstName"
                value={newUser.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input
                id="last-name"
                placeholder="Robinson"
                required
                name="lastName"
                value={newUser.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              name="email"
              value={newUser.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              value={newUser.password}
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
            Create an account
          </Button>
          <div className="grid gap-2 mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to={"/login"} className="underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
