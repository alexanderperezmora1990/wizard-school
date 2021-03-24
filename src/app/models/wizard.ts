export class WizardModel {
    name: string;
    patronus: string;
    age: string;
    image: string;

    constructor(data ?) {
        const date = new Date();
        if (data) {
            this.name = data.name;
            this.patronus = (data.patronus) ? (data.patronus) : 'Desconocido';
            this.age = (data.yearOfBirth) ? (Number(date.getFullYear()) - Number(data.yearOfBirth)).toString() : 'Desconocida';
            this.image = data.image;
        }
    }
}
