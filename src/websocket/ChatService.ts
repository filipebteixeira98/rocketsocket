import { io } from '../http';

io.on('connect', (socket) => {
  socket.emit('begin_chat', {
    message: 'Chat has been started',
  });
});
