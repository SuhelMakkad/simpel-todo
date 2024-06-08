export const OrDivider = () => {
  return (
    <div
      role="separator"
      className="relative isolate text-center after:absolute after:left-0 after:right-0 after:top-1/2 after:-z-10 after:h-px after:bg-input"
    >
      <span className="bg-background px-4 text-muted-foreground">or</span>
    </div>
  );
};
