import Link from "next/link";
import { Button } from "@/components/ui/button";
import { routes } from "@/utils/constant";
import { useSearchParams } from "next/navigation";

export const DummyDataLink = () => {
  const searchParams = useSearchParams();
  const dVal = searchParams.get("d") === "y" ? 1 : "y";

  return (
    <Button size="sm" variant="ghost" className="h-8" asChild>
      <Link href={`${routes.login}?d=${dVal}`}>Test data</Link>
    </Button>
  );
};
