function CalculateYear() {
    let containerYears = document.getElementById("year").value;
    let containerMonths = document.getElementById("month").value;
    let containerDays = document.getElementById("day").value;

    const fecha = new Date();
    if (containerYears > fecha.getFullYear()) {
        alert("Error con el año");
    } else if (containerMonths > 12 && containerMonths.length < 12) {
        alert("Error con el mes");
        this.containerMonths = this.containerMonths.slice(0,12);
    } else if (containerDays > 31 ){
        alert("Error con el dia");
    } else {
        let resultYear = fecha.getFullYear() - containerYears;
            /* const monthNow = fecha.getMonth() + 1;  */ //Se pone "+ 1" para normalizar los meses (sin ello seria 0-11);
        let resultMonth = fecha.getMonth() + 1 - containerMonths;
        let resultDay = fecha.getDate() - containerDays;

        if (resultDay < 0) {
            resultMonth--;
            resultDay += new Date(containerYears, containerMonths, 0).getDate();
        }

        if (resultMonth < 0) {
            resultYear--;
            resultMonth += 12;
        }
        document.getElementById('numberYears').innerHTML = resultYear;
        document.getElementById('numberMonths').innerHTML = resultMonth;
        document.getElementById('numberDays').innerHTML = resultDay;
    }
}