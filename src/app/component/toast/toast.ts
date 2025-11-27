import { Component, ChangeDetectorRef } from '@angular/core';
import { ToastService } from '../../services/toast-service';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [NgIf, NgClass],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
  standalone: true,
})
export class Toast {
  message = '';
  visible = false;
  isShowing = false;
  timer: any = null;

  constructor(private toast: ToastService, private cdr: ChangeDetectorRef) {
    this.toast.trigger.subscribe(text => {
      this.message = text;
      this.visible = true;

      // Fade in
      setTimeout(() => {
        this.isShowing = true;
        this.cdr.detectChanges();
      }, 10);

      if (this.timer) clearTimeout(this.timer);

      this.timer = setTimeout(() => {
        // Fade out
        this.isShowing = false;
        this.cdr.detectChanges();

        // Remove from DOM after animation completes
        setTimeout(() => {
          this.visible = false;
          this.cdr.detectChanges();
        }, 500); // Match duration-500
      }, 2000);
    });
  }
}