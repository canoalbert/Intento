import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Componente} from "../common/interfaces";
import {Usuario} from "../common/usuarios";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getComponentes(): Observable<Componente[]>{
    return this.http.get<Componente[]>("/assets/data/menu.json")
  }
  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>("/")
  }
}
