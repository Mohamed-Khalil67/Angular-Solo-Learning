import {
  applyWhen,
  email,
  max,
  maxLength,
  min,
  minLength,
  required,
  schema,
} from '@angular/forms/signals';

export interface Subscription {
  firstName: string;
  lastName: string;
  yearsAsFan: number;
  sendViaEmail: boolean;
  email: string;
  sendViaText: boolean;
  phone: string;
}

export const initialData: Subscription = {
  firstName: '',
  lastName: '',
  yearsAsFan: NaN,
  sendViaEmail: false,
  email: '',
  sendViaText: false,
  phone: '',
};

export const subscriptionSchema = schema<Subscription>((rootPath) => {
  // ── Years as a fan ────────────────────────────────────────────────────────
  min(rootPath.yearsAsFan, 0, { message: 'Years cannot be negative' });
  max(rootPath.yearsAsFan, 100, { message: 'Please enter a valid number of years' });

  // ── Email format always validated when a value is present ─────────────────
  email(rootPath.email, { message: 'Please enter a valid email address' });
  minLength(rootPath.email, 6, { message: 'Email must be at least 6 characters' });

  // ── Email required when "Send via Email" is checked (cross-field) ─────────
  applyWhen(
    rootPath,
    (ctx) => ctx.value().sendViaEmail,
    (s) => {
      required(s.email, { message: 'Email is required when sending via email' });
    },
  );

  // ── Phone length validated when a value is present ────────────────────────
  applyWhen(
    rootPath.phone,
    (ctx) => ctx.value().length > 0,
    (phonePath) => {
      minLength(phonePath, 7, { message: 'Phone number must be at least 7 characters' });
      maxLength(phonePath, 15, { message: 'Phone number must be at most 15 characters' });
    },
  );

  // ── Phone required when "Send via Text" is checked (cross-field) ──────────
  applyWhen(
    rootPath,
    (ctx) => ctx.value().sendViaText,
    (s) => {
      required(s.phone, { message: 'Phone number is required when sending via text' });
    },
  );
});
