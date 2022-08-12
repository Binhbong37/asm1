import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText, CardFooter, CardBody } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class SaralyComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showStaffs: this.props.staffs,
            valueSort: 'name A-Z',
            sortValue: [3, 5, 6, 7, 6, 9, 2],
        };
    }
    handleChangeSort = (e) => {
        this.setState({
            valueSort: e.target.value,
        });
        this.sortValueArr();
    };

    sortValueArr() {
        this.state.showStaffs.sort((a, b) => {
            return b.id - a.id;
        });
    }
    render() {
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
                        const { salaryScale, overTime } = staff;
                        const luong =
                            Math.round(
                                (salaryScale * 3000000 + overTime * 200000) *
                                    1000
                            ) / 1000;

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
                                            Hệ số lương: {staff.salaryScale}
                                        </CardText>
                                        <CardText>
                                            Số ngày làm thêm: {staff.overTime}
                                        </CardText>
                                    </CardBody>
                                    <CardFooter className="ml-2">
                                        Lương: {luong}
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
