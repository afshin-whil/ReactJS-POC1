// Controller
var test = {
  "team": {
    "teamId": 363,
    "name": "test04",
    "slug": "test41slug",
    "created": 1464975485205,
    "privacyInquire": true,
    "verifyEmail": true,
    "welcomeEmail": "teamWelcome"
  },
  "domains": [
    "test01.com",
    "whil.com"
  ],
  "members": [
    {
      "id": 27149,
      "email": "afshin@whil.com",
      "verified": false,
      "created": 1462391558734
    }
  ]
};


function afterSuccess() {
	setState(
		Object.keys(contact.errors).length === 0
		? {
			newContact: Object.assign({}, REQUEST_TEMPLATE),
			contacts: state.contacts.slice(0).concat(contact),
			}
		: { newContact: contact }
	);
}

function updateNewContact(contact) {
  setState({ newContact: contact });
}


function submitNewContact() {
  var url = "https://api.whil.blue/team-pilot?whil_token=69e337b8-d2fe-4370-be55-8fd295317719",
  contact = Object.assign({}, state.newContact, {key: state.contacts.length + 1, errors: {}});
  
  if (contact.name ) {
	    $.ajax({
	        method: 'POST',      
	        url: url,
	        //crossDomain:true,
	        data: state.newContact,
	        dataType: 'application/json',
	        success: function(data) { 
	          console.log(data);
	          afterSuccess();
	        }
	    });
	}
}