
// const headers = () => {
//   const h = new Headers();
  
//   h.append('Content-Type', 'application/json');
//   return h;
// };

// const request = (method, path, body) => {
//   const url = 'https://api.giphy.com/v1/gifs/search?api_key=eebf3c5925444f7795113971df688682&q=minions&limit=5&offset=0&rating=G&lang=en';
//   const options = { method, headers: headers() }

//   if(body) {
//     options.body = JSON.stringify(body);
//   }

//   return (fetch(new Request(url, options)))
// };

// const Api = {
//   get(path) {
//     return request('GET', path);
//   },
// }

// export default Api;
