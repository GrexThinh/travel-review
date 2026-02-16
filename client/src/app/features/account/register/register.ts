import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../../core/services/account';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private accountService = inject(AccountService);
  private router = inject(Router);
  signupForm: FormGroup;

  // Signals for password validation visual feedback
  passwordValue = signal('');

  hasMinLength = computed(() => this.passwordValue().length >= 8);
  hasNumber = computed(() => /\d/.test(this.passwordValue()));
  hasSpecialChar = computed(() => /[!@#$%^&*(),.?":{}|<>]/.test(this.passwordValue()));

  passwordMatchValidator: ValidatorFn = (
    control: AbstractControl<any, any>,
  ): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  };

  constructor(private fb: FormBuilder) {
    // Use the typed, non-deprecated FormBuilder API without incompatible generics
    this.signupForm = this.fb.nonNullable.group(
      {
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator },
    );
  }

  onPasswordInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.passwordValue.set(input.value);
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Submitted', this.signupForm.value);
      this.accountService.register(this.signupForm.value).subscribe({
        next: (response: any) => {
          this.router.navigateByUrl('/');
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}
