import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  signupForm: FormGroup;

  // Signals for password validation visual feedback
  passwordValue = signal('');

  hasMinLength = computed(() => this.passwordValue().length >= 8);
  hasNumber = computed(() => /\d/.test(this.passwordValue()));
  hasSpecialChar = computed(() => /[!@#$%^&*(),.?":{}|<>]/.test(this.passwordValue()));

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onPasswordInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.passwordValue.set(input.value);
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Submitted', this.signupForm.value);
      // Here you would typically handle the API call
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}
