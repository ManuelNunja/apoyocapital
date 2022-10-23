let arrayEquipo = [];

class MiembroEquipo{
    constructor(codigo, image, nombre,cargo,linkedin,correo,texto){
        this.codigo = codigo
        this.image = image
        this.nombre = nombre
        this.cargo = cargo
        this.linkedin = linkedin
        this.correo = correo
        this.texto = texto
    }
}

let textLorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi perferendis necessitatibus laboriosam vitae quas blanditiis qui atque molestias suscipit quo magni dolores, aliquid nemo adipisci. Animi tenetur in nisi eligendi."

let m1 = new MiembroEquipo("m001","resources/image/equipoapoyo/javierjui.jpg","Javier Jui Azabache","Gerente Comercial","cuenta1@linkedin.com","cuenta1@apoyocapital.com","Director financiero y banquero con 40 años de trayectoria, Scotiabank Perú, Banco Santander, Banco Interamericano de finanzas, Banco Pichincha Perú, con amplia experiencia comercial en el sector bancario, especializado en la introducción de productos financieros, desarrollo de mercados y negocios. Contador Público Bilingüe, con especialización en Finanzas Corporativas y Comercio Exterior")
let m2 = new MiembroEquipo("m002","resources/image/equipoapoyo/jorgesarmiento.jpg","Jorge Sarmiento Zorrilla","Gerente Comercial","cuenta2@linkedin.com","cuenta2@apoyocapital.com", textLorem + textLorem)
let m3 = new MiembroEquipo("m003","resources/image/equipoapoyo/juanflores.jpg","Juan Flores Lozano","Jefe de Riesgos","cuenta3@linkedin.com","cuenta3@apoyocapital.com", textLorem)
let m4 = new MiembroEquipo("m004","resources/image/equipoapoyo/pedropablo.jpg","Pedro Pingo P.","Director","cuenta4@linkedin.com","cuenta4@apoyocapital.com", textLorem + textLorem)

arrayEquipo.push(m1)
arrayEquipo.push(m2)
arrayEquipo.push(m3)
arrayEquipo.push(m4)

function BuscarMiembro(codigo){
    let item = arrayEquipo.find(x => x.codigo == codigo)
    return item;
}