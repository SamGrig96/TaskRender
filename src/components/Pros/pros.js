
import React, { Component } from "react";

class Pros extends Component {

    constructor() {
        super()
        this.state = {
            inputs: [],
            count: 0,
            value: ''
        }
    };
    handleChange = (e, id) => {
        this.setState({ value: e.target.value })
    }

    listitme = (e) => {
        e.preventDefault()

        this.setState({ inputs: this.state.inputs.concat(this.state.value), value: '' })



    }
    render() {
        return (
            <div>
                <ul className='list-style'>

                    {this.state.inputs.map((item, index) =>
                        <li key={index}>
                            {index + 1}
                            {item}
                        </li>

                    )}
                    <form onSubmit={this.listitme}>
                        <li>
                            {this.state.inputs.length + 1} <input value={this.state.value} onChange={(e) => this.handleChange(e, 0)} />

                        </li>
                    </form>


                    <li style={{ marginRight: '170px' }}>{this.state.inputs.length + 2} </li>


                </ul>
            </div>
        );
    }

}

export default Pros;