export const goToMembersPage = (history) => {
  history.push("/");
};

export const goToMembersDetailsPage = (history, login) => {
  history.push(`/details/${login}`);
};

export const goToBack = (history) => {
  history.goBack();
};
