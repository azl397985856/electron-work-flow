
import React from 'react';
import { Button, Row, Col, Icon, Dropdown, Menu, Card, Switch, message, QueueAnim } from 'antd';
import SettingModal from './settingModal'


const DropdownButton = Dropdown.Button;
const envMapper = {
	test: '测试环境',
	uat: 'UAT环境',
	pro: '生产环境'
};

class Test extends React.Component {

  constructor(props, context){
    super(props, context);
    this.state = {};
  }
  handleDeployClick(e) {
	const env = envMapper[e.key];
	console.log(this);
	this.setState({
		env: env
	});
  }
  menu() {
  	return (
	  <Menu onClick={this.handleDeployClick.bind(this)}>
	    <Menu.Item key="test">测试环境</Menu.Item>
	    <Menu.Item key="uat">UAT环境</Menu.Item>
	    <Menu.Item key="pro">生产环境</Menu.Item>
	  </Menu>
  );
  }
  addNewProject() {
  	message.success('选择目录');
  }
  showSettings() {
  	this.refs.settingModal.setState({
  		visible: true,
  	});
  }
  render() {
    return (
    	<div>
    		<QueueAnim
		  				type={['right', 'left']}
          				ease={['easeOutQuart', 'easeInOutQuart']}
          				duration={1500}>
    		<div key="queue-anim-_banner">
	    		<Row>
			  		<Col  style={{display: 'flex'}} className="banner" span="12" push="6">
						<img src="img/0.jpg"></img>
					</Col>
			  	</Row>
		  	</div>
		  	<div key="queue-anim-_toolbar">
			  	<Row className="add-new-project">
			  		<Col span="12" push="6">
						<span style={{fontFamily: 'fantasy'}}>Add New Project Here &nbsp;&nbsp;</span>
						<a onClick={this.addNewProject}><Icon type="plus-circle" /></a>
						<a onClick={this.showSettings.bind(this)} style={{margin: '10px'}}><Icon type="setting" /></a>
					</Col>
			  	</Row>
		  	</div>
		  	<Row className="row">
		  		<Col span="18" push="3">
		  			<QueueAnim
		  				type={['right', 'left']}
          				ease={['easeOutQuart', 'easeInOutQuart']}
          				duration={1500}>
		  				<div key="queue-anim-card-1">
							<Card className="card-content">
							    <Icon type="github" /><p className="inline">灵通短信</p>
							    <Switch style={{float: 'right'}}/>
							</Card>
						</div>
						<div key="queue-anim-card-2">
							<Card className="card-content" key="queue-anim-2">
							    <Icon type="github" /><p className="inline">灵通打单</p>
							    <Switch style={{float: 'right'}}/>
							</Card>
						</div>
						<div key="queue-anim-card-3">
							<Card className="card-content" key="queue-anim-3">
							    <Icon type="github" /><p className="inline">灵通组件库</p>
							    <Switch style={{float: 'right'}}/>
							</Card>
						</div>
					</QueueAnim>
				</Col>
		  	</Row>
			<Row style={{marginBottom: '20px'}}>
				<Col style={{display: 'flex'}} className="center" span="8" push="1">
			    	<Button>
			    		<Icon type="team" />
			        	 开发
			      	</Button>
		      	</Col>
		      	<Col style={{display: 'flex'}} className="center" span="8">
			    	<Button>
			    		<Icon type="share-alt" />
			         	编译
			      	</Button>
		      	</Col>
		      	<Col style={{display: 'flex'}} className="center" span="8" pull="1">
			    	<DropdownButton onClick={this.handleDeployClick} overlay={this.menu()} >
			    		<Icon type="qrcode" />
			         	{this.state.env || '发布'}
			      	</DropdownButton>
		      	</Col>
		  	</Row>
		  	<Row>
		  		<Col span="8" push="10">
					<a href="http://localhost:2016">Go to Mock</a>
				</Col>
		  	</Row>
		  	<Row style={{margin: '40px'}}>
		  		<Col className="footer">
					by zhipenglu   2016/7/7
				</Col>
		  	</Row>
		  	<SettingModal ref="settingModal"/>
		  	</QueueAnim>
	  	</div>
	);
  }

}

export default Test