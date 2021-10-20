const dataInicial = new Date(2020,5,5,14);
const dataUso = new Date(2020,5,6,6);


function promocaoValida (inicio, uso){
    if(inicio.getDate() === uso.getDate() && inicio.getFullYear() === uso.getFullYear() && inicio.getHours() <= uso.getHours()){
        console.log(true);
        return;
    }else if(inicio.getFullYear() === uso.getFullYear() && (inicio.getDate() + 1) === uso.getDate() && inicio.getHours() >= uso.getHours()){
        console.log(true);
        return;
    }else {
        console.log(false);
        return;
    }

}

promocaoValida(dataInicial, dataUso);