import React, { Component } from 'react';
import './Sidebar.css';
import SearchForm from '../search-form/SearchForm.js';
import { Button, Collapse } from 'reactstrap';
class Sidebar extends Component {
  render() {
    return (
    		<div class="wrapper">
            
    	    <nav id="sidebar">
            <div id="dismiss">
            <i class="fas fa-arrow-left"></i>
            

        </div>
    	        <div class="sidebar-header">
    	            <h3>Lost and Found</h3>
    	            <SearchForm />
    	        </div>

    	        <ul class="list-unstyled components">
    	            <li class="active">
    	                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
    	                    <i class="fas fa-home"></i>
    	                    Add Item +
    	                </a>
    	                </li>
    	          </ul>

    	    </nav>
    	</div>

    );
  }
  toggle(){
	  this.state.open = !this.state.open
  }
}

export default Sidebar;
