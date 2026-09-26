import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-course-image',
  imports: [],
  templateUrl: './course-image.html',
  styleUrl: './course-image.scss',
})
export class CourseImage {
  imageUrl = input<string>();
}
