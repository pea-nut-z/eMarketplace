import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} from "@env";
import * as firebase from "firebase";
import "firebase/auth";
// import "firebase/firestore";

export const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};
export const app = firebase.initializeApp(config);

export const auth = app.auth();
// export const db = firebase.firestore().settings({ timestampsInSnapshots: true });
