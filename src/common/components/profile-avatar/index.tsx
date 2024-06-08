"use client";

import { LogOut } from "lucide-react";
import { useAuth } from "@/components/auth-provider";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { getInitials } from "@/utils/index";
import { logOut } from "@/utils/firebase/auth";

export const ProfileAvatar = () => {
  const { user } = useAuth();
  if (!user) {
    return <div className="h-8 w-8" />;
  }

  const userTitle = user.displayName || user.email!;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-8 w-8">
          <AvatarImage src={user.photoURL!} alt="@shadcn" />
          <AvatarFallback>{getInitials(userTitle)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>{userTitle}</DropdownMenuItem>
        <DropdownMenuItem onClick={logOut}>
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
