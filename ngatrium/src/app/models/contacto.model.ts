export interface Grupo {
    id: number;
    nombre: string;
    descripcion: string;
}

export interface Sector {
    id: number;
    nombre: string;
    descripcion: string;
}

export class Contacto {
    constructor(
        public name: string = '',
        public lastname: string = '',
        public email: string = '',
        public phoneNumber: string = '',
        public grupo: Grupo = {
            id: 0,
            nombre: '',
            descripcion: ''
        },
        public sector: Sector = { 
            id: 0,
            nombre: '',
            descripcion: ''},
        public aficiones: Array<any> = [],
        public isAlumno: boolean = false
        ) {}
}