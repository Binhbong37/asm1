import React, { Component } from "react";
import { Card, CardText, CardTitle, CardBody, CardImg, CardImgOverlay } from "reactstrap";

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
                    <CardTitle>
                        <CardText>{staff.name}</CardText>
                    </CardTitle>
                    <CardBody>
                        <CardText>Ngày sinh: {staff.doB}</CardText>
                        <CardText>Ngày vào công ty: {staff.startDate}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (<div></div>)
        }
    }
    render() {
        const menu = this.props.staffs.map((staff) => {
            return (
                <div className="col-3 mt-5">
                    <Card key={staff.id} onClick={() => this.onStaffSelect(staff)}>
                        <CardImg src={staff.image} alt = {staff.name}/>
                    </Card>
                    <CardTitle heading>{staff.name}</CardTitle>
                    
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="col-12 mt-5">
                    {this.renderStaff(this.state.selectedStaff)}
                </div>
            </div>
        )
    }
}

export default Menu;
