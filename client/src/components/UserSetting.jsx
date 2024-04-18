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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/Alertdialog.jsx";

import * as React from "react";

import { Card, CardContent } from "../components/Card.jsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/Carousel.jsx";

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
        <AlertDialogContent className="w-[100dvw]">
          <AlertDialogHeader>
            <AlertDialogTitle>Select Avatar</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            <div className="flex">
              <Carousel
                opts={{
                  align: "end",
                }}
                className="w-full max-w-sm"
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/2"
                    >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-3xl font-semibold">
                              {index + 1}
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
            </div>
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleClick}>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
