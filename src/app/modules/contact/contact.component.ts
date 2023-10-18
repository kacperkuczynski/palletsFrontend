import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
        email: ['', [Validators.required, Validators.email]],
        subject: ['', [Validators.required]],
        message: ['', [Validators.required]]
      })
    }

    openSnackBar() {
      this.snackBar.open('Dziękujemy za kontakt', 'OK',
        {
          duration:this.durationInSeconds * 1000,
        });
    }

    submit(){
      if (this.contactForm.valid) {
        const formData: EmailMessage = {
          email: this.email?.value,
          subject: this.subject?.value,
          message: this.message?.value
        };

        this.contactService.sendEmailMessage(formData).subscribe(
          () => {
            this.contactForm.reset();
            this.snackBar.open('Dziękujemy za kontakt', 'OK',
            {
              duration:this.durationInSeconds * 1000,
              panelClass: ['green-snackbar'],
            });
          },
          error => {
            console.error('Błąd podczas wysyłania wiadomości:', error);
            // Możesz dodać dodatkową obsługę błędu, np. wyświetlenie Snackbar z komunikatem o błędzie.
          }
        );
      } else {
        let errorMessage = "Błąd w polach: ";

        if (this.email?.invalid) {
          errorMessage += "Email, ";
        }

        if (this.subject?.invalid) {
          errorMessage += "Temat, ";
        }

        if (this.message?.invalid) {
          errorMessage += "Wiadomość, ";
        }

        errorMessage = errorMessage.slice(0, -2) + '.';

        this.snackBar.open(errorMessage, 'OK', {
          duration: this.durationInSeconds * 1000,
        });
      }
    }

  get email(){
    return this.contactForm.get('email');
  }

  get subject(){
    return this.contactForm.get('subject');
  }

  get message(){
    return this.contactForm.get('message');
  }

}
