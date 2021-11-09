import { IListaFilmes } from './../models/iFilme.API.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  lingua = 'pt-BR';
  regiao = 'BR';

  private apiUrl = 'https://api.themoviedb.org/3/';
  private key = '?api_key=cc1d6c7e28db6583fe5eb1238742470c';
  constructor(
    private http: HttpClient,
    public toastController: ToastController
  ) { }

  buscarFilmes(busca: string): Observable<IListaFilmes> {
    const url = `${this.apiUrl}search/movie${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;
    return this.http.get<IListaFilmes>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao Consultar a API.',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}
