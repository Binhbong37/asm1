import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    CardTitle,
    CardText,
    Breadcrumb,
    BreadcrumbItem,
} from 'reactstrap';

import { Loading } from './Loading';

const Deparment = ({ dept }) => {
    const { isLoading } = dept;
    if (isLoading) {
        return (
            <div className="center">
                <Loading />
            </div>
        );
    } else {
        return (
            <div className="container-fluid mt-3">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to={'/'}>Nhân viên</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
                </Breadcrumb>

                <div className="row">
                    {dept.dept.map((depar) => {
                        return (
                            <div
                                key={depar.id}
                                className="col-12 col-sm-6 col-md-4 my-2"
                            >
                                <Link
                                    to={`phong-ban/${depar.id}`}
                                    className="phongBan"
                                >
                                    <Card className="p-3">
                                        <CardTitle tag={'h3'}>
                                            {depar.name}
                                        </CardTitle>
                                        <CardText>
                                            Số lượng nhân viên:{' '}
                                            {depar.numberOfStaff}
                                        </CardText>
                                    </Card>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
};

export default Deparment;
