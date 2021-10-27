import React, { Component } from "react";
import { Button, FormGroup, Label, Input, Form } from "reactstrap";

class FormSearchStaff extends Component {
    constructor(props) {
        super(props)

        this.state = {
            staff: ''
        }
    }
    // Thay đổi để giá trị trong ô chạy được:
    handleChangvalue = (e) => {
        this.setState({
            staff: e.target.value
        })

        
    }
    // Khi Click sẽ in ra giá trị mình cần
    handleSearch = () => {
        this.props.OnclickAdd(this.state.staff)

        this.setState({
            staff:''
        })
    }
    render() {
        return(
            <Form>
                <FormGroup row>
                    <Input type="text" id="staff" name="staff" value={this.state.staff} placeholder="Nhập tên nhân viên"
                    onChange={this.handleChangvalue}/>
                    <Button onClick={this.handleSearch}>Tìm kiếm</Button>
                </FormGroup>

            </Form>
        )
    }
}
export default FormSearchStaff;