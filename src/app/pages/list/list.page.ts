import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../common/usuarios";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  usuarios: Usuario[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.cargarUsuarios()
  }

  private cargarUsuarios() {
    this.dataService.getUsuarios().subscribe(
      {
        next: value => {

        }
      }
    )
  }
}
