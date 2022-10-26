let arrayEquipo = [];

class MiembroEquipo{
    constructor(codigo, image, nombre,cargo,linkedin, linkedinURL, correo, correoSEND, texto){
        this.codigo = codigo
        this.image = image
        this.nombre = nombre
        this.cargo = cargo
        this.linkedin = linkedin
        this.linkedinURL = linkedinURL
        this.correo = correo
        this.correoSEND = correoSEND
        this.texto = texto
    }
}

let textLorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi perferendis necessitatibus laboriosam vitae quas blanditiis qui atque molestias suscipit quo magni dolores, aliquid nemo adipisci. Animi tenetur in nisi eligendi."

let textJui = "Director financiero y banquero con 40 años de trayectoria, Scotiabank Perú, Banco Santander, Banco Interamericano de Finanzas, Banco Pichincha Perú, con amplia experiencia comercial en el sector bancario, especializado en la introducción de productos financieros, desarrollo de mercados y negocios. Contador Público Bilingüe, con especialización en Finanzas Corporativas y Comercio Exterior"
let juiLnkdnURL = "https://www.linkedin.com/in/javier-jui-azabache-6b1b2256/?trk=public_profile_browsemap&originalSubdomain=pe"
let juiLnkdn = "JavieJuiAzabache@linkedin.com"

let textSarmiento = "Profesional con 30 años de experiencia en el Sistema Financiero Nacional habiendo laborado en empresas tales como Scotiabank Perú SAA, Banco Wiese Sudameris, Adecco, Edpyme Raiz, Banco del Trabajo, Banco del Pais, AFP El Roble y AFP Profuturo, Etc. Líder formador con más de 30 años de experiencia en posiciones gerenciales de Administración y Dirección de Negocios en Empresas Transnacionales y Locales del Sector Financiero y Previsional AFP´s."
let sarmientoLnkdnURL = "https://www.linkedin.com/in/jorge-sarmiento-zorrilla-a85a5149/"
let sarmientoLnkdn = "JorgeSarmientoZorrilla@linkedin.com"

let textFlores = "Profesional con 30 años de experiencia en el Sistema Financiero nacional habiendo laborado en empresas tales como Scotiabank Perú SAA, CrediScotia Financiera SA, BanBif y en la liquidación de Popular y Porvenir Cía. de Seguros y Banco República. Especialista financiero con experiencia en banca empresa, segmento retail, créditos pequeña empresa y microempresa, créditos personales (convenios, vehiculares e hipotecarios) y créditos tarjetas de créditos,  Funciones administrativas, de campo y supervisión como sectorista de créditos, analista de riesgos, proyectos de inversión, gestión de créditos y cobranzas."
let floresLnkdnURL = "https://www.linkedin.com/in/juanfranciscofloreslozano20506764/"
let floresLnkdn = "JuanFranciscoFlores@linkedin.com"

let textPingo = "CEO de APOYO CAPITAL con xperiencia de más de 15 años de experiencia en Banca Peruana, finanzas locales e internaciones. Cuenta con Maestría en Fintech e innovacion Financiera en la Universidad Pontificia de Cataluña – España."
let pingoLnkdnURL = "https://www.linkedin.com/in/pedropingo/?originalSubdomain=pe"
let pingoLnkdn = "PedroPingo@linkedin.com"

let mail = "correo@apoyocapital.pe"
let mailTO = "mailto: correo@apoyocapital.pe"

let m1 = new MiembroEquipo("m001","resources/image/equipoapoyo/javierjui.jpg","Javier Jui Azabache","Gerente Comercial", juiLnkdn,juiLnkdnURL,mail,mailTO,textJui)
let m2 = new MiembroEquipo("m002","resources/image/equipoapoyo/jorgesarmiento.jpg","Jorge Sarmiento Zorrilla","Gerente Comercial",sarmientoLnkdn,sarmientoLnkdnURL,mail,mailTO,textSarmiento)
let m3 = new MiembroEquipo("m003","resources/image/equipoapoyo/juanflores.jpg","Juan Flores Lozano","Jefe de Riesgos",floresLnkdn, floresLnkdnURL,mail,mailTO,textFlores)
let m4 = new MiembroEquipo("m004","resources/image/equipoapoyo/pedropablo.jpg","Pedro Pingo P.","Director",pingoLnkdn,pingoLnkdnURL,mail,mailTO,textPingo)

arrayEquipo.push(m1)
arrayEquipo.push(m2)
arrayEquipo.push(m3)
arrayEquipo.push(m4)

function BuscarMiembro(codigo){
    let item = arrayEquipo.find(x => x.codigo == codigo)
    return item;
}