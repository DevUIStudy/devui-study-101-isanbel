import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contact = []

  addToContact(member) {
    this.contact.push(member);
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
}
