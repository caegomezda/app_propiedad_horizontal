// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
let URL = "https://apppropiedadhorizontal-default-rtdb.firebaseio.com/";
export const environment = {
  firebase: {
    projectId: 'apppropiedadhorizontal',
    appId: '1:894207999938:web:7b3f63d907b940371aa05b',
    // databaseURL: 'https://apppropiedadhorizontal-default-rtdb.firebaseio.com',
    storageBucket: 'apppropiedadhorizontal.appspot.com',
    apiKey: 'AIzaSyCkZUxxHQeB_gbOP2Jp-feqPK5FNZR24kQ',
    authDomain: 'apppropiedadhorizontal.firebaseapp.com',
    messagingSenderId: '894207999938',
    measurementId: 'G-QNYELLT60C',
  },
  production: false,
  urlConfing:{
    USERURL: `${URL}user-api`,
    DRIVERTURL: `${URL}driver-api`,
    MOVEMENTURL: `${URL}movement-api`,
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
