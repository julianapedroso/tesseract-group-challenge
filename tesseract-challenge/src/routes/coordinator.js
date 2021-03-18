export const goToMembersPage = (history) => {
  history.push("/");
};

export const goToMembersDetailsPage = (history, userId) => {
  history.push(`/details/${userId}`);
};

export const goToBack = (history) => {
  history.goBack();
};
