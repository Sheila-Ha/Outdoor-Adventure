import { AvatarImage, Avatar } from "./Avatar.jsx";
import { Button } from "../components/Button.jsx";
import { useLoggedInUser } from "../context/UserContext.jsx";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/DropdownMenu.jsx";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/Alertdialog.jsx";
import { useState } from "react";

export default function UserSetting() {
  const { loggedInUser } = useLoggedInUser();
  const [openTrueFalse, setOpenTrueFalse] = useState(false);
  function handleClick() {
    setOpenTrueFalse(openTrueFalse === true ? false : true);
  }
  return (
    <div className="ml-4" size="icon">
      {/* <Link to={"/profile"}> */}
      <Avatar>
        {/* we can replace with other avatar */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <AvatarImage src="https://github.com/shadcn.png" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{loggedInUser.username}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem onSelect={handleClick}>
              Change Avatar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>user</AvatarFallback> */}
      </Avatar>
      {/* </Link> */}
      <span className="sr-only">Toggle user menu</span>
      <AlertDialog open={openTrueFalse}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Select Avatar</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleClick}>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
