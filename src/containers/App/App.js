import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../Header/Header';
import WelcomeModal from '../WelcomeModal/WelcomeModal';
import ChatBox from '../ChatBox/ChatBox';
import { removeUser, hasErrored, addMessage, clearMessages } from '../../actions';
import { endConversation } from '../../apiCalls';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    }
  }

  addMessage = (message, isUser) => {
    this.props.addMessage({message, isUser})
    // const { messages } = this.state;
    // this.setState({ messages: [...messages, { message, isUser }]});
  }

  clearMessages = () => {
    this.props.clearMessages()
    // this.setState({ messages: [] });
  }

  signOut = async () => {
    try {
      await endConversation();
      this.props.removeUser();
      this.clearMessages();
    } catch({ message }) {
      this.props.hasErrored(message);
    }
  }

  render() {
    const { user, clearMessages, message } = this.props;
    const { messages } = this.state;
    return (
      <div className="App">
        <Header signOut={this.signOut} />
        {!user && <WelcomeModal addMessage={this.addMessage} />}
        {user && <ChatBox addMessage={this.addMessage} messages={messages} />}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
  clearMessages: state.clearMessages,
  messages: state.messages
});

export const mapDispatchToProps = dispatch =>  ({
  removeUser:( removeUser ) => dispatch(removeUser(removeUser)),
  hasErrored:( hasErrored ) => dispatch(hasErrored(hasErrored)),
  addMessage: (message) => dispatch(addMessage(message)),
  clearMessages: () => dispatch(clearMessages())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
