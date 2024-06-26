import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  language = inject(LanguageService);
  emailSent: boolean = false;

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    acceptedPrivacyPolicy: false
  }

  post = {
    endPoint: 'https://john-broda.ch/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
            this.emailSent = true;
            setTimeout(() => {
              this.emailSent = false;
            }, 2000);
          },
          error: (error) => {
            console.error(error);
          },
        });
    }
  }
}
