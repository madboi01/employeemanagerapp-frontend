import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiserverUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getemployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiserverUrl}/employee/all`);
  }

  public addemployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiserverUrl}/employee/add`,employee);
  }

  public updateemployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiserverUrl}/employee/update`,employee);
  }

  public findemployee(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiserverUrl}/employee/find/${employeeId}`);
  }

  public deleteemployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiserverUrl}/employee/delete/${employeeId}`);
  }

}
