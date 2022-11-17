import { Component } from "@angular/core";

@Component({
    selector: 'demo',
    template: '<h2>dog facts {{title}}</h2>',  //html file
})

export class AppDemo {
    title = "Application"
}