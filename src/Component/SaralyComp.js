import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText, CardFooter, CardBody } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class SaralyComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showStaffs: this.props.salary.salary,
            valueSort: 'name A-Z',
        };
    }
    handleChangeSort = (e) => {
        this.setState({
            valueSort: e.target.value,
        });
    };

    sortValueArr = (sortValue) => {
        if (sortValue === 'saraly Z-A') {
            return this.state.showStaffs.sort((a, b) => {
                return b.salary - a.salary;
            });
        } else if (sortValue === 'saraly A-Z') {
            return this.state.showStaffs.sort((a, b) => {
                return a.salary - b.salary;
            });
        } else if (sortValue === 'name Z-A') {
            return this.state.showStaffs.sort((a, b) => {
                let n1 = a.name.toLowerCase();
                let n2 = b.name.toLowerCase();
                if (n1 < n2) {
                    return 1;
                }
                if (n1 > n2) {
                    return -1;
                }
                return 0;
            });
        } else {
            return this.state.showStaffs.sort((a, b) => {
                let n1 = a.name.toLowerCase();
                let n2 = b.name.toLowerCase();
                if (n1 < n2) {
                    return -1;
                }
                if (n1 > n2) {
                    return 1;
                }
                return 0;
            });
        }
    };

    render() {
        const { valueSort } = this.state;
        if (valueSort) {
            this.sortValueArr(valueSort);
        }
        return (
            <div className="container mt-4">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to={'/'}>Nhân viên</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
                </Breadcrumb>
                <div className="sort-items mb-3">
                    <label htmlFor="lable-sort-itmes">Sắp xếp: </label>
                    <select
                        className="select-sort"
                        onChange={this.handleChangeSort}
                    >
                        <option>name A-Z</option>
                        <option>name Z-A</option>

                        <option>saraly A-Z</option>
                        <option>saraly Z-A</option>
                    </select>
                    <span className="result-sort">{this.state.valueSort}</span>
                </div>
                <div className="row">
                    {this.state.showStaffs.map((staff) => {
                        return (
                            <div
                                key={staff.id}
                                className="col-12 col-sm-6 col-md-4 my-2"
                            >
                                <Card className="p-3">
                                    <CardTitle
                                        tag={'h4'}
                                        className="center mb-2"
                                    >
                                        {staff.name}
                                    </CardTitle>
                                    <CardBody>
                                        <CardText>
                                            Mã nhân viên: {staff.id}
                                        </CardText>
                                        <CardText>
                                            Phòng ban:{' '}
                                            {staff.departmentId === 'Dept01'
                                                ? 'Sales'
                                                : staff.departmentId ===
                                                  'Dept02'
                                                ? 'HR'
                                                : staff.departmentId ===
                                                  'Dept03'
                                                ? 'Marketing'
                                                : staff.departmentId ===
                                                  'Dept04'
                                                ? 'IT'
                                                : 'Finance'}
                                        </CardText>
                                        <CardText>
                                            Hệ số lương: {staff.salaryScale}
                                        </CardText>
                                        <CardText>
                                            Số ngày làm thêm: {staff.overTime}
                                        </CardText>
                                    </CardBody>
                                    <CardFooter className="ml-2">
                                        Lương: {staff.salary}
                                    </CardFooter>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default SaralyComp;
