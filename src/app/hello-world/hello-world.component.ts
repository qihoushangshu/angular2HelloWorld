import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
  <p>
    hello-world work inline
  </p>
  `
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
