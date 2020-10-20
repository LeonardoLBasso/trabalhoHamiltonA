import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/model/Book';

@Component({
    selector: 'book-insert',
    templateUrl: './book-insert.component.html',
    styleUrls: ['./book-insert.component.css'],
})
export class BookInsertComponent{

    @Output() bookRegister = new EventEmitter();

    public title: string;
    public author: string;
    public pageNumber: string;
    public id: string;

    onRegisterBook(): void {
        const book: Book = new Book({
            title: this.title,
            author: this.author,
            pageNumber: this.pageNumber,
            id: this.id,
        })

        this.bookRegister.emit(book);
        Object.assign(this, {
            title: '',
            author: '',
            pageNumber: '',
            id: '',
        })
    }

}
