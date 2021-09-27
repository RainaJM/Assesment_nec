import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { AddUserComponent } from "./add-user/add-user.component";
import { ListUsersComponent } from "./list-users/list-users.component";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
@NgModule({
  declarations: [AddUserComponent, ListUsersComponent],
  imports: [CommonModule, UserRoutingModule, MatCardModule, MatGridListModule],
})
export class UserModule {}
