

const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const DIA = document.getElementById('dia');

CALCULAR.addEventListener('click', () => {
    console.log('clickeamos');
    const DATO = document.getElementById('peso').value
    console.log('dato ingresado: '+ DATO);
    //validamos que se cargue un dato:
    if (DATO <= 0){
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        DIA.style.display = 'none';

    } else if (DATO >= 30){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let f1 = (flujo*1500)/24;
        let f2 = (flujo*2000)/24;
        var fr1 = f1.toFixed();
        var fr2 = f2.toFixed();
        FLU.innerHTML = 'r1: ' + fr1 + ' cc/hr';
        MAN.innerHTML = 'r2: ' + fr2 + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }
    
    else {
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        var fr = flujo.toFixed();
        let mantenimiento = flujo*1.5;
        var mr = mantenimiento.toFixed();
        var dia = flujo*24;
        DIA.innerHTML = 'diario: ' + dia + ' cc';
        FLU.innerHTML = fr + ' cc/hr';
        MAN.innerHTML = 'm+m/2: ' + mr + ' cc/hr';
        DIA.style.display = 'block';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }
        
})

function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto < 10){
        resto= resto*100
    }
    else if (resto >= 10 && resto < 20){
        let aux;
        aux = resto-10;
        resto = 1000+(aux*50)
    }

    else if (resto >= 20 && resto < 30){
        let aux;
        aux = resto-20;
        resto = 1500+(aux*20)
    }

    else if (resto >= 30){
        trei=((resto*4)+7)/(resto+90);
        trei=resto;
    }

    flujo = resto/24;
    return flujo;
}
