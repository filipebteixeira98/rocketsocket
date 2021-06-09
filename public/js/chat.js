const socket = io('http://localhost:3333');

socket.on('begin_chat', (data) => {
  console.log(data);
});
