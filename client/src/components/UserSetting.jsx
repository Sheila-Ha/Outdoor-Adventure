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

export default function UserSetting() {
  const { loggedInUser } = useLoggedInUser();
  return (
    <Button className="ml-4" size="icon" variant="outline">
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
            <DropdownMenuItem>Change Avatar</DropdownMenuItem>
            {/* <div className="flex">
            <DropdownMenuItem>
            <img
                src="/public/images/avatar1.png" className={cn(
                  "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
                )}
              />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <img
                src="/public/images/avatar2.png" className={cn(
                  "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
                )}
              />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <img src="/public/images/avatar3.png" className={cn(
                  "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
                )}/>
            </DropdownMenuItem>
          </div>
          <div className="flex ">
            <DropdownMenuItem>
            <img src="/public/images/avatar4.png" className={cn(
                  "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
                )}/>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <img src="/public/images/avatar5.png" className={cn(
                  "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
                )}/>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <img src="/public/images/avatar6.png" className={cn(
                  "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
                )}/>
            </DropdownMenuItem>
          </div> */}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>user</AvatarFallback> */}
      </Avatar>
      {/* </Link> */}
      <span className="sr-only">Toggle user menu</span>
    </Button>
  );
}
