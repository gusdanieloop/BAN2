export const isAuthenticated = () => localStorage.getItem('TOKEN_KEY') !== null;
export const getToken = () => localStorage.getItem('TOKEN_KEY');

export const logout = () => {
  localStorage.removeItem('TOKEN_KEY');
};
