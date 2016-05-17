/* High level React View Component is smarter and aggregates lower level React components. */
require('normalize.css/normalize.css');
require('../styles/App.css');
import React from 'react';
import { PageHeader } from 'react-bootstrap';
import _ from 'lodash';
import consts from '../lib/constants';
import TemplateComponent from '../components/TemplateComponent';

let TemplateApp = React.createClass({
    componentWillMount() {
        this.props.fetchTime();
    },
    render() {
        let view;

        return (
            <div className='index'>
                <div className="header">
                    <PageHeader >Template App</PageHeader>
                </div>
                <div>
                    <div className="controlPanel">
                        <TemplateComponent {...this.props} />
                    </div>
                </div>
            </div>
        )
    }
})

export default TemplateApp;
