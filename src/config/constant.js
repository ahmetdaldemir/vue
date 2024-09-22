export default {
  webBaseURL: process.env.MIX_APP_URL,
 
    firebaseConfig: {
    apiKey: "AIzaSyAD9yP1NBrNwJYvvaq8Em-dWnQl_rsX7ms",
    authDomain: "vueapi-6b1a1.firebaseapp.com",
    projectId: "vueapi-6b1a1",
    storageBucket: "vueapi-6b1a1.appspot.com",
    messagingSenderId: "354417763739",
    appId: "1:354417763739:web:a9ac1077b93b64f022ad3e",
    measurementId: "G-2RN2ZJB0EM"
  },
  auth0Config: {
    domain: 'dev-6u-3fb22.auth0.com',
    clientID: 'MmsLOH7Ncrh7PKTcyHYKZggfH7RrxeL8',
    // make sure this line is contains the port: 8080
    redirectUri: 'http://localhost:8080/callback',
    // we will use the api/v2/ to access the user information as payload
    audience: 'https://dev-6u-3fb22.auth0.com/api/v2/',
    responseType: 'token id_token',
    scope: 'openid profile'
  }
}
