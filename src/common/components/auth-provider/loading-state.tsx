import { Loader2 } from "lucide-react";

export const LoadingState = () => {
  return (
    <div className="h-screen grid place-content-center">
      <div className="flex items-center gap-2">
        <Loader2 className="animate-spin w-4 h-4" />
        Loading...
      </div>
    </div>
  );
};
