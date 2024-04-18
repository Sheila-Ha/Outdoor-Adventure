import { AvatarImage, Avatar } from "./Avatar.jsx";
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/Dialog.jsx";

import { Card, CardContent } from "../components/Card.jsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/Carousel.jsx";

import { useState } from "react";
import { Button } from "./Button.jsx";

const avatarImg = [
  "../../public/images/avatar1.png",
  "../../public/images/avatar2.png",
  "../../public/images/avatar3.png",
  "../../public/images/avatar4.png",
  "../../public/images/avatar5.png",
];
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
      <Dialog open={openTrueFalse}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Avatar</DialogTitle>
          </DialogHeader>
          <Carousel
            opts={{
              align: "end",
            }}
            className="w-[70%] max-w-sm md:ml-[5rem] ml-10"
          >
            <CarouselContent>
              {Array.from({ length: 6 }).map((img, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/3 lg:basis-1/3 sm:basis-1/1 max-w-[150px] aspect-square"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-2">
                        <span className="text-3xl font-semibold">
                          <img src={img} />
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <DialogFooter>
            <Button onClick={handleClick}>Cancel</Button>
            <Button>Continue</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
