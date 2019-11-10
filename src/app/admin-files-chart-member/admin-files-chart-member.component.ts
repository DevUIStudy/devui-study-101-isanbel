import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Member } from '../member';
import { Output, EventEmitter } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-admin-files-chart-member',
  templateUrl: './admin-files-chart-member.component.html',
  styleUrls: ['./admin-files-chart-member.component.scss']
})
export class AdminFilesChartMemberComponent implements OnInit {
  private _show: boolean;

  @Input() member : Member;
  @Input() set show(value: boolean) {
    this._show = value;
    if (value)
      this.loadMemberData();
  }
  get show(): boolean {
    return this._show;
  }
  @Output() submit = new EventEmitter();
  @Output() cancel = new EventEmitter();

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    gender: new FormControl(''),
  });
  changeCount = 0

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
  }

  loadMemberData() {
    let memberDeepCopy = JSON.parse(JSON.stringify(this.member))
    delete memberDeepCopy.id
    delete memberDeepCopy.dob
    this.profileForm.setValue(memberDeepCopy)
  }

  onSubmit() {
    this.addToContact(this.profileForm.value);
    // HACK: I have no idea why the output submit is emitted.
  }

  addToContact(profileForm) {
    if (profileForm.profileForm === '' || profileForm.lastName === '')
      return
    let member = this.member
    // if member id is 0, user is not existed
    if (!member.id) {
      member.id = this.contactService.getMembers().length + 1
      member.dob = new Date()
    }
    member.firstName = profileForm.firstName
    member.lastName = profileForm.lastName
    member.gender = profileForm.gender
    this.contactService.addToContact(member);
  }

}
