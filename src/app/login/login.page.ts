import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  senha: string;

  constructor(public toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  login() {
    if(this.email === 'admin@admin.com' && this.senha === 'admin') {
      this.router.navigateByUrl('/tabs/tab1');
      this.presetToast('Seja bem Vindo', 'success');
    }else {
      this.presetToast('ERRO, usuário e/ou senha inválidos!', 'danger');
    }
  }

  async presetToast(texto: string, cor: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 2000,
      color: cor,
      position: 'top'
    });
    toast.present();
    return null;
  }
}
