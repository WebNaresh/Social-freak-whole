export const handleOpenCard = (setOpen, open) => {
  setOpen({
    ...open,
    profileCard: true,
  });
};
export const handleCloseCard = (setOpen, open) => {
  setOpen({
    ...open,
    profileCard: false,
  });
};
export const handleOpenInfo = (setOpen, open) => {
  setOpen({
    ...open,
    profileInfo: true,
  });
};
export const handleCloseInfo = (setOpen, open) => {
  setOpen({
    ...open,
    profileInfo: false,
  });
};
