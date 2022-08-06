import React, { Component } from 'react';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';
import {
    Card,
    CardTitle,
    CardText,
    CardImg,
    Breadcrumb,
    BreadcrumbItem,
} from 'reactstrap';

import { STAFFS } from '../staff/staffs';

class DetailStaff extends Component {
    constructor(props) {
        super(props);
        const nameId = this.props.match.params.id;
        let staff = STAFFS.filter((staf) => staf.id === +nameId);

        this.state = {
            selectStaff: staff[0],
        };
    }
    renderStaffDetail(staff) {
        if (staff !== undefined) {
            const {
                name,
                doB,
                startDate,
                department,
                overTime,
                annualLeave,
                image,
            } = staff;

            const startDateFormat = dateFormat(startDate, 'dd/mm/yyyy');
            const doBFormat = dateFormat(doB, 'dd/mm/yyyy');
            return (
                <>
                    <Breadcrumb className="mt-3">
                        <BreadcrumbItem>
                            <Link to="/">Nhân viên</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12 col-md-4">
                        <Card>
                            <CardImg width={'100%'} src={image} alt={name} />
                        </Card>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="p-4">
                            <CardTitle tag={'h4'}>Họ và tên: {name}</CardTitle>
                            <CardText>Ngày sinh: {doBFormat}</CardText>
                            <CardText>
                                Ngày bắt đầu làm việc: {startDateFormat}
                            </CardText>
                            <CardText>Phòng ban: {department.name}</CardText>
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
        return (
            <div className="container mb-5">
                <div className="row">
                    {this.renderStaffDetail(this.state.selectStaff)}
                </div>
            </div>
        );
    }
}

export default DetailStaff;
