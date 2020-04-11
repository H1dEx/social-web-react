import React, {Component} from "react";

export default class ProfileStatus extends Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    };

    render() {

        return (
            <>
                {(!this.state.editMode)
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                    : <div>
                        <input value={this.props.status} onBlur={this.deactivateEditMode} autoFocus={true}/>
                    </div>}
            </>
        )
    }

}

