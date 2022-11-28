import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'filter-textbox',
    template: `
        Filter: <input type="text" />
    `
})
export class FilterTextboxComponent implements OnInit {
    
    constructor() {}
    
    ngOnInit() {
        
    }
}