// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'my-app';
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  loggedIn: boolean = false;
  loggedInUser: { userID: string } = { userID: '' };

  onLoginSuccess(userData: { userID: string }) {
    this.loggedIn = true;
    this.loggedInUser.userID = userData.userID;
    
  }
}
