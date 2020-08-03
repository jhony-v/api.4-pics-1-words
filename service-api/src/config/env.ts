import dotenv from "dotenv";

dotenv.config();

interface IEnvConfiguration {
  KEY_ENCRYPT_PASSWORD: string | undefined;
  KEY_JWT: string | undefined;
  FIREBASE_URL: string | undefined;
}

const env: IEnvConfiguration = {
  KEY_ENCRYPT_PASSWORD: process.env.KEY_ENCRYPT_PASSWORD,
  KEY_JWT: process.env.KEY_JWT,
  FIREBASE_URL: process.env.FIREBASE_URL,
};

export default env;
