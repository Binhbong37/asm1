import React, { Component } from 'react';
import dateFormat from 'dateformat';
import { Link, withRouter } from 'react-router-dom';
import {
    Card,
    CardTitle,
    CardText,
    CardImg,
    Breadcrumb,
    BreadcrumbItem,
} from 'reactstrap';
import { Loading } from './Loading';

class DetailStaff extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectStaff: {},
        };
    }
    takeStaff = (data) => {
        const staffID = +data.match.params.id;

        let staffDetail = data.staffs.filter((staff) => {
            return staff.id === staffID;
        });

        return this.renderStaffDetail(staffDetail[0]);
    };
    renderStaffDetail(staff) {
        if (staff !== undefined) {
            const { name, doB, startDate, overTime, annualLeave, image } =
                staff;

            const startDateFormat = dateFormat(startDate, 'dd/mm/yyyy');
            const doBFormat = dateFormat(doB, 'dd/mm/yyyy');
            return (
                <>
                    <Breadcrumb className="mt-3">
                        <BreadcrumbItem>
                            <Link to="/">Nhân viên</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{name || 'HV'}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12 col-md-4">
                        <Card>
                            <CardImg
                                width={'100%'}
                                src={image}
                                alt={name || 'HV'}
                            />
                        </Card>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="p-4">
                            <CardTitle tag={'h4'}>Họ và tên: {name}</CardTitle>
                            <CardText>Ngày sinh: {doBFormat}</CardText>
                            <CardText>
                                Ngày bắt đầu làm việc: {startDateFormat}
                            </CardText>
                            <CardText>
                                Phòng ban:{' '}
                                {staff.departmentId === 'Dept01'
                                    ? 'Sale'
                                    : staff.departmentId === 'Dept02'
                                    ? 'HR'
                                    : staff.departmentId === 'Dept03'
                                    ? 'Marketing'
                                    : staff.departmentId === 'Dept04'
                                    ? 'IT'
                                    : 'Finance'}
                            </CardText>
                            <CardText>
                                Số ngày nghỉ còn lại: {annualLeave}
                            </CardText>
                            <CardText>Số ngày đã làm thêm: {overTime}</CardText>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <div>
                    <h1>Khong tim thay nhan vien</h1>
                    <a href="/" style={{ textDecoration: 'underline' }}>
                        Quay lai trang chu
                    </a>
                </div>
            );
        }
    }

    render() {
        const { isLoading } = this.props;
        if (isLoading) {
            return (
                <div className="center">
                    <Loading />
                </div>
            );
        }
        return (
            <div className="container mb-5">
                <div className="row">{this.takeStaff(this.props)}</div>
            </div>
        );
    }
}

export default withRouter(DetailStaff);
