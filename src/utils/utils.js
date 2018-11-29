export const formatedURL = (
  componentName,
  dept,
  postName,
  releaseDate,
  startDate
) => {
  let formatedReleaseDate;
  let formatedStartDate;
  let formatedDept = dept.replace(/\s/g, "-");
  let formatedPostName = postName.replace(/\s/g, "-");
  releaseDate ? (formatedReleaseDate = releaseDate.replace(/[/]/g, "-")) : null;
  startDate ? (formatedStartDate = startDate.replace(/[/]/g, "-")) : null;
  return `/${componentName}/${formatedDept}-${formatedPostName}-${formatedReleaseDate ||
    formatedStartDate}`;
};
export const reFormatedURL = (
  componentName,
  dept,
  postName,
  releaseDate,
  startDate
) => {
  let formatedReleaseDate;
  let formatedStartDate;
  let formatedDept = dept.replace(/\s/g, "-");
  let formatedPostName = postName.replace(/\s/g, "-");
  releaseDate ? (formatedReleaseDate = releaseDate.replace(/[/]/g, "-")) : null;
  startDate ? (formatedStartDate = startDate.replace(/[/]/g, "-")) : null;
  return `/${componentName}/${formatedDept}-${formatedPostName}-${formatedReleaseDate ||
    formatedStartDate}`;
};
