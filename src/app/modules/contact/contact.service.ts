import { Injectable } from '@angular/core';
import { EmailMessage } from './model/emailMessage';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  constructor(private http: HttpClient) { }

  // sendEmailMessage(emailMessage: EmailMessage):Observable<EmailMessage> {
  //   return this.http.post<EmailMessage>("/api/contact", emailMessage);
  // }
}
