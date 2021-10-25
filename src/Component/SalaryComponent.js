import React from "react";
import { Jumbotron } from 'reactstrap';



function Salary (props) {
    let salary = props.staffs
    return(
        <>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Bảng lương</h1>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <div className="container">
                <div className="row">
                    {salary.map((sla) => {
                        return(
                            <div className="col-12 col-sm-6 col-md-4" key={sla.id}>
                                <h2>{sla.name}</h2>
                                <p>Mã nhân viên: {sla.id}</p>
                                <p>Hệ số lương: {sla.annualLeave}</p>
                                <p>Số giờ làm thêm: {sla.overTime}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Salary;