const config = {
  collabAppId: import.meta.env.VITE_COLLAB_APP_ID,
  env: !!import.meta.env.DEV ? "development" : "production",
};

export default config;
