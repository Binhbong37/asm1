import React from "react";
import { Jumbotron } from 'reactstrap';


function RenderDept (props) {
    let department = props.departments
    return (
        <div className="row">
            {department.map((dep) => {
                return(
                    <div className="col-6 col-md-4" key={dep.id}>
                        <h2>{dep.name}</h2>
                        Số lượng nhân viên: {dep.numberOfStaff}
                    </div>
                )
            })}
        </div>
    )
}

function Department (props) {
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
            <div className="container">
                <RenderDept departments={props.departments}/>
            </div>
        </>
    )
}
export default Department;