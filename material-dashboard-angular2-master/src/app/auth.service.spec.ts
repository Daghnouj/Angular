// authService.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'your_api_url';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    // Assuming your API returns user information, including the role
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }
}
