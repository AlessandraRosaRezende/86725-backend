const socket = io();
socket.emit('message', 'Olá, servidor! Estou me comunicando através de WebSockets.');
socket.on('evento_para_socket_individual', (data) => {
  console.log('Mensagem recebida do servidor: ', data);
});
socket.on('evento_para_socket_global_menos_um', (data) => {
  console.log('Mensagem recebida de outro cliente: ', data);
});
socket.on('evento_para_socket_global', (data) => {
  console.log('Mensagem recebida para todos os clientes: ', data);
});