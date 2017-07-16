import io from 'socket.io-client';

const socket = io('http://localhost:8010');

socket.on('chat message', function(msg) {
  // dispatch({type: 'RECEIVE_MESSAGE', payload: msg});
});

// socket.on('vote start', function(msg) {
//   console.log('vote started');
// });
//
// socket.on('vote end', function(msg) {
//   console.log('vote ended');
// });
//
// socket.on('vote countdown', function(msg) {
//   console.log('vote remaining: ', msg);
// });

const sendMessage = (msg = 'guttenTag') => {
  socket.emit('chat message', msg);
}

const startVote = (msg = 'start vote') => {
  socket.emit('vote', msg);
}

export { sendMessage, startVote, socket };
