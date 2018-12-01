import React, { Component } from 'react';
import './Sidebar.css';
import SearchForm from '../search-form/SearchForm.js';
class Sidebar extends Component {
  render() {
    return (
    		<div class="wrapper">
    	    <nav id="sidebar">
    	    
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

    	    <div id="content">

    	        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    	            <div class="container-fluid">

    	                <button type="button" id="sidebarCollapse" class="btn btn-info">
    	                    <i class="fas fa-align-left"></i>
    	                    <span>Toggle Sidebar</span>
    	                </button>
    	            </div>
    	        </nav>
    	    </div>
    	</div>
    );
  }
}

export default Sidebar;
