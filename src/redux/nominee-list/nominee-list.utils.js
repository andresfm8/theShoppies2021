export const addMovieToList = (nomineeList, nomineeToAdd) => {
  const existingNominee = nomineeList.find(nominee => nominee.imdbID === nomineeToAdd.imdbID);
  if(!existingNominee)  return [...nomineeList, nomineeToAdd];

  return nomineeList;  
}