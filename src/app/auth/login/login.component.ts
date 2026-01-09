import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonService } from 'src/app/shared/service/common.service';
import { interval, Subscription } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;

    public form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
    });

    public otpForm = this.fb.group({
        otp: this.fb.array([])
    });

    private timerSub!: Subscription;
    public canResend: boolean = false;
    public isLoggedIn: boolean = false;
    public timer: number = 30;

    constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private commonService: CommonService) { }

    ngOnInit(): void {
        this.createOtpControls();
        this.startTimer();
    }

    ngOnDestroy(): void {
        this.timerSub?.unsubscribe();
    }

    private createOtpControls(): void {
        for (let i = 0; i < 6; i++) {
            this.otpArray.push(
                this.fb.control('', [
                    Validators.required,
                    Validators.pattern('[0-9]')
                ])
            );
        }
    }

    get otpArray(): FormArray {
        return this.otpForm.get('otp') as FormArray;
    }

    get otpControls() {
        return this.otpArray.controls;
    }

    private startTimer(): void {
        this.canResend = false;
        this.timer = 30;
        this.timerSub?.unsubscribe();
        this.timerSub = interval(1000).subscribe(() => {
            this.timer--;
            if (this.timer === 0) {
                this.canResend = true;
                this.timerSub.unsubscribe();
            }
        });
    }

    public onInput(event: Event, index: number): void {
        const input = event.target as HTMLInputElement;
        if (input.value && index < this.otpControls.length - 1) {
            this.otpInputs.get(index + 1)?.nativeElement.focus();
        }
    }

    public onBackspace(index: number): void {
        if (!this.otpControls[index].value && index > 0) {
            this.otpInputs.get(index - 1)?.nativeElement.focus();
        }
    }

    public resendOtp(): void {
        if (!this.canResend) return;
        this.otpForm.reset();
        this.otpInputs.first?.nativeElement.focus();
        this.startTimer();

        // Trigger generate new OTP API call to resend OTP
    }

    public submit() {
        if (this.form.invalid) return;
        // this.auth.login(this.form.value as any).subscribe(() => {
        this.commonService.updateUser('AuthenticatedUser');
        this.isLoggedIn = true;
        // });
        this.startTimer();
    }

    public verifyOtp(): void {
        if (this.otpForm.invalid) return;
        localStorage.setItem('user', 'AuthenticatedUser');
        this.router.navigate(['/dashboard']);

        // const otp = this.otpArray.value.join('');
        // OTP Verification API call here
    }
}
