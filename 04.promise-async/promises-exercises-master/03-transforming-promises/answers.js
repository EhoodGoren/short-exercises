/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    promise.catch((error) => {
      reject(error);
    });
    promise.then((value) => {
      try{
        resolve(transformer(value));
      }
      catch (error){
        reject(error);
      }
    });
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return numberPromise
    .then((value) => {
      return new Promise((resolve, reject) => {
        if(value > 0 || parseInt(value) > 0){
          resolve(value * value);
        }
        else{
          reject(`Cannot convert '${value}' to a number!`);
        }
      });
    })
    .catch((error) => {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    });
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch(() => {
      return new Promise((resolve,reject) => {
        resolve(0);
      });
    });
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then((value) => {
    throw value;
  },
  (error) => {
    return error; 
  });
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};