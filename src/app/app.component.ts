import { Component } from '@angular/core';

import { Book } from './model/Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    public bookList: Book[] = [];

    onBookRegistered(book: Book): void {
        this.bookList.push(book);
    }

 }
