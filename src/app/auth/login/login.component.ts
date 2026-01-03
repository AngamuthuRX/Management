import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private commonService: CommonService) { }

  submit() {
    if (this.form.invalid) return;
    // this.auth.login(this.form.value as any).subscribe(() => {
    localStorage.setItem('user', 'AuthenticatedUser');
      this.commonService.updateUser('AuthenticatedUser');
      this.router.navigate(['/dashboard']);
    // });
  }
}