import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent implements OnInit {

  placeholder: string = 'Password Length';
  passwordLength: number = 0;
  includeSymbols: boolean = false;
  includeNumbers: boolean = false;
  includeLowerCase: boolean = false;
  includeUpperCase: boolean = false;
  generatedPassword: string;
  chars: any;

  constructor() {
    this.generatedPassword = '';
    this.chars = {
      symbols: '!@#$%^&*()+=?><',
      numbers: '1234567890',
      lower: 'zxcvbnmasdfghjklqwertyuiop',
      upper: 'QWERTYUIOPASDFGHJKLZXCVBNM'
    }
  }

  ngOnInit(): void {
  }

  generatePassword = () => {
    let qualChars = ''
    if (this.includeSymbols) qualChars += this.chars.symbols
    if (this.includeNumbers) qualChars += this.chars.numbers
    if (this.includeLowerCase) qualChars += this.chars.lower
    if (this.includeUpperCase) qualChars += this.chars.upper
    while (this.generatedPassword.length != this.passwordLength) {
      this.generatedPassword += qualChars.charAt(Math.floor(Math.random() * ((qualChars.length - 1) - 0 + 1) + 0))
    }
  }

  resetForm = () => {
    this.generatedPassword = ''
    this.passwordLength = 0;
    this.includeSymbols = false;
    this.includeNumbers = false;
    this.includeLowerCase = false;
    this.includeUpperCase = false;
  }
}
