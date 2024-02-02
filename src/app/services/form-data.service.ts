import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  onSendFromData(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData)
      .pipe(
        catchError(err => {
          console.error('Error while sending data(rom service: ', err);
          throw err;
        })
      )
  }
}
