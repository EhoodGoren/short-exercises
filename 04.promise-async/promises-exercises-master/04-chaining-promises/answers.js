/**
 * 
 * EXERCISE 1
 * 
 * @param {Promise} promise 
 * @param {function} asyncTransformer 
 */
function flatMapPromise(promise, asyncTransformer){
  return new Promise((resolve, reject) => {
    promise
      .then((value) => {
        resolve(asyncTransformer(value));
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise} firstPromise 
 * @param {function} slowAsyncProcess 
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess){
  return firstPromise.then((value) => {
    return slowAsyncProcess(value);
  });
}

/**
 * 
 * EXERCISE 3
 * 
 * @param {function} getUserById 
 * @param {function} getOrganizationById 
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById){
  return function getUserByIdWithOrganization(userId){
    let user = {};
    return getUserById(userId)
    .then((userInfo) => {
      if(!userInfo){
        return;
      }
      user = userInfo;
      return getOrganizationById(userInfo.organizationId).then((organizationInfo) => {
        user.organization = organizationInfo;
        return user;
      });
    });
  };
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};