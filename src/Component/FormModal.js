import React, { Component } from 'react';
import { NavItem, Nav, Button, Modal, ModalHeader, ModalBody, Label, Row, FormGroup, Input, FormFeedback} from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class FormModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
                id: 0,
                name: '',
                doB: '',
                salaryScale: 1,
                startDate: '',
                department: "DEPARTMENTS[1]",
                annualLeave: 0,
                overTime: 0,
                salary: 1,
                image: '/assets/images/alberto.png',
                touched: {
                    name: false,
                    startDate: false
                },
                

            isModalOpen: false
        }

    }
    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
  
    // EVENTS CHANGE VALUE 
    onChangValue = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name
       this.setState({
            [name]: value
       })
    }
      //   Nut BUTTON để THÊM nhân viên

      handleLogin = (e) => {
          console.log(this.state)
        e.preventDefault();
        this.toggleModal();
        this.props.onClickAdd(this.state)
    }

    // EVENT VALIDATE FORM
        handleBlur = (filed) => (evt) => {
            this.setState({
                touched: {...this.state.touched, [filed]: true}
            })
        };
        validate(name, startDate) {
            let take = this.state.touched;
            const errors = {
                name: '',
                startDate: ''
            };
            if(take.name && name.length <3) {
                errors.name = "Cần tối thiểu 2 ký tự cho tên"
            } else if (take.name && name.length > 15) {
                 errors.name = "NGắn thôi tên gì dài quá 15 ký tự nhé"
            }
        }
    render() {
        const { name, doB, salaryScale, startDate, department, annualLeave, overTime} = this.state
        const errors = this.validate(this.state.name)
        return (
            <React.Fragment>
                <Nav className="m-auto" navbar>
                    <NavItem>
                        <Button onClick={() => this.toggleModal()}>
                            <span className="fa fa-plus fa-lg"></span> Thêm nhân viên
                        </Button>
                    </NavItem>
                </Nav>
                <Modal isOpen={this.state.isModalOpen} toggle={() => this.toggleModal()}>
                    <ModalHeader>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Row className="form-group">
                                <Label htmlFor="username">Tên</Label>
                                <Input type="text" id="username" name="name" placeholder="Thêm tên"
                                value={name} onChange={this.onChangValue}
                                />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="birthday">Ngày sinh</Label>
                                <Input type="date" id="birthday" name="doB" value={doB} onChange={this.onChangValue}
                                />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="checkin">Ngày vào công ty</Label>
                                <Input type="date" name="startDate" id="checkin" value={startDate} onChange={this.onChangValue}/>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="checkin1">Phòng ban</Label>
                                <Input type="select" name="department" id="checkin1" value={department} onChange={this.onChangValue}>
                                    <option value={1}>Sale</option>
                                    <option value={2}>HR</option>
                                    <option value={3}>Marketing</option>
                                    <option value={4}>IT</option>
                                    <option value={5}>Financial</option>
                                </Input>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="checkin2">Hệ số lương</Label>
                                <Input type="number" name="salaryScale" id="checkin2" value={salaryScale} onChange={this.onChangValue}/>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="checkin3">Số ngày nghỉ còn lại</Label>
                                <Input type="number" name="annualLeave" id="checkin3" value={annualLeave} onChange={this.onChangValue}/>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="checkin4">Số ngày đã làm thêm</Label>
                                <Input type="number" name="overTime" id="checkin4" value={overTime} onChange={this.onChangValue} />
                            </Row>
                            <Button type='submit' color="primary" style={{marginTop:"10px"}}
                             onClick={this.handleLogin}>Thêm</Button>
                        </FormGroup>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}
export default FormModal;