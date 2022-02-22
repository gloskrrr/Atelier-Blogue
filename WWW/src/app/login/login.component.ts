import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Login } from "../models/auth/login";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.authService.init();
  }

  submit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          this.snackBar.open("Login réussi", "Ok", {duration: 5000});
        },
        error: () => {
          this.snackBar.open("Nom d'utilisateur ou mot de passe invalide", "Ok", {duration: 5000, panelClass: 'panel-error'});//Le panel class sert à mettre le message d'erreur en rouge
        }
      });
    }
  }
}
