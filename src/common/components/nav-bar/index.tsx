import { ThemeSwitch } from "@/components/theme/theme-switch";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="shadow-sm border border-b sticky top-0 bg-background">
      <div className="container flex justify-between items-center py-2">
        <Link href={"/"} className="font-medium">
          My Tasks
        </Link>

        <ThemeSwitch />
      </div>
    </nav>
  );
};
