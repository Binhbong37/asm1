import React, { Component } from "react";
import { Card, CardTitle, CardImg } from "reactstrap";
import { Jumbotron } from 'reactstrap';
import { Link } from "react-router-dom";
import FormSearchStaff from "./SearchStarff";
import FormModal from "./FormModal";

    
    class Menu extends Component{
        constructor(props) {
            super(props)

            this.state = {
                staff: this.props.staffs,
                keyword: ''
            }

        }
        // Lấy data từ FORM MODAL
        onClickAdd = (data) => {
            data.id = Math.floor(Math.random() * 1000000)
            this.props.onClickAdd(data)
        }
       
        staffSearch = (searchStaff) => {
            this.setState({
                keyword: searchStaff.toLowerCase()
            })
        }
        render() {
            
            let { staff, keyword } = this.state;
            let staffs = []
            if(keyword.length > 0) {
               staffs= staff.filter((item) => {
                  return  item.name.toLowerCase().indexOf(keyword) !== -1 })
                    
                
            } else { staffs = staff }
            
           

                  let menuStaff = staffs.map((staff) => {
                        return(
                            <div className="col-6 col-md-4 col-lg-2" key={staff.id}>
                        <Card>
                            <Link to = {`/nhan-vien/${staff.id}`}>
                                <CardImg src={staff.image} alt = {staff.name}/>
                                <CardTitle style={{textAlign:"center", textDecoration:"none"}}>{staff.name}</CardTitle>
                            </Link>
                        </Card>
                        
                    </div>
                        )
                    })
                   
            return (
                <>
                    <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-4">
                                <h1>Nhân viên</h1>
                            </div>
                            <div className="col-12 col-sm-4">
                                <FormModal onClickAdd ={this.onClickAdd}/>
                            </div>
                            <div className="col-12 col-sm-4">
                                <FormSearchStaff OnclickAdd={(searchStaff)=>this.staffSearch(searchStaff)}/>
                            </div>
                            
                        </div>
                    </div>
                    </Jumbotron>
                    <div className="container">
                        <div className="row">
                        
                            {menuStaff}
                        
                        </div>
                    </div>
                </>
            )
        }
        }

    
        
export default Menu;
