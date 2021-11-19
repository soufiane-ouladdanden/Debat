import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = 'Angular';
  imageObject = [{
      image: '../../assets/images/logo.jpg',
      thumbImage: '../../assets/images/logo.jpg',
      title: 'tiiitre'
  }, {
      image: '../../assets/images/debat2.jpg',
      thumbImage: '../../assets/images/debat2.jpg',
      title: 'tiiitre'
  }, {
      image: '../../assets/images/blog2.png',
      thumbImage: '../../assets/images/blog2.png',
      title: 'tiiitre'
  },{
      image: '../../assets/images/logo.jpg',
      thumbImage: '../../assets/images/logo.jpg',
      title: 'tiiitre'
  }, {
      image: '../../assets/images/blog2.png',
      thumbImage: '../../assets/images/blog2.png'
  }, {
      image: '../../assets/images/debat2.jpg',
      thumbImage: '../../assets/images/debat2.jpg',
      title: 'tiiitre.'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
