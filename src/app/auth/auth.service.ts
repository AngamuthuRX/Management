import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AuthService {

    private api = environment.apiUrl + '/auth';

    constructor(private http: HttpClient) { }

    login(data: { email: string; password: string }) {
        return this.http.post<any>(`${this.api}/login`, data).pipe(
            tap(res => localStorage.setItem('token', res.token))
        );
    }

    register(data: any) {
        return this.http.post(`${this.api}/register`, data);
    }

    logout() {
        localStorage.removeItem('token');
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }
}
