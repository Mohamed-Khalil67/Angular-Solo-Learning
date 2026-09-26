import { HttpClient } from '@angular/common/http';
import { Service } from '@angular/core';

@Service()
export class Logging {
  #http!: HttpClient;

  logStatusChange(status: string) {
    console.log('A server status changed, new status is : ', status);
  }
}
