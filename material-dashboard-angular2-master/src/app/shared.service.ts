import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UniversiteModule } from './universite/universite.module';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private baseUrl = 'http://localhost:8089/spring/universite';

  constructor(private http: HttpClient) { }

  getAllUniversites(): Observable<UniversiteModule[]> {
    return this.http.get<UniversiteModule[]>(`${this.baseUrl}/getAllUniversite`);
  }

  getUniversiteById(id: number): Observable<UniversiteModule> {
    return this.http.get<UniversiteModule>(`${this.baseUrl}/getbyidUniversite/${id}`);
  }

  addUniversite(universite: UniversiteModule): Observable<UniversiteModule> {
    return this.http.post<UniversiteModule>(`${this.baseUrl}/add-universite`, universite);
  }

  removeUniversite(idUniversite: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/remove-universite/${idUniversite}`);
  }

  modifyUniversite(idUniversite: number, universite: UniversiteModule): Observable<Object> {
    return this.http.put(`${this.baseUrl}/modify-universite/${idUniversite}`, universite);
  }
}
