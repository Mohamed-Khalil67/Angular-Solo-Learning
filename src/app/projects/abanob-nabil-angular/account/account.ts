import { Component, inject, input, Input, output } from '@angular/core';
import { Logging } from '../services/logging';
import { AccountService } from '../services/accountService';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.html',
  styleUrl: './account.scss',
})
export class Account {
  account = input.required<{ name: string; status: string }>();
  id = input.required<number>();
  // statusChanged = output<{ id: number; newStatus: string }>();
  loggingService = inject(Logging);
  accountService = inject(AccountService);

  onSetTo(status: string) {
    // this.statusChanged.emit({ id: this.id(), newStatus: status });
    this.accountService.updateStatus(this.id(), status);
    this.loggingService.logStatusChange(status);
  }
}
