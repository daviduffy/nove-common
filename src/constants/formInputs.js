var { STATES } = require('./states.js');
var { EVENT_TYPES_COMMON } = require('./eventTypes.js');

var budget = {
  label: 'Estimated budget',
  placeholder: '$XXXX',
  type: 'currency',
};
var drawer = {
  label: 'More Details',
  placeholder: 'Share more details about your event here'
};
var email = {
  label: 'Email',
  placeholder: 'your@email.com',
  type: 'email'
};
var eventDate = {
  label: 'Event Date',
  placeholder: 'On or around',
  type: 'date'
};
var eventLocale = {
  label: 'Event Location',
  placeholder: 'Choose a state',
  type: 'select',
  options: STATES
};
var eventVenue = {
  label: 'Event Venue',
  placeholder: 'Name of the venue'
};
var name = {
  label: 'Name',
  placeholder: 'Your name'
};
var message = {
  label: 'Message',
  placeholder: 'What are the details of your event?',
  type: 'textarea'
};
var phone = {
  label: 'Phone',
  placeholder: '(###) ###-####',
  type: 'phone',
};
var referralSource = {
  label: 'Referral Source',
  placeholder: 'Where did you hear about me?'
};
var row = {
};
var type = {
  label: 'Event Type',
  placeholder: 'Choose an event type',
  type: 'select',
  options: EVENT_TYPES_COMMON
};

var FORM_INPUTS_DEFAULT = {
  name,
  email,
  type,
  eventDate,
  referralSource,
  eventVenue,
  eventLocale,
  phone,
  budget,
  drawer,
  row,
  message
};

var BASE = [
  { id: 'name' },
  { id: 'email' }
];
var MINI = [
  ...BASE,
  { id: 'message' }
];
var FULL = [
  ...BASE,
  { id: 'type' },
  { id: 'eventDate' },
  { id: 'referralSource' },
  {
    id: 'drawer',
    items: [
      { id: 'eventVenue' },
      { id: 'eventLocale' }
    ]
  },
  { id: 'message' }
];

module.exports = {
  FORM_INPUTS_DEFAULT,
  FORM_ORDER: {
    BASE,
    MINI,
    FULL
  },
  name,
  email,
  type,
  eventDate,
  referralSource,
  eventVenue,
  eventLocale,
  phone,
  budget,
  drawer,
  row,
  message
};