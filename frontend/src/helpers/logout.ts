const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export const logout = () => {
  const cookiesToDelete = [
    "userFullName",
    "userId",
    "userRole",
    "userToken",
    "userUsername",
  ];
  cookiesToDelete.forEach((cookieName) => deleteCookie(cookieName));
};
