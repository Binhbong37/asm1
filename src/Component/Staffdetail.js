import React from "react"
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom"
// import { CardImg } from "reactstrap"



function RenderStaff(props) {
    // Even XÓA
    const handleDelete = (id) => {
        alert("Đã xóa")
        props.deleteStaff(id)
        props.history.push("/nhan-vien")
    }
    // SỬA 
    const handleEdit = (id) => {
        alert("ĐANG HOÀN THIỆN")
        console.log(id)
    }
    let staffs = props.staff
    if(staffs) {
        return (
            <div className="container">
                <Breadcrumb style={{marginTop: "5px"}}>
                    <BreadcrumbItem><Link to ="/nhan-vien">Nhân viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{staffs.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="row">
                <Card className ="col-12 col-md-4 col-lg-3">
                    <CardImg height="100%" src={staffs.image} alt= {staffs.name}/>
                </Card>
                <Card className="col-12 col-md-5 col-lg-7">
                    <CardBody>
                        <CardTitle><h3>{staffs.name}</h3> </CardTitle>
                        <CardText><strong>Ngày sinh:</strong> {dateFormat(staffs.doB, "dd/mm/yyyy")}</CardText>
                        <CardText><strong>Thang lương:</strong> {staffs.salaryScale}</CardText>
                        <CardText><strong>Ngày vào công ty:</strong> {dateFormat(staffs.startDate, "dd/mm/yyyy")}</CardText>
                        <CardText><strong>Phòng ban:</strong> {staffs.departmentId === "Dept01" ? "Sale" : 
                        staffs.departmentId === "Dept02" ? "HR" : staffs.departmentId === "Dept03" ? "Marketing" : 
                        staffs.departmentId === "Dept04" ? "IT" : "Finance"}</CardText>
                        <CardText><strong>Số ngày nghỉ còn lại:</strong> {staffs.annualLeave} ngày</CardText>
                        <CardText><strong>Số ngày đã làm thêm:</strong> {staffs.overTime} ngày</CardText>
                    </CardBody>
                </Card>
                <Card className="col-12 col-md-3 col-lg-2 mg-fle">
                    <button className="btn btn-danger" onClick={() => handleDelete(staffs.id)}>Xóa</button>
                    <button className="btn btn-warning" onClick={()=> handleEdit(staffs.id)}>Sửa</button>
                </Card>
                </div>
                
            </div>
        )

    } else {return <div></div>}
}

export default withRouter(RenderStaff);