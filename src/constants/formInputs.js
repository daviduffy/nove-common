const { STATES } = require('./states.js');
const { EVENT_TYPES_COMMON } = require('./eventTypes.js');

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
  options: EVENT_TYPES_COMMON
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
  options: STATES
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
const FORM_INPUTS_DEFAULT = {
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
const BASE = [
  { id: 'name' },
  { id: 'email' }
];
const MINI = [
  ...BASE,
  { id: 'message' }
];
const FULL = [
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