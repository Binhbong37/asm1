import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem,
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { Loading } from './Loading';
import { FadeTransform } from 'react-animation-components';
import { baseUrl } from '../staff/baseUrl';

class DepartmentDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idDept: this.props.match.params.dept,
            deptIdArr: [],
            isLoading: true,
            errMess: null,
        };
    }

    // Fetch Data
    fetchData = () => {
        return fetch(baseUrl + `departments/${this.state.idDept}`)
            .then(
                (response) => {
                    if (response.ok) {
                        return response;
                    } else {
                        var error = new Error(
                            'Error ' +
                                response.status +
                                ': ' +
                                response.statusText
                        );
                        error.response = response;
                        throw error;
                    }
                },
                (error) => {
                    var errmess = new Error(error.message);
                    throw errmess;
                }
            )
            .then((response) => response.json())
            .then((staffs) =>
                this.setState({
                    deptIdArr: staffs,
                    isLoading: false,
                })
            )
            .catch((error) =>
                this.setState({
                    errMess: error.message,
                    isLoading: false,
                })
            );
    };

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const RenderMenuItem = ({ staff }) => {
            return (
                <FadeTransform
                    in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)',
                    }}
                >
                    <Card>
                        <Link to={`/nhan-vien/${staff.id}`}>
                            <CardImg
                                width="100%"
                                src="/assets/images/alberto.png"
                                alt={staff.name}
                            />
                            <CardTitle className="text-center">
                                {staff.name}
                            </CardTitle>
                        </Link>
                    </Card>
                </FadeTransform>
            );
        };

        const menu = this.state.deptIdArr.map((staff) => {
            return (
                <div className="col-6 col-md-6 col-lg-2 mb-2" key={staff.id}>
                    <RenderMenuItem staff={staff} />
                </div>
            );
        });
        if (this.state.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        } else if (this.state.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{this.state.errMess}</h4>
                            <h2>Tạm thời sever đang sập nhóe !!!</h2>
                        </div>
                    </div>
                </div>
            );
        } else
            return (
                <div className="container">
                    <div className="row mt-5">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/">Nhân viên</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link to="/phong-ban">Phòng ban</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>Department</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="row">{menu}</div>
                </div>
            );
    }
}

export default withRouter(DepartmentDetail);

// https://duydzht.github.io/home
