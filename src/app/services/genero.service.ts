import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IListaGenero } from '../models/genero.model';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  lingua = 'pt-BR';
  private apiUrl = 'https://api.themoviedb.org/3/';
  private key = '?api_key=cc1d6c7e28db6583fe5eb1238742470c';

  constructor(
    private http: HttpClient,
    public toastController: ToastController
  ) { }

  buscarGeneros(): Observable<IListaGenero> {
    const url = `${this.apiUrl}genre/movie/list${this.key}&language=${this.lingua}`;
    return this.http.get<IListaGenero>(url).pipe(
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
