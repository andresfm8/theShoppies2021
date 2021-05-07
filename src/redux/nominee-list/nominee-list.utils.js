export const addMovieToList = (nomineeList, nomineeToAdd) => {
  const existingNominee = nomineeList.find(nominee => nominee.imdbID === nomineeToAdd.imdbID);
  if(!existingNominee && nomineeList.length < 5)  return [...nomineeList, nomineeToAdd];

  return nomineeList;  
}

export const removeMovieFromList = (nomineeList, nomineeToRemove) => {
  return nomineeList.filter(nominee => nominee.imdbID !== nomineeToRemove.imdbID);
}