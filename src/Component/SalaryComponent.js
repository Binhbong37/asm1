import React from "react";
import { Jumbotron } from 'reactstrap';
import { Loading } from "./loadingComponent"



function Salary (props) {
    let salary = props.salary;
    const basicSalary = 3000000;
    const overtimeSalary = 2000000;
    if(props.staffLoading) {
        return(
            <div className="container">
                <Loading/>
            </div>
        )
    } else if(props.staffErrMess) {
        return(
            <h4>{props.staffErrMess}</h4>
        )
    }
    else{
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
                            const sumSalary = parseInt(basicSalary * sla.salaryScale) + parseInt(overtimeSalary * sla.overTime)
                            return(
                                
                                <div className="col-12 col-sm-6 col-md-4" key={sla.id}>
                                    <h2>{sla.name}</h2>
                                    <p>Mã nhân viên: {sla.id}</p>
                                    <p>Hệ số lương: {sla.salaryScale}</p>
                                    <p>Số giờ làm thêm: {sla.overTime}</p>
                                    <b style={{backgroundColor:"#f7f7f7", padding:"7px"}}>Lương: {sumSalary}</b>
                                </div>
                                
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
    
}
export default Salary;