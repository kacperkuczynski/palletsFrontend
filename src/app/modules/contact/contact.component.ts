import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from './contact.service';
import { EmailMessage } from './model/emailMessage';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  emailMessage!: EmailMessage;
  contactForm!: FormGroup;
  durationInSeconds = 5;

  constructor(    
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private contactService:ContactService,
    private snackBar: MatSnackBar
    ){}

    ngOnInit(): void {
      this.contactForm = this.formBuilder.group({//definicja formularza
        email: ['', []],
        name: ['', []],
        message: ['', []]
      })
    }

    openSnackBar() {
      this.snackBar.open('Dziękujemy za kontakt', '', 
        {
          duration:this.durationInSeconds * 1000
        });
    }

  submit(){
    // this.contactService.sendEmailMessage({
    //   email: this.contactForm.get("email")?.value,
    //   name: this.contactForm.get("name")?.value,
    //   message: this.contactForm.get("message")?.value
    // }as EmailMessage).subscribe(() => this.contactForm.reset());
}

  get email(){
    return this.contactForm.get('email');
  }

  get name(){
    return this.contactForm.get('name');
  }

  get message(){
    return this.contactForm.get('message');
  }

}
