export const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") {
    return null; // Ensure this function only runs in the client-side
  }

  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];

  return cookieValue ? decodeURIComponent(cookieValue) : null;
};

export const tokenAuth = () => getCookie("userToken");
export const roleAuth = () => getCookie("userRole");
