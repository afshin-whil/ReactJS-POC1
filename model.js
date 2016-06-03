// model


var state = {},

  REQUEST_TEMPLATE = { 
  name: "",
  slug: "",
  domains: ["test01.com","whil.com"],
  verifyEmail: true,
  sections: ["search-inside-yourself"],  
  adminEmail: "",
  domains: ["test01.com","whil.com"],
  verifyEmail: true,
  sections: ["search-inside-yourself"]
};

function setState(changes) {
  Object.assign(state, changes);
  
  ReactDOM.render(
    React.createElement(ContactView, Object.assign({}, state, {
      onNewContactChange: updateNewContact,
      onNewContactSubmit: submitNewContact,
    })),
    document.getElementById('app')
  );
}

// Set initial data
setState({
  contacts: [
    // test data for the list:
    // {key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
    // {key: 2, name: "Jim", email: "jim@example.com"},
  ],
  newContact: Object.assign({}, REQUEST_TEMPLATE),
});