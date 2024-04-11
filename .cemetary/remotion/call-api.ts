export const callApi = (endpoint:string, body:any, signal?:any) => {
  return new Promise((resolve, reject) => {
      fetch(endpoint, {
          method: 'post',
          headers: {
              'content-type': 'application/json',
          },
          signal,
          body: JSON.stringify(body),
      })
          .then((res) => res.json())
          .then((data) => {
          if (data.success) {
              resolve(data.data);
          }
          else {
              reject(new Error(data.error));
          }
      })
          .catch((err) => {
          reject(err);
      });
  });
};