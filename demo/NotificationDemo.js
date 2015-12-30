/**
 * Notification Component Demo for tingle
 * @author Kuncheng Zhao
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

const classnames = require('classnames');

const Notification = require('../src');

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleClickNotification() {
    console.log('On Close')
    this.refs.notice.hide();
  }

  render() {
    const t = this;
    return (
      <div>
        <Notification ref="notice" onClick={t.handleClickNotification.bind(t)}>
          自带两个按钮, 一个是关闭一个是链接<Notification.LinkButton/>
        </Notification>
      </div>
    )
  }
}

module.exports = Demo;
