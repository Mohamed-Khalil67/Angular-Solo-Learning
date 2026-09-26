import { Component, inject, output } from '@angular/core';
import { Logging } from '../services/logging';
import { AccountService } from '../services/accountService';

@Component({
  selector: 'app-new-account',
  imports: [],
  templateUrl: './new-account.html',
  styleUrl: './new-account.scss',
})
export class NewAccount {
  // accountAdded = output<{ name: string; status: string }>();
  loggingService = inject(Logging);
  accountService = inject(AccountService);

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus,
    // });
    // console.log('A server status changed and new status is', accountStatus);
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
