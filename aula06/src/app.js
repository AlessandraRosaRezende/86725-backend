const express = require('express');
const handlebars = require('express-handlebars');
const viewsRouter = require('./routes/views.router');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);
const io = socketIO(server);

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use('/', viewsRouter);

io.on('connection', (socket) => {
  console.log('Novo cliente conectado', socket.id);
  
  socket.on('message', (data) => {
    console.log('Mensagem recebida: ', data);
  });

  // emit -> Envia uma mensagem para o cliente
  socket.emit('evento_para_socket_individual', 'Olá, cliente! Essa mensagem é só para você.');

  // broadcast -> Envia uma mensagem para todos os clientes, exceto o que enviou
  socket.broadcast.emit('evento_para_socket_global_menos_um', 'Olá, todos os clientes! Essa mensagem é para todos menos para você.');

  // io.emit -> Envia uma mensagem para todos os clientes
  io.emit('evento_para_socket_global', 'Olá, todos os clientes! Essa mensagem é para todos.');
});

module.exports = server;