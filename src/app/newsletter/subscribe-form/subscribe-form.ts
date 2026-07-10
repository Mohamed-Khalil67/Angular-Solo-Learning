import { Component, computed, effect, signal, ChangeDetectionStrategy } from '@angular/core';
import { form, submit, FormField } from '@angular/forms/signals';
import { initialData, Subscription, subscriptionSchema } from '../subscription';

@Component({
  selector: 'app-subscribe-form',
  imports: [FormField],
  templateUrl: './subscribe-form.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './subscribe-form.css',
})
export class SubscribeForm {
  subscribeMessage = signal('');
  errorMessage = signal('');

  subscribeModel = signal<Subscription>(initialData);
  fullName = computed(() =>
    `${this.subscribeModel().firstName} ${this.subscribeModel().lastName}`.trim(),
  );
  pageHeader = computed(() =>
    this.fullName() ? `Subscribe — ${this.fullName()}` : 'Subscribe to our Newsletter',
  );

  subscribeForm = form(this.subscribeModel, subscriptionSchema);

  cancel() {
    this.subscribeForm().reset(initialData);
  }

  subscribe() {
    this.subscribeMessage.set('');
    submit(this.subscribeForm, () => this.onSubmit());
  }

  async onSubmit() {
    this.subscribeMessage.set(`Thank you for subscribing, ${this.fullName() || 'friend'}!`);
    console.log('Submitting:', this.subscribeForm().value());
    this.subscribeForm().reset(initialData);
  }

  eff = effect(() => console.log('Email:', this.subscribeModel().email));
}
