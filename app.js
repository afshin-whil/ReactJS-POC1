

var ContactForm = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
  },
  
  onNameChange: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {name: e.target.value}));
  },

  onSlugChange: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {slug: e.target.value}));
  },  
  
  onEmailChange: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {adminEmail: e.target.value}));
  },
  
  onDescriptionChange: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {description: e.target.value}));
  },

  onSubmit: function(e) {
    e.preventDefault();
    this.props.onSubmit();
  },

  render: function() {
    return (
      React.createElement('form', {onSubmit: this.onSubmit, className: 'ContactForm', noValidate: true},
        React.createElement('input', {
          type: 'text',
          placeholder: 'name',
          value: this.props.value.name,
          onChange: this.onNameChange,
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'slug',
          value: this.props.value.slug,
          onChange: this.onSlugChange,
        }),     
        React.createElement('input', {
          type: 'email',
          placeholder: 'adminEmail',
          value: this.props.value.adminEmail,
          onChange: this.onEmailChange,
        }),
        // React.createElement('textarea', {
        //   placeholder: 'Description',
        //   value: this.props.value.description,
        //   onChange: this.onDescriptionChange,
        // }),
        React.createElement('button', {type: 'submit'}, "Add Team")
      )
    );
  },
});


var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    slug: React.PropTypes.string.isRequired,    
    adminEmail: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
  },

  render: function() {
    return (
      React.createElement('li', {className: 'ContactItem'},
        React.createElement('h2', {className: 'ContactItem-name'}, this.props.name),
        React.createElement('h2', {className: 'ContactItem-name'}, this.props.slug),        
        React.createElement('a', {className: 'ContactItem-email', href: 'mailto:'+this.props.adminEmail}, this.props.email),
        React.createElement('div', {className: 'ContactItem-description'}, this.props.description)
      )
    );
  },
});


var ContactView = React.createClass({
  propTypes: {
    contacts: React.PropTypes.array.isRequired,
    newContact: React.PropTypes.object.isRequired,
    onNewContactChange: React.PropTypes.func.isRequired,
    onNewContactSubmit: React.PropTypes.func.isRequired,
  },

  render: function() {
    var contactItemElements = this.props.contacts
      // .filter(function(contact) { return contact.email; })
      .map(function(contact) { return React.createElement(ContactItem, contact); });

    return (
      React.createElement('div', {className: 'ContactView'},
        React.createElement(ContactForm, {
          value: this.props.newContact,
          onChange: this.props.onNewContactChange,
          onSubmit: this.props.onNewContactSubmit,
        }),        
        React.createElement('h1', {className: 'ContactView-title'}, "Teams"),
        React.createElement('ul', {className: 'ContactView-list'}, contactItemElements)
      )
    );
  },
});











