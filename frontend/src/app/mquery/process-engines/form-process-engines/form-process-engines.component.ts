import {Component, Input, OnInit} from '@angular/core';
import {ProcessEngine} from '../../../models/processEngine';

@Component({
  selector: 'ngx-form-process-engines',
  templateUrl: './form-process-engines.component.html',
  styleUrls: ['./form-process-engines.component.scss'],
})
export class FormProcessEnginesComponent implements OnInit {

  @Input() procEng: ProcessEngine;
  @Input() onSubmit: Function;
  constructor() { }

  ngOnInit() {
  }

}
