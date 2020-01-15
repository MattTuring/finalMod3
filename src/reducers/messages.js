export const messages = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MESSAGE':
    console.log(action);
      return [...state, action.message]
    case 'CLEAR_MESSAGE':
      return state;
    default:
      return state;
  }
}
