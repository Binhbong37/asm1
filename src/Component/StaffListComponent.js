import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardImg } from 'reactstrap';

import FormAddStaff from './FormAddStaff';
import { Loading } from './Loading';

class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNumCol: 1,
            showDesc: true,
            selectStaff: null,
            searchStaff: '',
            showFormAdd: false,
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
            searchStaff: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let testStaff;

        if (!this.state.searchStaff) {
            return this.setState({ showStaffs: this.props.staffs });
        }

        testStaff = this.props.staffs.filter((staff) => {
            let findName = this.state.searchStaff.toLowerCase();
            let nameInclu = staff.name.toLowerCase();

            return nameInclu.includes(findName);
        });

        this.setState({
            showStaffs: testStaff,
        });
    };

    // toggleModal
    toggleModal = () => {
        this.setState({ showFormAdd: false });
    };

    // add staff
    addStaff = (staff) => {
        const newStaff = {
            id: this.props.staffs.length + 1,
            name: staff.name,
            doB: staff.doB,
            salaryScale: staff.salary,
            startDate: staff.startDate,
            department: staff.department,
            annualLeave: staff.annuaLeave,
            overTime: staff.overTime,
            image: '/assets/images/alberto.png',
        };

        this.props.addStaff(newStaff);
    };

    render() {
        const { staffs, isLoading } = this.props;
        const { showDesc, showNumCol } = this.state;
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

        if (isLoading) {
            return (
                <div className="center">
                    <Loading />
                </div>
            );
        } else {
            return (
                <div className="container mt-2">
                    <div className="top_nv mb-2">
                        <h3>Nhân viên</h3>
                        <div
                            className="icon_add"
                            onClick={() => this.setState({ showFormAdd: true })}
                        >
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="form-hienthi my-3">
                        <div className="hienthi_cot">
                            <label htmlFor="hienthi">Cột hiển thị </label>
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
                    {this.state.showFormAdd && (
                        <FormAddStaff
                            staff={this.addStaff}
                            toggleModal={this.toggleModal}
                        />
                    )}
                </div>
            );
        }
    }
}

export default StaffList;
