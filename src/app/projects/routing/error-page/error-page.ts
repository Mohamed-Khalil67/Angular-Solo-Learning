import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-error-page',
  styleUrl: './error-page.scss',
  templateUrl: './error-page.html',
})
export class ErrorPage implements OnInit {
  errorMessage: string = '';
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.errorMessage = this.activatedRoute.snapshot.data['message']
    this.activatedRoute.data.subscribe((data:Data) => {
      this.errorMessage = data['message'];
    })
  }
}
