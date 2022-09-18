import React, { Component } from 'react';

class FormSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStaff: '',
        };
    }
    //
    // search
    handleSearch = (e) => {
        this.setState({
            searchStaff: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.handleSearch(this.state.searchStaff);
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type={'text'}
                    placeholder="Nhập tên nhân viên"
                    className="form-search"
                    value={this.state.searchStaff}
                    onChange={this.handleSearch}
                />
                <button type="submit" className="btn-search">
                    Tìm
                </button>
            </form>
        );
    }
}

export default FormSearch;
