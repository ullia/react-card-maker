const firebaseConfig = {
  apiKey: process.envREACT_APP_FIREBASE_API_KEY,
  authDomain: process.envREACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.envREACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
