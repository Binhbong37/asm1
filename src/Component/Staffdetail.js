import React from "react"
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem, Jumbotron} from 'reactstrap';
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

function RenderStaff(props) {
        let staff = props.staff
    if(staff != null) {
        
        return (
            <>
                <div className="container">
                    <Breadcrumb>
                            <BreadcrumbItem><Link to ="/nhan-vien">Nhân viên</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="container">
                    <div className="row">
                        <Card className ="col-12 col-md-4 col-lg-3">
                            <CardImg height="100%" src={staff.image} alt= {staff.name}/>
                        </Card>
                        <Card className="col-12 col-md-8 col-lg-9">
                            <CardBody>
                                <CardTitle><strong>Họ và tên: {staff.name}</strong></CardTitle>
                                <CardText><strong>Ngày sinh:</strong> {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                                <CardText><strong>Thang lương:</strong> {staff.salaryScale}</CardText>
                                <CardText><strong>Ngày vào công ty:</strong> {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                                <CardText><strong>Phòng ban:</strong> {staff.department.name ? staff.department.name : staff.department}</CardText>
                                <CardText><strong>Số ngày nghỉ còn lại:</strong> {staff.annualLeave} ngày</CardText>
                                <CardText><strong>Số ngày đã làm thêm:</strong> {staff.overTime} ngày</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
               
                
            </>
        )
    } else {
        return (<div></div>)
    }
}

export default RenderStaff;