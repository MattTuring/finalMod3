import { messages } from '../reducers/messages';

describe('messages reducer', () => {
it('should return the initial state', () => {
  const expected = [];

  const result = messages(undefined, []);

  expect(result).toEqual(expected);
});

it('should return the correct state if the action is ADD_MESSAGE', () => {
  const initialState = [];
  const messageInfo = {message: 'yeet', isUser: true};

  const action = {
    type: 'ADD_MESSAGE',
    message: messageInfo
  }

  const result = messages(initialState, action);
  const expected = [messageInfo];

  expect(result).toEqual(expected);
})

it('should return the correct state if the action is CLEAR_MESSAGE', () => {
  const initialState = [];
  const messageInfo = [];

  const action = {
    type: 'CLEAR_MESSAGE',
    messageInfo
  }

  const result = messages(initialState, action);
  const expected = messageInfo;

  expect(result).toEqual(expected);
})

});
