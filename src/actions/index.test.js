import * as actions from '../actions';


//
// export const addMessage = message => ({
//   type: 'ADD_MESSAGE',
//   message
// })
//
// export const clearMessages = () => ({
//   type: 'CLEAR_MESSAGE'
// })


describe('actions', () => {
    it('should have a type of ADD_MESSAGE', () => {
      const messages = [];
      const expectedAction = {
        type: 'ADD_MESSAGE',
        message:[]
      };

      const result = actions.addMessage(messages);

      expect(result).toEqual(expectedAction);
    });

    it('should have a type of clearMessages', () => {
        const expectedAction = {
          type: 'CLEAR_MESSAGE',
        };

        const result = actions.clearMessages();

        expect(result).toEqual(expectedAction);
    });
  });
