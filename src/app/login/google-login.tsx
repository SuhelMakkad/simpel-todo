"use client";

import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/components/icons/google";

import { googleSignIn } from "@/utils/firebase/auth";

export const GoogleLogin = () => {
  return (
    <Button variant="outline" className="w-full gap-1.5" size="sm" onClick={googleSignIn}>
      <GoogleIcon height={16} width={16} />
      Login with Google
    </Button>
  );
};
