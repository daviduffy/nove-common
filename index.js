"use strict";

var { FORM_INPUTS_DEFAULT, FORM_ORDER } = require('./src/constants/formInputs.js');
var { EVENT_TYPES_COMMON, EVENT_TYPES_ALL } = require('./src/constants/eventTypes.js');
var { STATES } = require('./src/constants/states.js');
var { FORM_STYLES_DEFAULT, FORM_BORDER_PRESETS } = require('./src/constants/styles.js');
var { flattenInputs } = require('./src/utils/contactForms.js');

module.exports = {
  EVENT_TYPES_ALL,
  EVENT_TYPES_COMMON,
  FORM_STYLES_DEFAULT,
  FORM_BORDER_PRESETS,
  FORM_INPUTS_DEFAULT,
  FORM_ORDER,
  STATES,
  flattenInputs
};
