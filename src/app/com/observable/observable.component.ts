import * as Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import { CodeJarContainer } from 'ngx-codejar';
// import {CodeJarContainer} from '../../projects/ngx-codejar/src/lib/codejar.typings';
import { Component, OnInit } from '@angular/core';
import { GetApiDataService } from 'src/app/services/get-api-data.service';
import { GetVariablesService } from 'src/app/services/get-variables.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit {
  
  constructor(private _dataSer: GetApiDataService, public varSer: GetVariablesService) {}

  ngOnInit(): void {
    this._dataSer.getUserFromApi().subscribe(res=>{
      console.log(res);
      
    })
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

