import React from 'react';
import { Card, CardTitle, CardText, CardFooter, CardBody } from 'reactstrap';

import { STAFFS } from '../staff/staffs';

const SaralyComp = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                {STAFFS.map((staff) => {
                    const { salaryScale, overTime } = staff;
                    const luong =
                        Math.round(
                            (salaryScale * 3000000 + overTime * 200000) * 1000
                        ) / 1000;

                    return (
                        <div className="col-12 col-sm-6 col-md-4 my-2">
                            <Card className="p-3">
                                <CardTitle tag={'h4'} className="center mb-2">
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
};

export default SaralyComp;
