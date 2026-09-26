import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  contentChild,
  ContentChildren,
  ElementRef,
  Input,
  input,
  output,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ICourse } from '../interfaces/course';
import { NgClass, NgStyle, NgIf, NgTemplateOutlet } from '@angular/common';
import { CourseImage } from '../course-image/course-image';
import { BasicHighLight } from '../directives/basic-high-light';

@Component({
  selector: 'app-course-card',
  imports: [NgClass, NgStyle, NgIf, NgTemplateOutlet, BasicHighLight],
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss',
})
export class CourseCard implements AfterViewInit, AfterContentInit {
  course = input.required<ICourse>();
  courseSelected = output<ICourse>();
  @Input() noImageTpl!: TemplateRef<any>;
  // @ViewChild('courseImage') image: any; // can't use view child withen content as child
  // @ContentChild('courseImage') image: any; // this is accessing from the other way like content from parent

  @ContentChild(CourseImage) image!: CourseCard;
  @ContentChildren(CourseImage, { read: ElementRef }) images!: QueryList<ElementRef>;
  // when u want to use elemen reference instead of the component

  ngAfterViewInit(): void {
    console.log('course image', this.image);
  }

  ngAfterContentInit(): void {
    console.log('course images', this.images);
  }

  onCourseViewed() {
    console.log('Card View Coruse button Clicked');
    this.courseSelected.emit(this.course()); // resending the same data that the parent has sent
  }

  cardClasses() {
    if (this.course().category == 'BEGINNER') {
      return 'beginner';
    }
    return '';
  }
}
