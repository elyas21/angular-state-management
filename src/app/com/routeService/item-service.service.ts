import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemServiceService {
  searchTerm$: Observable<any> = this._getSerachItem();
  items$: Observable<any> = this._loadItem();
  searchFormControl: FormControl<any> = new FormControl('', [  ]);

  constructor(private _route: ActivatedRoute) {}

  _getSerachItem(): Observable<string> {
    return this._route.queryParamMap.pipe(
      map((queryParma) => queryParma.get('q') || ''),
      tap((q) => {
        this.searchFormControlValue(q);
      })
    );
  }
  searchFormControlValue(q: string): void {
    this.searchFormControl.setValue(q);
  }

  _loadItem(): Observable<any[]> {
    return this.searchTerm$.pipe(
      switchMap((serachTerm: string) => {
        return loadItemFromApi().pipe(
          map((items) => items),
          map((items) => {
            if (serachTerm) {
              console.log(serachTerm);
              console.log(items);

              return items.filter((item: Item) => {
                console.log(item.name);

                return item.name.includes(serachTerm.toLocaleLowerCase());
              });
            }
            return [...items];
          })
        );
      })
    );
  }
}

function loadItemFromApi(): Observable<any[]> {
  const itemList = [
    {
      name: 'bag',
    },
    {
      name: 'pen',
    },
    {
      name: 'pc',
    },
  ];
  return of(itemList);
}

interface Item {
  name: string;
}
