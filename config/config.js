require('dotenv').config();

const config = {
  GoogleApiKey: process.env.GOOGLE_API_KEY,
  GoogleApplicationCredentials: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  GoogleProjectId: process.env.GOOGLE_PROJECT_ID
};

module.exports = config;
