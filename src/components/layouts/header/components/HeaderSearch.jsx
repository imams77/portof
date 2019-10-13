import React, { Component } from 'react'

class HeaderSearch extends Component {
    closeSearchOverlay(){
        let searchOverlay = document.getElementById('search-content-wrap');
        searchOverlay.classList.remove('search-visible');
    }
    render() {
        return (
            <div className="search-content-wrap main-search-active" id="search-content-wrap">
                <button className="search-close"><i className="negan-icon-simple-close" onClick={this.closeSearchOverlay} /></button>
                <div className="search-content">
                    <p>Start typing and press Enter to search</p>
                    <form className="search-form" action="#">
                        <input type="text" placeholder="Search entire store…" />
                        <button className="button-search"><i className="negan-icon-zoom2" /></button>
                    </form>
                </div>
            </div>

        )
    }
}

export default HeaderSearch