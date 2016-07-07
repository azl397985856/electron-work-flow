import { Modal, Button } from 'antd';
import React from 'react';

const SettingModal = React.createClass({
  getInitialState() {
    return { visible: false };
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  handleOk() {
    console.log('点击了确定');
    this.setState({
      visible: false,
    });
  },
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  },
  render() {
    return (
        <Modal title="设置" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
          width="300px"
        >
          <p>xxxxx</p>
          <p>xxxxx</p>
          <p>xxxxx</p>
        </Modal>
    );
  },
});
export default SettingModal;