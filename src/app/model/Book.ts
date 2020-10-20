export class Book {

    public title: string;
    public author: string;
    public pageNumber: string;
    public id: string;

    constructor(props: Partial<Book>) {
        Object.assign(this, props);
    }

}
