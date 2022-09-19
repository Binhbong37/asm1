import React, { Component } from 'react';
import {
    Form,
    FormFeedback,
    Col,
    Input,
    FormGroup,
    Label,
    Button,
} from 'reactstrap';

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
            image: '/assets/images/alberto.png',
            salaryScale: 1,
            valid: false,
            touched: {
                name: false,
                doB: false,
                startDate: false,
            },
        };
        this.handelBlur = this.handelBlur.bind(this);
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
        const {
            name,
            doB,
            startDate,
            department,
            annuaLeave,
            overTime,
            salaryScale,
            image,
        } = this.state;
        if (!name || !doB || !startDate) {
            this.setState({ valid: true });
            return;
        }
        const newStaff = {
            name,
            doB,
            startDate,
            department,
            annuaLeave,
            overTime,
            salaryScale,
            image,
        };

        this.props.staff(newStaff);
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

    handelBlur = (field) => (evt) => {
        this.setState({
            touched: {
                ...this.state.touched,
                [field]: true,
            },
        });
    };

    validate(name, doB, startDate) {
        const errors = {
            name: '',
            doB: '',
            startDate: '',
        };

        if (this.state.touched.name && name.length < 3)
            errors.name = 'Name is >= 3 character';
        else if (this.state.touched.name && name.length > 20)
            errors.name = 'Name is <= 20 character';
        else if (this.state.valid && !name) errors.name = 'Name is requried!';
        if (this.state.touched.doB && !doB) errors.doB = 'doB is requried';
        else if (this.state.valid && !doB) errors.doB = 'Dob is requried!';
        if (this.state.touched.startDate && !startDate)
            errors.startDate = 'StartDate is requried';
        else if (this.state.valid && !startDate)
            errors.startDate = 'Startdate is requried!';

        return errors;
    }

    render() {
        const { name, doB, startDate } = this.state;
        const errors = this.validate(name, doB, startDate);

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
                        <Form onSubmit={this.handleSubmitForm}>
                            <FormGroup row>
                                <Label md={2} htmlFor="name">
                                    Tên
                                </Label>
                                <Col md={9}>
                                    <Input
                                        type={'text'}
                                        className={`form-control`}
                                        id="name"
                                        name="name"
                                        valid={errors.name === ''}
                                        invalid={errors.name !== ''}
                                        value={this.state.name}
                                        onChange={this.handleTakeData}
                                        onBlur={this.handelBlur('name')}
                                    />
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label md={2} htmlFor="doB">
                                    Ngày sinh
                                </Label>
                                <Col md={9}>
                                    <Input
                                        type={'date'}
                                        className={`form-control`}
                                        id="doB"
                                        value={this.state.doB}
                                        name="doB"
                                        onChange={this.handleTakeData}
                                        valid={errors.doB === ''}
                                        invalid={errors.doB !== ''}
                                        onBlur={this.handelBlur('doB')}
                                    />
                                    <FormFeedback>{errors.doB}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label md={2} htmlFor="startDate">
                                    Ngày vào công ty
                                </Label>
                                <Col md={9}>
                                    <Input
                                        type={'date'}
                                        className="form-control"
                                        id="startDate"
                                        value={this.state.startDate}
                                        name="startDate"
                                        onChange={this.handleTakeData}
                                        onBlur={this.handelBlur('startDate')}
                                        valid={errors.startDate === ''}
                                        invalid={errors.startDate !== ''}
                                    />
                                    <FormFeedback>
                                        {errors.startDate}
                                    </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="humanR">
                                    Phòng ban
                                </Label>
                                <Col md={9}>
                                    <Input
                                        type="select"
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
                                        <option value={'Finance'}>
                                            Finance
                                        </option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label md={2} htmlFor="salaryScale">
                                    Hệ số lương
                                </Label>
                                <Col md={9}>
                                    <Input
                                        type={'number'}
                                        className="form-control"
                                        id="salaryScale"
                                        step={'0.01'}
                                        min={0}
                                        max={5}
                                        value={this.state.salaryScale}
                                        onChange={this.handleTakeData}
                                        name="salaryScale"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="annuaLeave">
                                    Số ngày nghỉ còn lại
                                </Label>
                                <Col md={9}>
                                    <Input
                                        type={'number'}
                                        className="form-control"
                                        id="annuaLeave"
                                        value={this.state.annuaLeave}
                                        onChange={this.handleTakeData}
                                        name="annuaLeave"
                                        min={0}
                                        max={12}
                                        step={0.5}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label md={2} htmlFor="overTime">
                                    Số ngày đã làm thêm
                                </Label>
                                <Col md={9}>
                                    <Input
                                        type={'number'}
                                        className="form-control"
                                        id="overTime"
                                        step={'0.5'}
                                        min={0}
                                        max={5}
                                        value={this.state.overTime}
                                        onChange={this.handleTakeData}
                                        name="overTime"
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="sumbmit" color="primary">
                                        Add
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormAddStaff;
