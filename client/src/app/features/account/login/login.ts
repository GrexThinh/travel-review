import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '../../../core/services/account';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private accountService = inject(AccountService);
  private router = inject(Router);
  loginForm: FormGroup;

  // Signals for password validation visual feedback
  passwordValue = signal('');

  constructor(private fb: FormBuilder) {
    // Use the typed, non-deprecated FormBuilder API without incompatible generics
    this.loginForm = this.fb.nonNullable.group(
      {
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]],
      },
    );
  }

  onPasswordInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.passwordValue.set(input.value);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      this.accountService.login(this.loginForm.value).subscribe({
        next: (response: any) => {
          this.router.navigateByUrl('/');
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
