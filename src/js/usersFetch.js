export default (callback) => {
  // console.log(callback);
  let url = `https://randomuser.me/api/?results=1`;
  let fetchPromise = fetch(url);
  let jsonPromise = fetchPromise.then((res) => res.json());

  jsonPromise.then((json) => callback(json));
};
