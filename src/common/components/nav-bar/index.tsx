import Link from "next/link";
import { ThemeSwitch } from "@/components/theme/theme-switch";
import { ProfileAvatar } from "@/components/profile-avatar";

export const NavBar = () => {
  return (
    <nav className="shadow-sm border border-b sticky top-0 bg-background">
      <div className="container flex justify-between items-center py-2">
        <div className="flex items-center gap-2">
          <Link href={"/"} className="font-medium">
            My Tasks
          </Link>
          <ThemeSwitch />
        </div>

        <ProfileAvatar />
      </div>
    </nav>
  );
};
