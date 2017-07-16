
export const chatMiddleware = store => next => (action) => {
  const state = store.getState();
  const { type } = action;
  switch (type) {
    case 'SEND_MESSAGE':
      console.log('Message sent: ', action.payload);
      break;
    case 'RECEIVE_MESSAGE':
      console.log('Message received: ', action.payload);
      break;
    default:
      break;
  }

  return next(action);;
}
