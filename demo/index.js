/**
 * Notification Component Demo for tingle
 * @author Kuncheng Zhao
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

const Tingle = require('tingle-context');

window.FastClick && FastClick.attach(document.body);

Tingle.setGlobal({
  svgPath: ''
});

var Demo = require('./NotificationDemo');
ReactDOM.render(<Demo/>, document.getElementById('TingleDemo'));
