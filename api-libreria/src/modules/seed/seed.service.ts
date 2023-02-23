import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { ClientesService } from '../clientes/clientes.service';
import  dataUsers  from '../seed/data/users.json';
import  dataClientes  from '../seed/data/clientes.json';
import  dataLibros  from '../seed/data/libros.json';
import { LibrosService } from '../libros/libros.service';


@Injectable()
export class SeedService {
  
  constructor (
    private readonly userService: AuthService,
    private readonly clientesService: ClientesService,
    private readonly librosService: LibrosService
  ){}

  async runData(){
    this.clientesService.deleteAllClientes()
    await this.insertNewClientes()
    //this.userService.deleteAllUsers();
    // this.insertNewUsers();
    await this.insertNewLibros();
    return dataClientes;
  }
  private async insertNewClientes(){
    const insertPromises = [];
    dataClientes.forEach( cliente => {
      insertPromises.push(this.clientesService.create(cliente))
    })
    await Promise.all(insertPromises);
  }
  private async insertNewLibros(){
    const insertPromises = [];
    dataLibros.forEach( libro => {
      insertPromises.push(this.librosService.create(libro))
    })
    await Promise.all(insertPromises);
  }
  private async insertNewUsers(){
    const insertPromises = [];
    dataUsers.forEach( user => {
      insertPromises.push (this.userService.create(user))
    })

    await Promise.all(insertPromises);
  }
}
