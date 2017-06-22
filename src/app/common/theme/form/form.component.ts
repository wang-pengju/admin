import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  options: Array<Option>

  constructor() {}

  ngOnInit() {
    this.options = [
      new Option(1, 'Recommend'),
      new Option(2, 'Angular'),
      new Option(3, 'Vue'),
      new Option(4, 'React'),
      new Option(5, 'Http'),
      new Option(6, 'networkSecurity'),
      new Option(7, 'Git'),
      new Option(8, 'Github'),
      new Option(9, 'Mac'),
      new Option(10, 'Windows'),
      new Option(11, 'Linux'),
      new Option(12, 'Google'),
      new Option(13, 'Chrome'),
      new Option(14, 'Html'),
      new Option(15, 'Css'),
      new Option(16, 'Javascript'),
      new Option(17, 'JQuery'),
      new Option(18, 'NodeJS'),
      new Option(19, 'PHP'),
      new Option(20, 'Python'),
      new Option(21, 'Mongodb'),
      new Option(22, 'Mysql'),
      new Option(23, 'Webpack'),
      new Option(24, 'IDE'),
      new Option(25, 'VR')
    ]
  }

}

export class Option {
  constructor(
    public id: number,
    public value: string
  ) {}
}

export class FormDataBase {
  constructor(
    public title: string,
    public keyword: string,
    public describe: string,
    public updata: string,
    public file: string,
  ){}
}
