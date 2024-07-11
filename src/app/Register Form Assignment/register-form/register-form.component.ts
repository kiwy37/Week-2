import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;
  successMessage: string = '';
  showModal: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), this.noNumbersValidator]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordStrengthValidator]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.showModal = true;
    this.successMessage = 'Registration successful!';
    this.registerForm.reset();
    this.registerForm.setValue({
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    });
  }

  closeModal() {
    this.showModal = false;
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password !== confirmPassword ? { passwordMismatch: true } : null;
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleConfirmPasswordVisibility() {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

  noNumbersValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const hasNumber = /\d/.test(control.value);
    return hasNumber ? { 'hasNumber': true } : null;
  }

  passwordStrengthValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    if (!value) return null;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const passwordValid = hasUpperCase && hasLowerCase && hasNumber;
    return !passwordValid ? { 'passwordStrength': true } : null;
  }

  hasUpperCase(value: string): boolean {
    return /[A-Z]/.test(value);
  }

  hasLowerCase(value: string): boolean {
    return /[a-z]/.test(value);
  }

  hasNumber(value: string): boolean {
    return /\d/.test(value);
  }
}
