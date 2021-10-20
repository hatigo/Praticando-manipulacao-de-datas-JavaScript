const {format} = require('date-fns');

const data = new Date(2020, 9, 5);

function formatarDataA (data) {
    const pattern = "dd 'de' MMMM 'de' yyyy";
    const dataFormatada = format(data, pattern);
    console.log(dataFormatada);
}

formatarDataA(data);


function formatarDataB (data) {
    const pattern = "dd/MM/yyyy";
    const dataFormatada = format(data, pattern);
    console.log(dataFormatada);

}

formatarDataB(data);

function formatarDataC (data) {
    const pattern = "d MMM";
    const dataFormatada = format(data, pattern);
    console.log(dataFormatada);

}

formatarDataC(data);

function formatarDataD (data) {
    const pattern = "dd MMM yyyy";
    const dataFormatada = format(data, pattern);
    console.log(dataFormatada);

}

formatarDataD(data);

function formatarDataE (data) {
    const pattern = "dd 'de' MMM 'de' yyyy";
    const dataFormatada = format(data, pattern);
    console.log(dataFormatada);

}

formatarDataE(data);

function formatarDataF (data) {
    const pattern = "dd/MMM";
    const dataFormatada = format(data, pattern);
    console.log(dataFormatada);

}

formatarDataF(data);