import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private authService: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required)
    });
  }

  submit(): void {
    if (this.registerForm.valid) {
      /*let cred = new Login()
      cred.username = this.loginForm.get('username')?.value;
      cred.password = this.loginForm.get('password')?.value;
      this.authService.login(cred)
      Ces 4 lignes équivalent à la ligne ci dessous
      */

      this.authService.login(this.registerForm.value).subscribe({
        next: () => {
          this.snackBar.open("Inscription réussie", "Ok", {duration: 5000});
        },
        error: () => {
          this.snackBar.open("Insciption non réussie", "Ok", {duration: 5000, panelClass: 'panel-error'});//Le panel class sert à mettre le message d'erreur en rouge
        }
      });
    }
  }

}
