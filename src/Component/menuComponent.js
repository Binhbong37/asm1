import React, { Component } from "react";
import { Card, CardText, CardTitle, CardBody, CardImg, CardImgOverlay } from "reactstrap";
import dateFormat from "dateformat";

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
           selectedStaff: null
        }
    }

    onStaffSelect(staff) {
        this.setState({
            selectedStaff: staff
        });
    }
    renderStaff(staff) {
        if(staff != null) {
            return (
                <Card>
                    <CardBody>
                        <CardText><strong>Họ và tên: {staff.name}</strong></CardText>
                        <CardText><strong>Ngày sinh:</strong> {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                        <CardText><strong>Thang lương:</strong> {staff.salaryScale}</CardText>
                        <CardText><strong>Ngày vào công ty:</strong> {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                        <CardText><strong>Phòng ban:</strong> {staff.department.name}</CardText>
                        <CardText><strong>Số ngày nghỉ còn lại:</strong> {staff.annualLeave} ngày</CardText>
                        <CardText><strong>Số ngày đã làm thêm:</strong> {staff.overTime} ngày</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (<div></div>)
        }
    }
    render() {
        const menuStaff = this.props.staffs.map((staff) => {
            return (
                <div className="col-12 col-md-5 col-lg-4">
                    <Card key={staff.id} onClick={() => this.onStaffSelect(staff)}>
                        <CardImg src={staff.image} alt = {staff.name}/>
                        <CardTitle heading>{staff.name}</CardTitle>
                        <CardTitle>Bộ phận: {staff.department.name}</CardTitle>
                    </Card>
                    
                </div>
            )
        });
        

        return (
            <div className="container">
                <div className="row">
                        {menuStaff}
                </div>
                <div className="col-12 col-md-5 col-lg-4">
                    {this.renderStaff(this.state.selectedStaff)}

                </div>
            </div>
        )
    }
}

export default Menu;
