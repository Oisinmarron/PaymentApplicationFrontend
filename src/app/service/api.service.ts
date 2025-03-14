import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private paymentApiUrl = 'http://localhost:8080/api/create-payment';
  private webhookApiUrl = 'http://localhost:8080/api/register-webhook';

  constructor(private http: HttpClient) {}

  submitPayment(paymentData: any): Observable<any> {
    return this.http.post(this.paymentApiUrl, paymentData);
  }

  submitWebhook(webhookData: any): Observable<any> {
    return this.http.post(this.webhookApiUrl, webhookData);
  }
}
