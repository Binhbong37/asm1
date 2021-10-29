import React from "react";
import { Jumbotron } from 'reactstrap';
import { DEPARTMENTS } from "../staff/staffs";


function Department () {
    let department = DEPARTMENTS;
    return(
        <>
            <Jumbotron>
                <div className="container" >
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Phòng ban</h1>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <div className="container" style={{ marginTop:"25px"}}>
                <div className="row">
                    {department.map((dep) => {
                        return(
                            <div className="col-6 col-md-4" key={dep.id}>
                                <div style={{padding:"10px"}}>
                                    <h2>{dep.name}</h2>
                                    Số lượng nhân viên: {dep.numberOfStaff}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Department;