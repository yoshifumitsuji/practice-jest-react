const axios = {
  get: () =>
    Promise.resolve({
      data: [{ name: 'Jane Doe', id: 1 }]
    })
};

export default axios;
