import React,  {Component} from 'react';
import {link} from 'React-router-dom';
//material ui component
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Account from './Account';
class Header extends Component{
	appStyle = {
       backgroundColor: '#512DA8'
  } 
	constructor(props){
		super(props)
		this.state={
			sidebarOpen: false,
			email:''
			
		}
	}
	render(){
		return(
			<div>
			
			<AppBar style={this.appStyle}
				title= "Welcome to Dashboard"
				 iconElementRight={ <Account email={this.state.email}/>}
				onLeftIconButtonClick={() => this.toggleSidebar()}
				/>
				
				<Drawer open={this.state.sidebarOpen}
					docked= {false}
					onRequestChange={() => this.toggleSidebar()} >
					<MenuItem> <Link to = '/Dashboard'> Home </MenuItem>
					<MenuItem> History </MenuItem>
					<MenuItem> Things to do </MenuItem>
				</Drawer>
								 
			</div>
			)
	}
	toggleSidebar(){
		this.setState({sidebarOpen: !this.state.sidebarOpen})
	}
	 componentWillMount() {
    this.setState({
      email: sessionStorage.getItem('email')
    })
  }
	
}
export default Header; 