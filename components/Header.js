import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {browserHistory } from 'react-router'

 class Header extends Component{

   constructor(props) {
     super(props);
     this.state = {open: this.props.drawerOpen};
   }

   handleToggle(e) {
     this.setState({open: !this.state.open});
   }

   render(){
     const {title} = this.props;
     return (
       <div>
       <AppBar
        title={title}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
        />
        <Drawer
        onClick={this.handleToggle.bind(this)}
        docked={false}
        onRequestChange={(open) => this.setState({open})}
        open={this.state.open}>
        <AppBar
         onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
         title={title}
         iconElementLeft={<IconButton><NavigationClose /></IconButton>}
         iconClassNameRight="muidocs-icon-navigation-expand-more"
         />
          <MenuItem onTouchTap={this.handleToggle.bind(this)} onClick={() => browserHistory.push('/two')}>Two</MenuItem>
          <MenuItem onTouchTap={this.handleToggle.bind(this)} onClick={() => browserHistory.push('/three')}>Three</MenuItem>
        </Drawer>
       </div>
     )
   }
 }

 Header.propTypes = {
   title: PropTypes.string.isRequired,
   drawerOpen: PropTypes.bool.isRequired
 }

 export default Header;
