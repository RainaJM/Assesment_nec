import { Component, OnInit } from "@angular/core";
import { User } from "../core/models/user";
import { UserService } from "../core/services/user.service";

@Component({
  selector: "app-list-users",
  templateUrl: "./list-users.component.html",
  styleUrls: ["./list-users.component.scss"],
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];
  breakpoint: number;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.onResize(null);
    this.getUserList();
  }

  onResize(event) {
    if (window.innerWidth <= 500) {
      this.breakpoint = 1;
    } else if (window.innerWidth <= 1440 && window.innerWidth > 500) {
      this.breakpoint = 4;
    } else {
      this.breakpoint = 6;
    }
  }

  private getUserList() {
    this.userService.getUsers("Angular-Test-Users").subscribe((res) => {
      res["records"].map((record) => {
        this.users.push({
          firstName: record.fields["First Name"],
          lastName: record.fields["Last Name"],
          dob: record.fields["Date of Birth"],
          gender: record.fields["Gender"],
          status: record.fields["Status"],
        });
      });
    });
  }
}
