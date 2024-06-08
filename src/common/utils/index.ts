export const getInitials = (name: string) => {
  const [firstName, lastName] = name.split(" ");
  return (
    `${firstName ? firstName[0] : ""}${lastName ? lastName[0] : ""}`.trim().toUpperCase() || "U"
  );
};
