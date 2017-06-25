import io from 'socket.io-client';

const socket = new io('http://192.168.1.20:8080');

export function getPins() {
  return new Promise((resolve) => {
    socket.emit('get:pins');
    
    socket.on('receive:pins', (data) => {
      resolve(data);
    });
  });
}

export function changePin(pin) {
  socket.emit('get:pin', pin);
}