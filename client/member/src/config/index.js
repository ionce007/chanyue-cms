let api = {
  pre: {
    BASE_API: "http://localhost/" || import.meta.env.VITE_APP_BASE_API,
  },
  prd: {
    BASE_API: "http://localhost/" || import.meta.env.VITE_APP_BASE_API,
  },
};

const env = "pre";
export default api[env];
