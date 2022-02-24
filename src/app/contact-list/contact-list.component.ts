import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Contact } from '../models/Contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {


  contacts: Contact[]=[] as Contact[];
  errorMessage:string | undefined;
  @Output() sendContact= new EventEmitter();

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {

    this.contactService.getAllContacts().subscribe((data)=>{
      this.contacts= data;
    },(error)=>{
      this.errorMessage= error;
    })

  }
     

  selectContact(contact: Contact){
    this.sendContact.emit(contact)
  }

}
