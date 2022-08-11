import React, { Component } from 'react';

class FormLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch('https://rjs101xbackend.herokuapp.com/')
            .then((data) => data.json())
            .then((result) => this.setState({ data: result }))
            .catch((err) => console.log(err));
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                {data.map((name) => (
                    <div key={name.id}>{name.name}</div>
                ))}
            </div>
        );
    }
}

export default FormLogin;
