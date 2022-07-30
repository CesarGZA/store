import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  img: string = '';
  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('change just img =>',this.img);
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();

  imageDefault = "../../../assets/images/default-image.jpg"


  constructor() { }

  ngOnInit(): void {
  }
  imgError(){
    this.img = this.imageDefault
  }
  imgLoader(){
    console.log('log hijo')
    this.loaded.emit(this.img);
  }
}
