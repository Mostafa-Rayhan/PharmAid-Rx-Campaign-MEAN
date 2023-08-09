// auth/signup.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { UserRole } from '../shared/role.enum';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignUpComponent {
  username: string = '';
  password: string = '';
  role: UserRole = UserRole.Agent;

  constructor(private authService: AuthService, private router: Router) {}

  onSignUp(): void {
    this.authService.signUp(this.username, this.password, this.role).subscribe(
      () => {
        this.router.navigate(['/auth/signin']); // Redirect to sign-in page
      },
      error => {
        // Handle error
      }
    );
  }
}
