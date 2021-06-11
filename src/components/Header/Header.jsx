import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Header extends Component {
    back=()=>{
        this.props.history.goBack();

    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <h1 className="display-4">React Route Test!</h1>
                <button onClick={this.back}>back</button>

            </div>
        )
    }
}
export default withRouter(Header)
