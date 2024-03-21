import React, {useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit';
import '../css/Chat.css';

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: '¡Hola, soy un Cliente!', sender: 'user1' },
    { id: 2, text: '¡Buenas, gracias por usar nuestros servicios!', sender: 'user2' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMsg = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user1',
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender === 'user1' ? 'sent' : 'received'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

function Chat() {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-right'>
    <div className='mask gradient-custom-3' id="colorRegister"></div>
    <MDBCard  id="contact">
      <MDBCardBody className='px-5'>
      <div className="left">
        <p>CHAT</p>
        <ChatComponent />
      </div>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
  );
}

export default Chat;