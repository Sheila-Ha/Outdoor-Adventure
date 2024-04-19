import { AvatarImage, Avatar } from "./Avatar.jsx";
import { useLoggedInUser } from "../context/UserContext.jsx";
import { useMutation } from "@apollo/client";

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
import { UPDATE_IMAGE_PROFILE_URL } from "../graphql/mutation/updateImage.js";

const avatarImg = [
  "/images/avatar1.png",
  "/images/avatar2.png",
  "/images/avatar3.png",
  "/images/avatar4.png",
  "/images/avatar5.png",
  "/images/avatar6.png",
];

export default function UserSetting() {
  const { loggedInUser } = useLoggedInUser();
  const [openTrueFalse, setOpenTrueFalse] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [updateImageProfileUrl] = useMutation(UPDATE_IMAGE_PROFILE_URL);

  function handleClick() {
    setOpenTrueFalse(openTrueFalse === true ? false : true);
  }
  function imgHandleClick(url) {
    setImgUrl(url);
    // console.log(url);
  }
  async function continueClick() {
    await updateImageProfileUrl({
      variables: { loginImageProfileUrl: imgUrl },
    });
    setOpenTrueFalse(false);
  }
  return (
    <div className="ml-4" size="icon">
      <Avatar>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <AvatarImage
              src={
                imgUrl === ""
                  ? loggedInUser.image || "https://github.com/shadcn.png"
                  : imgUrl
              }
            />
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
      </Avatar>
      <span className="sr-only">Toggle user menu</span>
      <Dialog
        open={openTrueFalse}
        onOpenChange={(v) => {
          setOpenTrueFalse(v);
        }}
      >
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
              {avatarImg.map((url) => (
                <CarouselItem
                  key={url}
                  className="md:basis-1/3 lg:basis-1/3 sm:basis-1/1 max-w-[150px] aspect-square"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-1">
                        <span className="text-3xl font-semibold">
                          <img
                            onClick={() => imgHandleClick(url)}
                            src={url}
                            className={`aspect-square ${
                              imgUrl === url ? "border-green-400 border-4" : ""
                            } rounded-md`}
                          />
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
            <Button onClick={continueClick}>Continue</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
