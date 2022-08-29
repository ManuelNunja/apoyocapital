const arrayMonthS = ["Enero", "Fecbrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"]
const arrayDayS = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
const arrayMonthE = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const arrayDayE = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

class DateFormat {
    constructor(FormatISO8601, FormatUSASHort, FormatUSALarge, FormatUKSHort, FormatUKLarge, FormatJapan, FormatShort, FormatString, FormatUTCString) {
        this.FormatISO8601 = FormatISO8601
        this.FormatUSASHort = FormatUSASHort
        this.FormatUSALarge = FormatUSALarge
        this.FormatUKSHort = FormatUSASHort
        this.FormatUKLarge = FormatUSALarge
        this.FormatJapan = FormatJapan
        this.FormatShort = FormatShort
        this.FormatString = FormatString
        this.FormatUTCString = FormatUTCString
    }
    get compareNow() {
        let result;
        let dato = new Date(this.FormatISO8601);
        let utcDay = dato.getUTCDate()
        let utcMnt = dato.getUTCMonth()
        let utcYear = dato.getUTCFullYear()

        let now = new Date()
        let utcDayX = now.getUTCDate()
        let utcMntX = now.getUTCMonth()
        let utcYearX = now.getUTCFullYear()

        let dateNow = new Date(utcYearX, utcMntX, utcDayX, 0, 0, 0, 0);
        let dateCompare = new Date(utcYear, utcMnt, utcDay, 0, 0, 0, 0);

        result = (dateCompare.getTime() > dateNow.getTime())
        if ((dateCompare.getTime() == dateNow.getTime())) { result = "equal" }
        return result
    }
    get getTime() {
        let result;
        let dato = new Date(this.FormatISO8601);
        let utcDay = dato.getUTCDate()
        let utcMnt = dato.getUTCMonth()
        let utcYear = dato.getUTCFullYear()

        let newDate = new Date(utcYear, utcMnt, utcDay, 0, 0, 0, 0);
        return (newDate.getTime())
    }
    get getDiference(){
        let result;
        let days = -1;
        let currentDate = new Date();

        let utcDay = currentDate.getUTCDate()
        let utcMnt = currentDate.getUTCMonth()
        let utcYear = currentDate.getUTCFullYear()

        let newDate = new Date(utcYear, utcMnt, utcDay, 0, 0, 0, 0);

        let difference = Math.abs(this.getTime - newDate.getTime());
        days = Math.round(difference/(1000 * 3600 * 24));
        return (days);
    }
}

function FormatDate(pDate) {
    let fechaDato = pDate;

    let year = fechaDato.substring(6, 10);
    let month = fechaDato.substring(3, 5);
    let day = fechaDato.substring(0, 2);

    let dateFormat = new Date(year + "-" + month + "-" + day);

    let utcDayofWeek = dateFormat.getUTCDay()
    let utcDay = dateFormat.getUTCDate()
    let utcMnt = dateFormat.getUTCMonth()
    let utcYear = dateFormat.getUTCFullYear()

    let FormatISO8601 = (year + "-" + month + "-" + day);
    let FormatUSASHort = (month + "-" + day + "-" + year)
    let FormatUSALarge = arrayDayE[utcDayofWeek] + ", " + arrayMonthE[utcMnt] + " " + utcDay + ", " + utcYear
    let FormatUKSHort = (day + "-" + month + "-" + year)
    let FormatUKLarge = utcDay + " " + arrayMonthE[utcMnt] + " " + utcYear
    let FormatJapan = (year.substring(2, 4) + "-" + month + "-" + day)
    let FormatShort = pDate
    let FormatString = arrayDayS[utcDayofWeek] + ", " + utcDay + " de " + arrayMonthS[utcMnt] + " de " + utcYear;
    let FormatUTCString = dateFormat.toUTCString();

    let classDateFormat = new DateFormat(FormatISO8601, FormatUSASHort, FormatUSALarge, FormatUKSHort, FormatUKLarge, FormatJapan, FormatShort, FormatString, FormatUTCString)

    return (classDateFormat);
}