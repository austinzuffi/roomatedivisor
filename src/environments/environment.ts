// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBAbvLb0X3p1AxYeBb2fZhGZPP0JtTNqNw",
    authDomain: "roommate-divisor.firebaseapp.com",
    databaseURL: "https://roommate-divisor.firebaseio.com",
    projectId: "roommate-divisor",
    storageBucket: "roommate-divisor.appspot.com",
    messagingSenderId: "908319956376"
  }
};
