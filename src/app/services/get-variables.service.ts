import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetVariablesService {
  constructor() {}

  observableCode: string = `
  import { Observable, of } from 'rxjs';
    
  const observable = Observable.of(1, 2, 3, 4, 5);
  const demoApi = this._http.get('https://jsonplaceholder.typicode.com/users')
  
  // Subscribe to the observable
  const subscription = observable.subscribe(number => {
    console.log(number);
  });
  
  // Subscribe to the demoApi
  const Apisubscription = observable.subscribe(users => {
    console.log(users);
  });
  
  `;
  callbackCode: string = `
  
  function calculate(x, y, callback) {
    const result = x + y;
    callback(result);
  }
  
  calculate(1, 2, function(result) {
    console.log(result); // 3
  });
  
  `;
  promiseCode: string = `
  
  function getUsers() {
    const promise = new Promise((resolve, reject) => {
      // Make a request to the API
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => resolve(users))
        .catch(error => reject(error));
    });
  
    return promise;
  }
  
  `;
  observablehomeCode: string = `
  
  const input = document.getElementById('my-input');
  const observable = new Observable((observer) => {
    input.addEventListener('input', () => {
      observer.next(input.value);
    });
  });
  
  observable.subscribe((value) => {
    console.log(value); // The current value of the input element
  });
  
  `;
}
