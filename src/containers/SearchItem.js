import React, { Component } from 'react'

export default class SearchItem extends Component {
    render() {
        const {search} = this.props;
        return (
          <div className="card card-body center col-md-8 h-100">
            <h6 className="font-weight-light mb-0">{search.displayLink}</h6>
            <h3 className="text-light card-title">
              <a href={search.link}>{search.title}</a>
            </h3>
            <h6 className="font-weight-light">{search.snippet}</h6>
          </div>
        )
    }
}

