import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  showErrorMessage: boolean = false;

  contactData={
    name: "",
    email: "",
    message: "",
  }

  onSubmit(contactForm: NgForm){
    if(contactForm.valid){
      console.log(this.contactData)
    }
    
  }

}
