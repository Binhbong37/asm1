import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Label,
    Form,
    FormGroup,
    FormFeedback,
    Col,
} from 'reactstrap';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            backdrop: true,
        };

        this.toggle = this.toggle.bind(this);
        this.changeBackdrop = this.changeBackdrop.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
        });
    }

    changeBackdrop(e) {
        let value = e.target.value;
        if (value !== 'static') {
            value = JSON.parse(value);
        }
        this.setState({ backdrop: value });
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>
                    Click
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                    backdrop={this.state.backdrop}
                >
                    <ModalHeader toggle={this.toggle}>
                        Thêm nhân viên
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup row>
                                <Label md={2} htmlFor="name">
                                    Tên
                                </Label>
                                <Col md={10}>
                                    <Input
                                        type={'text'}
                                        className={`form-control`}
                                        id="name"
                                        name="name"
                                    />
                                    <FormFeedback>{'er'}</FormFeedback>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>
                            Do Something
                        </Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Test;
