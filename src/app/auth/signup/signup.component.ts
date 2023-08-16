// auth/signup.component.ts
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/shared/role.enum';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignUpComponent {
  username: string = '';
  password: string = '';
  role: UserRole = UserRole.Agent;

  // constructor(private authService: AuthService, private router: Router) {}
  constructor(@Inject(AuthService) private authService: AuthService, private router: Router) {}

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
