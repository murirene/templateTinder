import React from 'react';
import consts from '../lib/constants';

let TemplateComponent = React.createClass({
    render() {
        return (
            <div className='flex-row issue-row'>
                <h1>{this.props.message}</h1>
            </div>
            )
    }
})

export default TemplateComponent