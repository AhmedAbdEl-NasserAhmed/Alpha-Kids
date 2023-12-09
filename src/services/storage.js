export const storage = {
  getStorage(token) {
    return JSON.parse(localStorage.getItem(token));
  },
  setStorage(token, object) {
    return localStorage.setItem(token, JSON.stringify(object));
  },
};
