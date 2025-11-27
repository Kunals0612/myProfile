import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ToastService {
  trigger = new Subject<string>();

  show(message: string){
    console.log("show called");
    this.trigger.next(message);
    console.log("triggered");
  }
}
