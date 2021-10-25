import React from "react";
import { Card, CardText, CardTitle, CardBody, CardImg, CardImgOverlay } from "reactstrap";
import { Jumbotron } from 'reactstrap';
import { Link } from "react-router-dom";

    
    const Menu = (props) => {
        
        const menuStaff = props.staffs.map((staff) => {
            return (
                <div className="col-6 col-md-4 col-lg-2" key={staff.id}>
                    <Card>
                        <Link to = {`/nhanvien/${staff.id}`}>
                            <CardImg src={staff.image} alt = {staff.name}/>
                            <CardTitle style={{textAlign:"center", textDecoration:"none"}}>{staff.name}</CardTitle>
                        </Link>
                    </Card>
                    
                </div>
            )
        });

        return (
            <>
                <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Nhân viên</h1>
                        </div>
                    </div>
                </div>
                </Jumbotron>
                <div className="container">
                    <div className="row">
                        {menuStaff}
                    </div>
                    <div className="row">
                    </div>
                </div>
            </>
        )
    }

    
        
export default Menu;
