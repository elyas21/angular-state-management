import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OperatorsService {
  constructor() {}
  operators = operators;
}

const operators = [
  {
    name: 'map',
    description:
      'The map operator in Angular is used to transform the values emitted by an observable by applying a function to each value. The function is called with the value as the argument and the result of the function is emitted by the observable.',
    code: `

      import { from } from 'rxjs';
      import { map } from 'rxjs/operators';

      const observable = from([1, 2, 3]);

      observable.pipe(
      map(value => value.toUpperCase())
      ).subscribe(value => console.log(value));

    `,
    codeDescription:
      'In this example, the observable observable emits the values 1, 2, and 3. The map operator transforms each value by converting it to uppercase. The transformed values are then emitted by the observable.',
  },
  {
    name: 'filter',
    description:
      'filter() - The filter() operator filters out values that do not meet a certain criteria. The function is called with the value as the argument and the result of the function is a boolean value. If the result of the function is true, the value is emitted by the observable. If the result of the function is false, the value is not emitted.',
    code: `
      import { from } from 'rxjs';
      import { filter } from 'rxjs/operators';

      const observable = from([1, 2, 3, 4, 5]);

      observable.pipe(
      filter(value => value % 2 === 0)
      ).subscribe(value => console.log(value));
    
    `,
    codeDescription:
      'In this example, the observable observable emits the values 1, 2, 3, 4, and 5. The filter operator filters out odd numbers, so the only values that are emitted are 2 and 4.',
  },
  {
    name: 'take',
    description:
      'take() - The take() operator emits only a certain number of values from an observable. The operator takes two arguments: the first argument is the number of values to emit, and the second argument is a scheduler on which to execute the operator.',
    code: `
    import { from } from 'rxjs';
    import { take } from 'rxjs/operators';

    const observable = from([1, 2, 3, 4, 5]);

    observable.pipe(
    take(2)
    ).subscribe(value => console.log(value));

    `,
    codeDescription:
      'In this example, the observable observable emits the values 1, 2, 3, 4, and 5. The take() operator emits only the first two values, so the only values that are emitted are 1 and 2.',
  },
  {
    name: 'switchMap',
    description:
      'The switchMap operator in Angular is used to project each source value to an Observable which is merged in the output Observable, emitting values only from the most recently projected Observable.',
    code: `
    import { HttpClient } from '@angular/common/http';

const httpClient = new HttpClient();

const getUsers = () => {
  return httpClient.get('https://my-api.com/users');
};

const getUserDetails = (userId) => {
  return httpClient.get('https://my-api.com/users/\${userId}');
};

const getUsersAndDetails = () => {
  return from(getUsers()).pipe(
    switchMap(users => {
      return from(users).pipe(
        map(user => {
          return getUserDetails(user.id);
        }));
    })
  );
};

getUsersAndDetails().subscribe(users => {
  console.log(users);
});
    
    `,
    codeDescription: `In this example, the getUsersAndDetails() function uses the switchMap() operator to chain together two API requests:

    A request to get the list of users
    A request to get the details of each user
    The switchMap() operator ensures that the second request is only made if the first request is successful. If the first request fails, the switchMap() operator will not make the second request.
    
    The getUsersAndDetails() function can be used to get the list of users and the details of each user.`,
  },
  {
    name: 'tap',
    description: `The tap operator is a RxJS operator that allows you to perform side effects on an observable without affecting the observable itself. This can be useful for logging, debugging, or other tasks that don't need to be part of the observable's stream.

    The tap operator takes a function as its argument, and the function is called with each value that is emitted by the observable. The function can do anything with the value, and the value is then emitted by the tap operator.`,
    code: `import { from } from 'rxjs';
    import { tap } from 'rxjs/operators';
    
    const observable = from([1, 2, 3]);
    
    observable.pipe(
      tap(value => console.log(value))
    ).subscribe();`,
    codeDescription: `In this example, the observable observable emits the values 1, 2, and 3. The tap operator logs each value as it is emitted, and the values are then emitted by the tap operator.

    The tap operator is a powerful tool that can be used to debug and log observables. It can also be used to perform other side effects on observables without affecting the observable's stream.`,
  },
  {
    name: 'combineLatest',
    description: `The combineLatest operator is a RxJS operator that combines the latest values from multiple observables into a single observable. The combineLatest operator takes an array of observables as its argument, and it emits an array of values whenever all of the observables in the array have emitted at least one value.`,
    code: `import { from } from 'rxjs';
    import { combineLatest } from 'rxjs/operators';
    
    const observable1 = from([1, 2, 3]);
    const observable2 = from([4, 5, 6]);
    
    observable1.pipe(
      combineLatest(observable2)
    ).subscribe(([value1, value2]) => {
      console.log(value1, value2);
    });`,
    codeDescription: `In this example, the observable1 observable emits the values 1, 2, and 3. The observable2 observable emits the values 4, 5, and 6. The combineLatest operator combines the latest values from both observables, and it emits an array of values whenever both observables have emitted at least one value.

    In this example, the combineLatest operator will emit the arrays [1, 4], [2, 5], and [3, 6].`,
  },
];
