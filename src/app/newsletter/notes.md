# Notes

subForm: FieldTree for the entrie form
subForm.email: FieldTree for the email field

- FieldTree represents a tree of fields in a form structure matching the signal

- Used to: Navigate from hierarchy, Bind to input elements, [field]

subForm(): FieldState for the entire form
subForm.email(): FieldState for the email field

- FieldState holds: interaction state, validation erros, visibility, current field value as signals!

- Provides: Reactive signals that track real-time state for display or creating derived state

| Action / Description                                            | Code                                             |
| :-------------------------------------------------------------- | :----------------------------------------------- |
| **Access the form's FieldState**<br>Read the value signal       | `this.subForm().value();`                        |
| **Access the form's FieldState**<br>Check form validation state | `<button [disabled]="subForm().invalid()">`      |
| **Binds field FieldTree to**<br>HTML control that edits it      | `<input type="email" [field]="subForm.email" />` |
| **Access field's FieldState**<br>Check field validation state   | `@if (subForm.email().invalid()) { }`            |
| **Access field's FieldState**<br>Read validation errors         | `subForm.email().errors()`                       |

# Form Schema Documentation

This document describes the core APIs and patterns used for managing reactive form states, values, and conditional validation logic[cite: 1].

## Core Concepts

### `rootPath`

- **Definition**: Points directly to the absolute root of the form model (which is the `subscribeModel` signal in this case)[cite: 1].
- **Usage**: Used to drill down and access specific fields from anywhere within the schema hierarchy (e.g., `rootPath.email`)[cite: 1].

### `valueOf(path)`

- **Definition**: A getter function that takes a schema path and returns the current field value at that specified location[cite: 1].
- **Behavior**:
  - Automatically reactive—it recalculates and updates instantly as the form state changes[cite: 1].
  - Versatile—works seamlessly for both single individual fields and grouped fields[cite: 1].

### `applyWhen(condition, rules)`

- **Definition**: A conditional engine that applies a specific condition to a set of validation rules or a set of fields[cite: 1].
- **Usage**: Ideal for setting dynamic constraints, conditions on validation, or other reactive form logic[cite: 1].

---

## Example Usage

Below is a simple example demonstrating how these APIs interact to create a conditional validation schema:

```typescript
const formSchema = {
  email: {
    validators: [
      // Apply the required validator conditionally
      applyWhen(
        // Condition: Check if a root-level checkbox is checked
        () => valueOf(rootPath.isSubscribed) === true,

        // Rules: The validation rules to enforce if the condition is true
        [Validators.required],
      ),
    ],
  },
};
```

- when apply a rule when condition is true

- applyWhen() apply a condition to multiple rules or fields
