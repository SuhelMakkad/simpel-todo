"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, type User } from "firebase/auth";

import { routes } from "@/utils/constant";
import { auth } from "@/utils/firebase";
import { LoadingState } from "./loading-state";

type AuthContextType = {
  user: User | null | undefined;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<User | null | undefined>();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push(routes.login);
      return;
    }

    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        router.push(routes.home);
        return;
      }

      setUser(null);
      router.push(routes.login);
    });

    return () => unSub();
  }, [user, router]);

  return (
    <AuthContext.Provider value={{ user }}>
      {user === undefined ? <LoadingState /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
