const states = require('./states.js');
const eventTypes = require('./eventTypes.js');

const name = {
  label: 'Name',
  placeholder: 'Your name'
};
const email = {
  label: 'Email',
  placeholder: 'your@email.com',
  type: 'email'
};
const type = {
  label: 'Event Type',
  placeholder: 'Choose an event type',
  type: 'select',
  options: eventTypes
};
const eventDate = {
  label: 'Event Date',
  placeholder: 'On or around',
  type: 'date'
};
const referralSource = {
  label: 'Referral Source',
  placeholder: 'Where did you hear about me?'
};
const eventVenue = {
  label: 'Event Venue',
  placeholder: 'Name of the venue'
};
const eventLocale = {
  label: 'Event Location',
  placeholder: 'Choose a state',
  type: 'select',
  options: states
};
const phone = {
  label: 'Phone',
  placeholder: '(###) ###-####',
  type: 'phone',
};
const budget = {
  label: 'Estimated budget',
  placeholder: '$XXXX',
  type: 'currency',
};
const drawer = {
  label: 'More Details',
  placeholder: 'Share more details about your event here'
};
const row = {
};
const message = {
  label: 'Message',
  placeholder: 'What are the details of your event?',
  type: 'textarea'
};
const defaultInputs = {
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
const defaultOrder = [
  { id: 'name' },
  { id: 'email' },
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
  defaultInputs,
  defaultOrder,
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