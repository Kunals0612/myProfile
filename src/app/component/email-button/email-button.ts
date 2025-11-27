import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/data';
import { ToastService } from '../../services/toast-service';

@Component({
  selector: 'app-email-button',
  standalone: true,
  imports: [],
  templateUrl: './email-button.html',
  styleUrl: './email-button.css',
})
export class EmailButton {
  email = PORTFOLIO_DATA.personal.email
  copyText() {
  const text = this.email;

  navigator.clipboard.writeText(text)
    .then(() => console.log("Copied"))
    .catch(err => console.error("Clipboard failed:", err));
  }

  constructor(private toast: ToastService){

  }
  showAlert() {
    console.log(this.email);
    this.toast.show('Email Copied Successfully');
  }
}
