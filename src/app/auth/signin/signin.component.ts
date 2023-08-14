
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SignInComponent {
  username: string = '';
  password: string = '';

  // constructor(private authService: AuthService, private router: Router) {}
  constructor(@Inject(AuthService) private authService: AuthService, private router: Router) {}

  onSignIn(): void {
    this.authService.login(this.username, this.password).subscribe(
      user => {
        if (user) {
          this.router.navigate(['/agent/dashboard']); // Redirect to appropriate dashboard based on role
        }
      },
      error => {
        // Handle error
      }
    );
  }
}
