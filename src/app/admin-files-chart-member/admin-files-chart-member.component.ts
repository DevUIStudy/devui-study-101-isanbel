import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Member } from '../member';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-files-chart-member',
  templateUrl: './admin-files-chart-member.component.html',
  styleUrls: ['./admin-files-chart-member.component.scss']
})
export class AdminFilesChartMemberComponent implements OnInit {
  @Input() member : Member;
  @Input() show : boolean;
  @Output() submit = new EventEmitter();
  @Output() cancel = new EventEmitter();

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    gender: new FormControl(''),
  });

  onSubmit() {
    console.warn(this.profileForm.value);
    // this.submit.emit() // default call
  }

  constructor() { }

  ngOnInit() {
  }

}
