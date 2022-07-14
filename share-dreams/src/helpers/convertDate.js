export const convertDate = (date) => {
  if (date?.length === 2) {
    return `${date}/`;
  }

  if (date?.length === 5) {
    return `${date[0]}${date[1]}/${date[3]}${date[4]}/`;
  }

  if (date?.length === 7) {
    return `${date[0]}${date[1]}/${date[3]}${date[4]}/${date[6]}`;
  }

  if (date?.length === 8) {
    return `${date[0]}${date[1]}/${date[3]}${date[4]}/${date[6]}${date[7]}`;
  }
  if (date?.length === 9) {
    return;
    `${date[0]}${date[1]}/${date[3]}${date[4]}/${date[6]}${date[7]}${date[8]}`;
  }
  if (date?.length >= 10) {
    return;
    `${date[0]}${date[1]}/${date[3]}${date[4]}/${date[6]}${date[7]}${date[8]}${date[9]}`;
  }
};
