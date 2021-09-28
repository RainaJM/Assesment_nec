import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../core/services/user.service";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent implements OnInit {
  registerForm: FormGroup;
  userData;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      dob: [""],
      gender: [""],
    });
  }
  onSubmit() {
    this.userData = {
      fields: {
        "First Name": this.registerForm.value.firstName,
        "Last Name": this.registerForm.value.lastName,
        "Date of Birth": this.registerForm.value.dob,
        Status: "Active",
        Gender: this.registerForm.value.gender,
      },
    };
    this.userService
      .addUser("Angular-Test-Users", this.userData)
      .subscribe((res) => {
        if (res) {
          this.router.navigate(["../users"]);
        }
      });
  }
}
