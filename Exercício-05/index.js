const hora = new Date(2021,3,24,9,30);


function taAberto(hora) {
    if (hora.getHours() >= 8 && hora.getHours() <= 18 && hora.getDay() > 0 && hora.getDay() <= 6) {
        if(hora.getDay() === 6 && hora.getHours() > 12){
            console.log(false);
            return;
        }
        console.log(true);
        return;
    } else {
        console.log(false);
        return;
    }

}

taAberto(hora);