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
  @Input() member : Member;
  @Input() show : boolean;
  @Output() submit = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
  }

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    gender: new FormControl(''),
  });

  onSubmit() {
    this.addToContact(this.profileForm.value);
    // HACK: I have no idea why the output submit is emitted.
  }

  addToContact(profileForm) {
    if (profileForm.profileForm === '' || profileForm.lastName === '')
      return
    let member = this.member
    member.id = member.id ? member.id : this.contactService.getMembers().length + 1
    member.firstName = profileForm.firstName
    member.lastName = profileForm.lastName
    member.gender = profileForm.gender
    console.log(member.id)
    member.dob = new Date()
    this.contactService.addToContact(member);
  }

}
