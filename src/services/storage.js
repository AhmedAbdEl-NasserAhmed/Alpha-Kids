export const storage = {
  getStorage(token) {
    if (!token) return null;

    return JSON.parse(localStorage.getItem(token));
  },
  setStorage(token, object) {
    return localStorage.setItem(token, JSON.stringify(object));
  },
};
