import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() info: { title: string; description: string; backgroundUrl: string } =
    {
      title: '',
      description: '',
      backgroundUrl: '',
    };

  constructor() {}

  ngOnInit() {}
}
