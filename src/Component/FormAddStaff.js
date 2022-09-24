import React, { Component } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
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
            modal: true,
            backdrop: true,
            name: this.props.staff.name || '',
            doB: this.props.staff.doB || '',
            startDate: this.props.staff.startDate || '',
            department: this.props.staff.departmentId || 'Sale',
            annualLeave: this.props.staff.annualLeave || 1,
            overTime: this.props.staff.overTime || 1,
            image: '/assets/images/alberto.png',
            salaryScale: this.props.staff.salaryScale || 1,
            IdStaff: this.props.staff.id || false,
            valid: false,
            touched: {
                name: false,
                doB: false,
                startDate: false,
            },
        };
        this.handelBlur = this.handelBlur.bind(this);
    }

    toggle = () => {
        this.props.showFormAdd(false);
        this.setState({
            modal: !this.state.modal,
        });
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
            annualLeave,
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
            annualLeave,
            overTime,
            salaryScale,
            image,
        };

        if (!this.state.IdStaff) {
            // add
            this.props.staff(newStaff);

            alert('Thêm thành công nhân viên mới');
        } else {
            // Edit
            newStaff.id = this.state.IdStaff;
            this.props.editStaff(newStaff);
            alert('Cập nhật thành công nhân viên');
        }
        this.toggle();
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
        const {
            name,
            doB,
            startDate,
            annualLeave,
            salaryScale,
            overTime,
            department,
            IdStaff,
        } = this.state;
        const errors = this.validate(name, doB, startDate);
        return (
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>
                    {!IdStaff ? 'Thêm nhân viên' : 'Sửa nhân viên'}
                </ModalHeader>

                <ModalBody>
                    <Form onSubmit={this.handleSubmitForm}>
                        <FormGroup row>
                            <Label md={12} htmlFor="name">
                                Tên
                            </Label>
                            <Col md={12}>
                                <Input
                                    type={'text'}
                                    className={`form-control`}
                                    id="name"
                                    name="name"
                                    value={name}
                                    valid={errors.name === ''}
                                    invalid={errors.name !== ''}
                                    onChange={this.handleTakeData}
                                    onBlur={this.handelBlur('name')}
                                />
                                <FormFeedback>{errors.name}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={12} htmlFor="doB">
                                Ngày sinh
                            </Label>
                            <Col md={12}>
                                <Input
                                    type={'date'}
                                    className={`form-control`}
                                    id="doB"
                                    value={doB}
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
                            <Label md={12} htmlFor="startDate">
                                Ngày vào công ty
                            </Label>
                            <Col md={12}>
                                <Input
                                    type={'date'}
                                    className="form-control"
                                    id="startDate"
                                    value={startDate}
                                    name="startDate"
                                    onChange={this.handleTakeData}
                                    onBlur={this.handelBlur('startDate')}
                                    valid={errors.startDate === ''}
                                    invalid={errors.startDate !== ''}
                                />
                                <FormFeedback>{errors.startDate}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={12} htmlFor="humanR">
                                Phòng ban
                            </Label>
                            <Col md={12}>
                                <Input
                                    type="select"
                                    className="form-control"
                                    name="department"
                                    onChange={this.handleTakeData}
                                >
                                    {this.state.department && (
                                        <option value={department}>
                                            {department}
                                        </option>
                                    )}
                                    <option value={'Sale'}>Sale</option>
                                    <option value={'HR'}>HR</option>
                                    <option value={'Marketing'}>
                                        Marketing
                                    </option>
                                    <option value={'IT'}>IT</option>
                                    <option value={'Finance'}>Finance</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={12} htmlFor="salaryScale">
                                Hệ số lương
                            </Label>
                            <Col md={12}>
                                <Input
                                    type={'number'}
                                    className="form-control"
                                    id="salaryScale"
                                    step={'0.01'}
                                    min={0}
                                    max={5}
                                    value={salaryScale}
                                    onChange={this.handleTakeData}
                                    name="salaryScale"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={12} htmlFor="annualLeave">
                                Số ngày nghỉ còn lại
                            </Label>
                            <Col md={12}>
                                <Input
                                    type={'number'}
                                    className="form-control"
                                    id="annualLeave"
                                    value={annualLeave}
                                    onChange={this.handleTakeData}
                                    name="annualLeave"
                                    min={0}
                                    max={12}
                                    step={0.5}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={12} htmlFor="overTime">
                                Số ngày đã làm thêm
                            </Label>
                            <Col md={12}>
                                <Input
                                    type={'number'}
                                    className="form-control"
                                    id="overTime"
                                    step={'0.5'}
                                    min={0}
                                    max={20}
                                    value={overTime}
                                    onChange={this.handleTakeData}
                                    name="overTime"
                                />
                            </Col>
                        </FormGroup>
                        <ModalFooter>
                            <Button
                                type="submit"
                                color={!IdStaff ? 'primary' : 'danger'}
                            >
                                {!IdStaff ? 'Add' : 'Update'}
                            </Button>
                        </ModalFooter>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}

export default FormAddStaff;
