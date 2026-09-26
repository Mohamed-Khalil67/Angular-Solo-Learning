import {
  Component,
  signal,
  ChangeDetectionStrategy,
  ViewChild,
  viewChild,
  ElementRef,
  AfterViewInit,
  viewChildren,
  QueryList,
  ViewChildren,
  ViewEncapsulation,
  OnInit,
  inject,
} from '@angular/core';
import { Header } from './header/header';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCard } from './course-card/course-card';
import { COURSES } from './data/db-data';
import { CourseImage } from './course-image/course-image';
import { Highlighted } from './directives/highlighted';
import { Comp1 } from './comp1/comp1';
import { Comp2 } from './comp2/comp2';
import { ServerElement } from './server-element/server-element';
import { Server } from './server/server';
import { Core } from './core/core';
import { NewAccount } from './new-account/new-account';
import { Account } from './account/account';
import { AccountService } from './services/accountService';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    CommonModule,
    FormsModule,
    CourseCard,
    CourseImage,
    Highlighted,
    Comp1,
    Comp2,
    ServerElement,
    Server,
    Core,
    NewAccount,
    Account,
  ],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
})
export class App implements AfterViewInit, OnInit {
  accountService = inject(AccountService);
  // @ViewChild(CourseCard) card: CourseCard;
  card = viewChild<CourseCard>(CourseCard);
  // cardTwo = viewChild('cardTwoRef', { read: ElementRef });
  // container = viewChild('container');
  // @ViewChildren(CourseCard) cards!: QueryList<CourseCard>; // when reading a list of type CourseCard component in the html
  @ViewChildren('container', { read: ElementRef }) cards!: QueryList<ElementRef>; // Element ref referencing to component Card
  courses = COURSES;
  isActive = true;
  accounts: any = [];

  constructor() {
    // console.log('constructor card', this.card()); // this line will give undefined as the app-card in html wasn't rendered yet.
  }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit card', this.card()); // the view has been initialized and it worked
  }

  onCourseSelected(course: any) {
    console.log('On Course Selected');
    console.log(course);
    console.log('card is', this.card());
    // console.log('card two ', this.cardTwo());
    // console.log('container', this.container());
    // Calling cards() returns a plain JavaScript array: CourseCard[]
    console.log('Array of cards:', this.cards);
  }

  serverElements: any = [{ type: 'server', name: 'Test server', content: 'server name' }];
  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
  onBlueprintAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'bleuprint',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed !!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  // onToggle(isHighlighted: boolean) {
  //   console.log(isHighlighted);
  // }
}
