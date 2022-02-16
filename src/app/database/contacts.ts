import { database, column, ColumnType, Table } from 'websql-orm';

@database("contacts_db", "contacts")
export class Contacts extends Table {
    @column(ColumnType.NUMBER | ColumnType.PRIMARY)
    id!: number;

    @column(ColumnType.STRING)
    email!: string;

    @column(ColumnType.STRING)
    name!: string;

    @column(ColumnType.STRING)
    PhoneNumber!: string;

    @column(ColumnType.STRING)
    userId!: string;

    @column(ColumnType.STRING)
    image!: string | ArrayBuffer | null;


    setImageAndSave(file: Blob): void {
        this.userId = localStorage.getItem("currentUser") || "" ;
        if(!file){
            this.save();
            return;
        }

        let that = this;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            that.image = reader.result;
            that.save();
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
}