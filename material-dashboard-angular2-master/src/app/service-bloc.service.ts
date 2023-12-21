// bloc.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bloc } from './Bloc/bloc.module';




@Injectable({
  providedIn: 'root',
})
export class BlocService {
  private baseUrl = 'http://localhost:8089/spring/bloc';
 
  constructor(private http: HttpClient) { }

  getAllBlocs(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${this.baseUrl}/retrieve-all-blocs`);
  }

  getBlocById(id: number): Observable<Bloc> {
    return this.http.get<Bloc>(`${this.baseUrl}/retrieve-bloc/${id}`);
  }

  addBloc(bloc: Bloc): Observable<Bloc> {
    return this.http.post<Bloc>(`${this.baseUrl}/add-bloc`, bloc);
  }

  removeBloc(idBloc: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/remove-bloc/${idBloc}`);
  }

  modifyBloc(idBloc: number, bloc: Bloc): Observable<Object>{
    
    return this.http.put(`${this.baseUrl}/modify-bloc/${idBloc}`,bloc);
  }
 
}
