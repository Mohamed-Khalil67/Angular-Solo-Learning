import { Service } from '@angular/core';

@Service()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'Active',
    },
    {
      name: 'Test account',
      status: 'inactive',
    },
    {
      name: 'Hidden account',
      status: 'unknown',
    },
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
  }

  updateStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
  }
}
