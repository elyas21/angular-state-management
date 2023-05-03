import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CodeJarContainer } from 'ngx-codejar';
import { Observable } from 'rxjs';
import * as Prism from 'prismjs';

import { OperatorsService } from 'src/app/services/operators.service';

@Component({
  selector: 'app-operator-detail',
  templateUrl: './operator-detail.component.html',
  styleUrls: ['./operator-detail.component.scss'],
})
export class OperatorDetailComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _operSer: OperatorsService
  ) {}
  operator!: string;
  op: any;
  operators = [
    { name: 'map', link: 'map' },
    { name: 'filter', link: 'filter' },
    { name: 'take', link: 'take' },
    { name: 'switchMap', link: 'switchMap' },
    { name: 'tap', link: 'tap' },
    { name: 'combineLatest', link: 'combineLatest' },
  ];
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.operator = param.get('operator')!;

      this.op = this._operSer.operators.find((o) => o.name == this.operator);
    });
  }

  hightlightMethod(editor: CodeJarContainer) {
    if (editor.textContent !== null && editor.textContent !== undefined) {
      editor.innerHTML = Prism.highlight(
        editor.textContent,
        Prism.languages['typescript'],
        'typescript'
      );
    }
  }
}
