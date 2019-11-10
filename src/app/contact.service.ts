import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contact = []

  addToContact(member) {
    // update if existed
    let index = this.contact.map(x => x.id).indexOf(member.id)
    if (index < 0)
      this.contact.push(member);
    else
      this.contact[index] = member
  }

  getMembers() {
    return this.contact;
  }

  getMemberById(id) {
    let contactSatisfied = this.contact.filter(x => x.id == id)
    if (contactSatisfied.length > 0)
      return contactSatisfied[0]
    return null
  }

  deleteMemberById(id) {
    let index = this.contact.map(x => x.id).indexOf(id)
    if (index >= 0)
      this.contact.splice(index, 1)
  }
}
