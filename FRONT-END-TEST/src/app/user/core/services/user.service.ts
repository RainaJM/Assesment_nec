import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer key3GnfHvdYoWedr5",
  }),
};
@Injectable({
  providedIn: "root",
})
export class UserService {
  baseUrl = "https://api.airtable.com/v0/appzoLh5b0y8mV3WF/";
  constructor(private http: HttpClient) {}

  getUsers(url) {
    return this.http.get(this.baseUrl + url, httpOptions);
  }
  addUser(url, body) {
    return this.http.post(this.baseUrl + url, body, httpOptions);
  }
}
