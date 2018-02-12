const utils = {
  checkResponse: (response) => {
    return new Promise((resolve, reject) => {
      // will resolve or reject depending on status, will pass "data" in either case
      let returnFunction;
      response.status < 400 ? (returnFunction = resolve) : (returnFunction = reject);
      response.json().then(data => returnFunction(data));
    });
  }
}

module.exports = utils;
