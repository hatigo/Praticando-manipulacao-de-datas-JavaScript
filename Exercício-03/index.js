 
 const hora = new Date(2015,1,1,2);

 console.log(hora.getHours())

function taAberto (hora){
   console.log(hora.getHours() >= 8 && hora.getHours() <= 18 ? true: false);
 
}

taAberto(hora);