import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private apiService: ApiService) {}

  // Function to handle payment form submission
  onPaymentSubmit(paymentForm: any) {
    if (paymentForm.invalid) {
      alert('Please fill out all payment fields.');
      return;
    }

    const paymentData = {
      firstName: paymentForm.value.firstName,
      lastName: paymentForm.value.lastName,
      zipCode: paymentForm.value.zipCode,
      cardNumber: paymentForm.value.cardNumber
    };

    this.apiService.submitPayment(paymentData).subscribe({
      next: (response) => {
        console.log('Payment submitted successfully', response);
        alert('Payment submitted successfully!');
      },
      error: (error) => {
        console.error('Error submitting payment', error);
        alert('Error submitting payment. Please try again.');
      }
    });
  }

  // Function to handle webhook form submission
  onWebhookSubmit(webhookForm: any) {
    if (webhookForm.invalid) {
      alert('Please fill out all webhook fields.');
      return;
    }

    const webhookData = {
      webhookUrl: webhookForm.value.webhookUrl,
      webhookType: webhookForm.value.webhookType
    };

    this.apiService.submitWebhook(webhookData).subscribe({
      next: (response) => {
        console.log('Webhook submitted successfully', response);
        alert('Webhook submitted successfully!');
      },
      error: (error) => {
        console.error('Error submitting webhook', error);
        alert('Error submitting webhook. Please try again.');
      }
    });
  }
}
