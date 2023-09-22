import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getComponentes(): Observable<Componente[]>{
    return this.http.get<Componente[]>("/assets/data/menu.json")
  }
}
