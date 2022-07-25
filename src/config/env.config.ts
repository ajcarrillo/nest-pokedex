export const EnvConfigurations = () => ({
  environment: process.env.NODE_ENV || "development",
  mongoDb: process.env.MONGO_DB,
  port: process.env.PORT || 3001
});