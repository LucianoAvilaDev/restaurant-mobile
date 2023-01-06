export const CheckIfUserHasPermission = (
  userPermissions: string[],
  permissions: string[]
) => {
  return (
    permissions.length == 0 ||
    userPermissions.some((userPermission: string) =>
      permissions.includes(userPermission)
    )
  );
};
