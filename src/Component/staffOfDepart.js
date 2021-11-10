import React, { Component } from "react";
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem, Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./loadingComponent";
import { connect } from "react-redux";
import { fetchDepartOfStaff } from "../redux/actionCreatator";
import { FadeTransform } from "react-animation-components";



// connect với store
const mapStateToProps = (state) => {
  return {
    staffOfDeparts: state.staffofdept
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchDepartOfStaff: (departId) => dispatch(fetchDepartOfStaff(departId)),
});

class StaffOfDepart extends Component {

  componentDidMount() {
    this.props.fetchDepartOfStaff(this.props.deptID)
  }

  render() {

    const RenderMenuItem = ({ staff }) => {
      return (
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(0.5) translateY(-50%)",
          }}
        >
          <Card>
            <Link to={`/nhan-vien/${staff.id}`}>
              <CardImg
                width="100%"
                src="/asset/images/alberto.png"
                alt={staff.name}
              />
              <CardTitle className="text-center">{staff.name}</CardTitle>
            </Link>
          </Card>
         </FadeTransform>
      );
    };
    let staff = ''
    const menu = this.props.staffOfDeparts.staffOfDeparts.map((staffs) => {
        staff = staffs
      return (
        <div className="col-6 col-md-4 col-lg-2" key={staff.id}>
           <RenderMenuItem staff={staff} />
        </div>
      );
    });
    if (this.props.staffOfDeparts.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (this.props.staffOfDeparts.errMess) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>{this.props.staffOfDeparts.errMess}</h4>
            </div>
          </div>
        </div>
      );
    } else {
        return (
            <>
                <Jumbotron>
                        <div className="container">
                            <div className="row row-header">
                                <div className="col-12 col-sm-6">
                                    <h3>Nhân viên từng phòng ban</h3>
                                </div>
                            </div>
                        </div>
                        </Jumbotron>
                <div className="container">
                    <div className="row mt-5">
                        <Breadcrumb>
                            <BreadcrumbItem>
                            <Link to="/phong-ban">Phòng Ban</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>{staff.departmentId === "Dept01" ? "Sale" :
                            staff.departmentId === "Dept02" ? "HR" : staff.departmentId ==="Dept03" ? "Marketing" : 
                            staff.departmentId === "Dept04" ? "IT" : "Finance"}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>

                    <div className="row">{menu}</div>
                </div>
          </>
        );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StaffOfDepart);

