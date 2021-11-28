import React, { Component } from 'react';
import { NavItem, Nav, Button, Modal, ModalHeader, ModalBody, Label, Row} from 'reactstrap';
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validScale = (val) => /^[0-9]+\.[0-9]+$/i.test(val)

class FormModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false
        }
        
    }
    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
  
  
      handleLogin = (values) => {
        //  giá trị của phòng ban
        let dept = values.department === "Sale" ? "Dept01" : values.department === "HR" ? "Dept02" : 
        values.department === "Marketing" ? "Dept03" : values.department === "IT" ? "Dept04" : "Dept05"
          const newStaff = {
              name: values.name,
              doB: values.doB,
              startDate: values.startDate,
              department: dept,
              overTime: values.overTime,
              salaryScale: values.salaryScale,
              annualLeave: values.annualLeave,
              image: "/asset/images/alberto.png"
          }
          this.props.addStaff(newStaff)
        this.toggleModal();
    }
    
    render() {
        
        return (
            <React.Fragment>
                <Nav className="m-auto" navbar>
                    <NavItem>
                        <Button onClick={ this.toggleModal} style={{marginTop:"10px"}}>
                            <span className="fa fa-plus fa-lg"></span> Thêm nhân viên
                        </Button>
                    </NavItem>
                </Nav>
                <Modal style={{paddingRight:0}} isOpen={this.state.isModalOpen} toggle={() => this.toggleModal()}
                 >
                    <ModalHeader>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleLogin(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="name">Tên</Label>
                                    <Control.text model=".name" id="name" name="name" placeholder="Thêm tên"
                                    className="form-control"
                                    validators={{
                                        required,
                                        maxLength: maxLength(20),
                                        minLength: minLength(5)
                                    }}
                                    />
                                    <Errors className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                        maxLength: "Nhỏ hơn 20 ký tự",
                                        minLength: "Lớn hơn 5 ký tự"
                                    }}
                                    />
                                </Row>

                                 <Row className="form-group">
                                    <Label htmlFor="birthday">Ngày sinh</Label>
                                    <Control type="date" model=".doB" id="birthday" name="doB" className="form-control"
                                    validators={{
                                        required
                                    }}
                                    />
                                    <Errors className="text-danger"
                                    model=".doB"
                                    show="touched"
                                    messages={{
                                        required: "Không để trống ô này"
                                    }}
                                    />
                                </Row>

                                <Row className="form-group">
                                    <Label htmlFor="checkin">Ngày vào công ty</Label>
                                    <Control type="date" model=".startDate" name="startDate" id="checkin" className="form-control"
                                    validators={{
                                        required
                                    }}/>
                                    <Errors className="text-danger"
                                    show="touched"
                                    model=".startDate"
                                    messages={{
                                        required: "Không để trống ô này"
                                    }}/>
                                </Row>
                                
                                <Row className="form-group">
                                    <Label htmlFor="checkin1">Phòng ban</Label>
                                    <Control.select model=".department" name="department" id="checkin1" className="form-control">
                                        <option>Sale</option>
                                        <option>HR</option>
                                        <option>Marketing</option>
                                        <option>IT</option>
                                        <option>Financial</option>
                                    </Control.select>
                                </Row>
                                
                                <Row className="form-group">
                                    <Label htmlFor="salaryScale">Hệ số lương</Label>
                                    <Control type="number" model=".salaryScale" name="salaryScale" id="salaryScale"  className="form-control"
                                    validators={{
                                        required,
                                        isNumber,
                                        validScale
                                    }}
                                    />
                                    <Errors className="text-danger"
                                    model=".salaryScale"
                                    show="touched"
                                    messages={{
                                        required: "Không để trống ô này ",
                                        isNumber:"Phải là số ",
                                        validScale:"có dấu , ở giữa (vd 1,5)"
                                    }}
                                    />
                                </Row>
                                
                                <Row className="form-group">
                                    <Label htmlFor="annualLeave">Số ngày nghỉ còn lại</Label>
                                    <Control type="number" model=".annualLeave" name="annualLeave" id="annualLeave"
                                    className="form-control"
                                    validators={{
                                        required
                                    }}
                                    />
                                    <Errors className="text-danger"
                                    model=".annualLeave"
                                    show="touched"
                                    messages={{
                                        required: "Không để trống ô này"
                                    }}
                                    />
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="overTime">Số ngày đã làm thêm</Label>
                                    <Control type="number" model=".overTime" name="overTime" id="overTime" className="form-control"
                                    validators={{
                                        required
                                    }}
                                    />
                                    <Errors className="text-danger"
                                    model=".overTime"
                                    show="touched"
                                    messages={{
                                        required: "Không để trống ô này"
                                    }}
                                    />
                                </Row>
                                <Label htmlFor="age"> Age </Label>
                                <Control type="text" id="age" className="control-form"/>
                                <Button type='submit' color="primary" style={{marginTop:"10px"}}>Thêm</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}
export default FormModal;