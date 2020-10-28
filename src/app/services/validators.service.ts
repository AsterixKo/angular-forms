import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  isAdmin(control) {
    if (control.value.toLowerCase() === 'admin') {
      return {
        isAdmin: true
      }
    }
    return null;
  }

  emailExists(control) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'anastasio@tasio.com') {
          resolve({ emailExists: true });
        }
        resolve(null);
      }, 3000);
    });


  }
}
