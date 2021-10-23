import React from "react";
import { Card, CardText, CardTitle, CardBody, CardImg, CardImgOverlay } from "reactstrap";
import dateFormat from "dateformat";

    
    const Menu = (props) => {
        
        const menuStaff = props.staffs.map((staff) => {
            return (
                <div className="col-6 col-md-4 col-lg-2" key={staff.id}>
                    <Card>
                        <CardImg src={staff.image} alt = {staff.name}/>
                        <CardTitle heading>{staff.name}</CardTitle>
                    </Card>
                    
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {menuStaff}
                </div>
                <div className="row">
                </div>
            </div>
        )
    }

    
        
export default Menu;
