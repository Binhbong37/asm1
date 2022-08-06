import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardImg } from 'reactstrap';

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
                    className={`col-6 col-sm-4 col-md-${
                        showNumCol === 1 ? 3 : showNumCol === 2 ? 3 : 4
                    } col-lg-${
                        showNumCol === 1 ? 2 : showNumCol === 2 ? 3 : 4
                    } my-2`}
                    onClick={() => this.handleTakeDetailStaff(staff)}
                >
                    <Link to={`/nhan-vien/${staff.id}`}>
                        <Card className="hover1">
                            <CardImg src={staff.image} alt={staff.name} />
                            <CardTitle
                                tag={'h5'}
                                style={{ textAlign: 'center' }}
                            >
                                {staff.name}
                            </CardTitle>
                        </Card>
                    </Link>
                </div>
            );
        });

        return (
            <div className="container mt-2">
                <h3>Nhân viên</h3>
                <div className="line"></div>
                <div className="mt-3">
                    <label htmlFor="hienthi">
                        Cột hiển thị (Chỉ áp dụng cho màn laptop):{' '}
                    </label>
                    <select
                        id="hienthi"
                        onChange={(e) => this.handleChangCol(e)}
                    >
                        <option value={'1'}>6 cột</option>
                        <option value={'2'}>4 cột</option>
                        <option value={'3'}>3 cột</option>
                    </select>
                </div>
                <div className="row">{menu}</div>
                {showDesc && (
                    <p className="mt-2">
                        Bấm vào từng nhân viên để xem thông tin chi tiết
                    </p>
                )}
            </div>
        );
    }
}

export default StaffList;
