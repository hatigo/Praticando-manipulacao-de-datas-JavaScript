const hora = new Date(2021,3,26,7,59);


function taAberto(hora) {
    if (hora.getHours() >= 8 && hora.getHours() <= 18 && hora.getDay() > 0 && hora.getDay() < 6) {
        console.log(true);
    } else {
        console.log(false);
    }

}

taAberto(hora);