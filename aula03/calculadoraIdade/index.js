const moment = require('moment');

const main = () => {
  const data = moment();
  
  const dataNascimento = moment('29/11/1989', 'DD/MM/YYYY');
  
  if(!dataNascimento.isValid()) {
    console.log('Data inválida');
    process.exit(1);
  }

  const ano = data.diff(dataNascimento, 'years')
  const mes = data.diff(dataNascimento, 'months')
  const dia = data.diff(dataNascimento, 'days')

  console.log(`Idade aproximada: ${ano} anos, ${mes} meses ou ${dia} dias`);
}

main()