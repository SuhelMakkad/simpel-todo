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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-8 w-8">
          <AvatarImage src={user.photoURL!} alt="@shadcn" />
          <AvatarFallback>{getInitials(user.displayName!)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>{user.displayName}</DropdownMenuItem>
        <DropdownMenuItem onClick={logOut}>
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
