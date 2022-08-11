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
            searchStaff: '',
        };
    }

    handleTakeDetailStaff(staff) {
        this.setState({ selectStaff: staff, showDesc: false });
    }

    // Chang so cot
    handleChangCol(e) {
        this.setState({ showNumCol: +e.target.value });
    }

    // search
    handleSearch = (e) => {
        this.setState({
            ...this.state.searchStaff,
            searchStaff: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const testStaff = this.state.staffs.filter((staff) => {
            let findName = this.state.searchStaff.toLowerCase();
            let nameInclu = staff.name.toLowerCase();
            return nameInclu.includes(findName);
        });

        this.setState({ staffs: testStaff });
    };

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
                <div className="top_nv">
                    <h3>Nhân viên</h3>
                    <div className="icon_add">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="line"></div>
                <div className="form-hienthi my-3">
                    <div>
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
                    <div className="timkiem">
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type={'text'}
                                placeholder="Nhập tên nhân viên"
                                className="form-search"
                                value={this.state.searchStaff}
                                onChange={this.handleSearch}
                            />
                            <button type="submit" className="btn-search">
                                Tìm
                            </button>
                        </form>
                    </div>
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
