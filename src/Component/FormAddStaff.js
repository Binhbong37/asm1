import React, { Component } from 'react';

class FormAddStaff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            doB: '',
            startDate: '',
            department: 'Sale',
            annuaLeave: 1,
            overTime: 1,
            salary: 1,
            image: '/assets/images/alberto.png',
            validateName: false,
        };
    }

    showModal = () => {
        this.props.toggleModal();
    };

    handleTakeData = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            ...this.state,
            [name]: value,
        });
    };

    handleSubmitForm = (e) => {
        e.preventDefault();
        if (!this.state.name) {
            this.setState({
                validateName: true,
            });
            return;
        }
        this.props.staff(this.state);
        this.showModal();
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handleModal);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleModal);
    }

    handleModal = (e) => {
        if (e.keyCode === 27) {
            this.showModal();
        }
    };

    render() {
        return (
            <div className="modal-form">
                <div className="modal-container">
                    <div className="modal-header">
                        <h3>Thêm nhân viên</h3>
                        <div className="icon_exit" onClick={this.showModal}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={this.handleSubmitForm}>
                            <div className="form-group">
                                <label htmlFor="name">Tên</label>
                                <input
                                    type={'text'}
                                    className={`form-control ${
                                        this.state.validateName && 'is-invalid'
                                    }`}
                                    id="name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleTakeData}
                                />
                            </div>
                            {this.state.validateName && (
                                <div className="invalidFeedback center">
                                    Name is requried!
                                </div>
                            )}
                            <div className="form-group">
                                <label htmlFor="doB">Ngày sinh</label>
                                <input
                                    type={'date'}
                                    className="form-control"
                                    id="doB"
                                    value={this.state.doB}
                                    name="doB"
                                    onChange={this.handleTakeData}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="startDate">
                                    Ngày vào công ty
                                </label>
                                <input
                                    type={'date'}
                                    className="form-control"
                                    id="startDate"
                                    value={this.state.startDate}
                                    name="startDate"
                                    onChange={this.handleTakeData}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="humanR">Phòng ban</label>
                                <select
                                    className="form-control"
                                    value={this.state.department}
                                    name="department"
                                    onChange={this.handleTakeData}
                                >
                                    <option value={'Sale'}>Sale</option>
                                    <option value={'HR'}>HR</option>
                                    <option value={'Marketing'}>
                                        Marketing
                                    </option>
                                    <option value={'IT'}>IT</option>
                                    <option value={'Finance'}>Finance</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="salaryScale">Hệ số lương</label>
                                <input
                                    type={'number'}
                                    className="form-control"
                                    id="salaryScale"
                                    step={'0.01'}
                                    min={0}
                                    max={5}
                                    value={this.state.salary}
                                    onChange={this.handleTakeData}
                                    name="salary"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="annuaLeave">
                                    Số ngày nghỉ còn lại
                                </label>
                                <input
                                    type={'number'}
                                    className="form-control"
                                    id="annuaLeave"
                                    value={this.state.annuaLeave}
                                    onChange={this.handleTakeData}
                                    name="annuaLeave"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="overTime">
                                    Số ngày đã làm thêm
                                </label>
                                <input
                                    type={'number'}
                                    className="form-control"
                                    id="overTime"
                                    step={'0.1'}
                                    min={0}
                                    max={5}
                                    value={this.state.overTime}
                                    onChange={this.handleTakeData}
                                    name="overTime"
                                />
                            </div>

                            <div className="btn-add">
                                <button className="btn btn-primary">
                                    Thêm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormAddStaff;
