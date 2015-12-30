/**
 * Notification Component for tingle
 * @author Kuncheng Zhao
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
const classnames = require('classnames');

class Notification extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };
  }

  hide() {
    this.setState({visible: false});
  }

  show() {
    this.setState({visible: true});
  }

  render() {
    let t = this;
    return (
      <div ref="root" {...t.props} className={classnames({[t.props.className]: !!t.props.className})}>
        {
          t.state.visible ? (
            <div className="tNotification tFBH">
              {t.props.children}
            </div>
          ) : ''
        }
      </div>
    )
  }
}

Notification.LinkButton = require('./modules/LinkButton');
Notification.CloseButton = require('./modules/CloseButton');

Notification.displayName = 'Notification';

module.exports = Notification;
