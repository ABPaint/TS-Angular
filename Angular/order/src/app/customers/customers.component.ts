import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
    title: string;
    people: any[];
    
    constructor() {}
    
    ngOnInit() {
        this.title = 'Customers';
        this.people = [
            { id: 1, name: 'ben John', city: 'Atlanta', orderTotal: 7.99, customerSince: new Date(2014, 7, 10) },
            { id: 2, name: 'Jim Jacob', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
            { id: 3, name: 'Michelle Jingleheimer ', city: 'Houston', orderTotal: 199.99, customerSince: new Date(2002, 10, 31)},
            { id: 4, name: 'Jim schmidt ', city: 'New York', orderTotal: 599.99, customerSince: new Date(2012, 10, 31)},
        ];
    }
}