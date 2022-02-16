// npm install -g ts-node
// npm install @types/node --save-dev // get the node typing (targetting the NodeJS environment)
// also need to have abortController   

// https://rxjs.dev/api/ajax/ajax
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const obs$ = ajax(`https://api.github.com/users?per_page=5`).pipe(
  map(userResponse => console.log('users: ', userResponse)),
  catchError(error => {
    console.log('error: ', error);
    return of(error);
  })
);