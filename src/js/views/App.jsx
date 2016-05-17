/* High level Component is used as a container for the React components */
import React from 'react'

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default App;
