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
    this.breakpoint = window.innerWidth <= 500 ? 1 : 4;
    this.getUserList();
  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 500 ? 1 : 4;
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
