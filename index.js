"use strict";

var { FORM_INPUTS_DEFAULT, FORM_ORDER } = require('./src/varants/formInputs.js');
var { EVENT_TYPES_COMMON, EVENT_TYPES_ALL } = require('./src/varants/eventTypes.js');
var { STATES } = require('./src/varants/states.js');
var { FORM_STYLES_DEFAULT, FORM_BORDER_PRESETS } = require('./src/varants/styles.js');

module.exports = {
  EVENT_TYPES_ALL,
  EVENT_TYPES_COMMON,
  FORM_STYLES_DEFAULT,
  FORM_BORDER_PRESETS,
  FORM_INPUTS_DEFAULT,
  FORM_ORDER,
  STATES
};
