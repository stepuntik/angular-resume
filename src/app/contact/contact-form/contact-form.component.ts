import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  formData: any = {};

  submitForm() {
    console.log(this.formData);

    this.formData = {};
  }
}
