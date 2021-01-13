import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isSubscribed: boolean;
  emailForm: FormGroup;
  isFormValid: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.isSubscribed = false;
    this.emailForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    console.log(this.emailForm);
    let postData = this.emailForm.value;
    this.http
      .post(
        'https://sportfolio-44e93-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
        this.isSubscribed = true;
      });
    this.emailForm.reset();
  }
  isValid() {
    if (this.emailForm.status == 'VALID' || this.emailForm.touched == false) {
      return true;
    } else {
      return false;
    }
  }
}