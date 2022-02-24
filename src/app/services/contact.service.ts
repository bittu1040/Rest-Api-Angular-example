import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Contact } from '../models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  getAllContacts():Observable<Contact[]>{
    let dataURL:string= 'https://gist.githubusercontent.com/thenaveensaggam/fe5a67531d964f8c17fc92f0c70ced21/raw/f7c43379ec32421c871a57f832e314dd8e5d92f7/contacts.15.6.2021.json';
    return this.httpClient.get<Contact[]>(dataURL).pipe(catchError(this.handleError) )
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage:string="";
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage= `An Error Occurred: ${error.error}`;
      // console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage= `Backend returned code ${error.status}, body was: ${error.error}`;
      // console.error(
      //   `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    errorMessage+='\n Something bad happened; please try again later.';
    // return throwError(() => new Error('Something bad happened; please try again later.'));
    return throwError( ()=>errorMessage)
  }

}
