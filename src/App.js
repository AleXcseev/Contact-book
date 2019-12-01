import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="All-contacts">
        <header>
          <div className="menu-btn"></div>
          <h1>All contacts</h1>
          <div claasName="close-btn"></div>
          <div className="action-menu"></div>
        </header>
        <div className="contact-card">
        <div className="avatar"></div>
        <div className="user-card">
            <div>
                <h3 className="user-card-name"></h3>
                <span className="user-card-text"></span>
            </div>
        </div>
        <div className="action-menu">
            <div></div>
        </div>
    </div>
      </div>
    </div>
  );
}

export default App;
