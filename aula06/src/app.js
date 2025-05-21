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

const mensagens = [];
io.on('connection', socket => {
  console.log(`Novo cliente conectado: ${socket.id}`);

  // Cliente enviará seu nome após o modal
  socket.on('authenticated', username => {
    socket.username = username;

    // Envia histórico de mensagens apenas ao novo usuário
    socket.emit('messages', mensagens);

    // Notifica outros usuários com um toast
    socket.broadcast.emit('new-user-connected', username);
  });

  socket.on('new-message', data => {
    const mensagem = {
      user: data.user || 'Anônimo',
      text: data.text
    };

    mensagens.push(mensagem);
    io.emit('messages', mensagens);
  });
});
module.exports = server;