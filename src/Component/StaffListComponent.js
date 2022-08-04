import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import dateFormat from 'dateformat';

import { STAFFS } from '../staff/staffs';

class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS,
            showNumCol: 1,
            showDesc: true,
            selectStaff: null,
        };
    }

    handleTakeDetailStaff(staff) {
        this.setState({ selectStaff: staff, showDesc: false });
    }

    // hien thi detail staff
    renderStaffDetail(staff) {
        if (staff !== null) {
            const { name, doB, startDate, department, overTime, annualLeave } =
                staff;

            const startDateFormat = dateFormat(startDate, 'dd/mm/yyyy');
            const doBFormat = dateFormat(doB, 'dd/mm/yyyy');
            return (
                <div className="col-12 col-md-6">
                    <Card className="p-4">
                        <CardTitle tag={'h4'}>Họ và tên: {name}</CardTitle>
                        <CardText>Ngày sinh: {doBFormat}</CardText>
                        <CardText>
                            Ngày bắt đầu làm việc: {startDateFormat}
                        </CardText>
                        <CardText>Phòng ban: {department.name}</CardText>
                        <CardText>Số ngày nghỉ còn lại: {annualLeave}</CardText>
                        <CardText>Số ngày đã làm thêm: {overTime}</CardText>
                    </Card>
                </div>
            );
        } else {
            return <div></div>;
        }
    }
    // Chang so cot
    handleChangCol(e) {
        this.setState({ showNumCol: +e.target.value });
    }

    render() {
        const { staffs, showDesc, showNumCol } = this.state;
        const menu = staffs.map((staff) => {
            return (
                <div
                    key={staff.id}
                    className={`col-5 col-md-${
                        showNumCol === 1 ? 4 : showNumCol === 2 ? 6 : 2
                    } my-2`}
                    onClick={() => this.handleTakeDetailStaff(staff)}
                >
                    <Card className="hover1">
                        <CardTitle>{staff.name}</CardTitle>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container mt-5">
                <div>
                    <label htmlFor="hienthi">
                        Cột hiển thị (không áp dụng cho điện thoại):{' '}
                    </label>
                    <select
                        id="hienthi"
                        onChange={(e) => this.handleChangCol(e)}
                    >
                        <option value={'1'}>3 cột</option>
                        <option value={'2'}>2 cột</option>
                        <option value={'3'}>6 cột</option>
                    </select>
                </div>
                <div className="row">{menu}</div>
                {showDesc && (
                    <p className="mt-2">
                        Bấm vào từng nhân viên để xem thông tin chi tiết
                    </p>
                )}

                <div className="row mt-3">
                    {this.renderStaffDetail(this.state.selectStaff)}
                </div>
            </div>
        );
    }
}

export default StaffList;
