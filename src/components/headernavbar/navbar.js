import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as action from '../../actions'

class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                {
                    this.props.navbarLinks.map((link, index) => {
                        return (
                            <a className={`navbar__link ${link.active ? 'green-text' : ''}`} key={index} onClick={() => this.props.changeNavbarActive(link._id)}>
                            {link.title}
                        </a>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const{ navbarLinks } = state.headerNavbar;
    return {
        navbarLinks
    }
}

Navbar = connect(mapStateToProps, action)(Navbar);

export default Navbar;