// Seleciona os elementos HTML onde as horas, minutos e segundos serão exibidos
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

// Cria um intervalo que executa a função 'time' repetidamente
// O 'setInterval' chama a função a cada certo período de tempo (por padrão aqui, sem delay definido explicitamente, é imediato e contínuo)
const relogio = setInterval(function time() {
    
    // Cria um novo objeto Date, que contém a data e hora atual
    let dateToday = new Date();

    // Obtém a hora atual (de 0 a 23)
    let hr = dateToday.getHours();

    // Obtém os minutos atuais (de 0 a 59)
    let min = dateToday.getMinutes();

    // Obtém os segundos atuais (de 0 a 59)
    let s = dateToday.getSeconds();

    // Adiciona um zero à esquerda se a hora for menor que 10 (ex: 09 em vez de 9)
    if (hr < 10) hr = '0' + hr;

    // Adiciona um zero à esquerda se os minutos forem menores que 10
    if (min < 10) min = '0' + min;

    // Adiciona um zero à esquerda se os segundos forem menores que 10
    if (s < 10) s = '0' + s;

    // Atualiza o conteúdo dos elementos HTML com os valores formatados
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

});
