import React from "react";
import {  Button, Label, Row, Col} from 'reactstrap';
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)
const isNumber = (val) => !isNaN(Number(val))
// const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const number = (val) => val && val >= 20

const FormRedux = () => {

    const handleSubmit = (values) => {
        console.log(values)

    }
    return(
        <LocalForm onSubmit={(values)=>handleSubmit(values)} >
            <Row className="form-group">
                <label htmlFor="name"><span>Tên</span></label>
                <Col md={3}>
                    <Control.text model=".name" id="name" name="name" placeholder="Thêm tên"
                    className="form-control"
                    validators={{
                        required, minLength: minLength(3), maxLength: maxLength(20)
                    }}/>
                    <Errors className="text-danger"
                        model=".name"
                        show="touched"
                        messages={{
                            required: "Yêu cầu nhập ",
                            minLength: "Lớn hơn =3 ký tự",
                            maxLength: "Nhỏ hơn 20 ký tự"
                        }}/>
                </Col>
            </Row>
            <Row className="form-group">
                <Label htmlFor="password">Password</Label>
                <Col md={3}>
                    <Control.text model=".password" id="password" name="password" placeholder="Password" className="form-control"
                    validators={{
                        required, isNumber
                    }}
                    />
                    <Errors className="text-danger"
                        model=".password"
                        show="touched"
                        messages={{
                            required: "Yêu cầu nhập ",
                            isNumber:"Plz enter Number"
                        }}/>
                </Col>
            </Row>
            <Row className="form-group">
                <Label htmlFor="age">Age</Label>
                <Col md={3}>
                    <Control.text model=".age" id="age" name="age" placeholder="Password"
                    className="form-control"
                    validators={{
                        number
                    }}
                    />
                    <Errors className="text-danger"
                        model=".age"
                        show="touched"
                        messages={{
                            number:"Lon hon >= 20"
                        }}/>
                </Col>
            </Row>
            <Button type='submit' color="primary" style={{marginTop:"10px"}}
            >Thêm</Button>
        </LocalForm>
    )
}

export default FormRedux;