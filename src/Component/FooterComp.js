import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="row justify-content-center">
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Các trang</h5>
                    <ul className="list-unstyled">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/phong-ban">Phòng ban</Link>
                        </li>
                        <li>
                            <Link to="/bang-luong">Bảng lương</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-7 col-sm-4">
                    <h5>Địa chỉ của chúng tôi</h5>
                    <address>
                        89, đường Thạnh Mỹ Lợi, phường Thạnh Mỹ Lợi, Tp.Thủ Đức,
                        Tp.HCM
                        <br />
                        <i className="fa fa-phone fa-lg"></i>: +84 388 149 657
                        <br />
                        <i className="fa fa-fax fa-lg"></i>: +84 388 149 657
                        <br />
                        <i className="fa fa-envelope fa-lg"></i>:{' '}
                        <a href="mailto:hoangvanbinht37@gmai.com">
                            hoangvanbinht37@gmai.com
                        </a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a
                            className="btn btn-social-icon btn-google"
                            href="http://google.com/+"
                        >
                            <i className="fa fa-google-plus"></i>
                        </a>
                        <a
                            className="btn btn-social-icon btn-facebook"
                            href="http://www.facebook.com/profile.php?id="
                        >
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a
                            className="btn btn-social-icon btn-linkedin"
                            href="http://www.linkedin.com/in/"
                        >
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a
                            className="btn btn-social-icon btn-twitter"
                            href="http://twitter.com/"
                        >
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a
                            className="btn btn-social-icon btn-google"
                            href="http://youtube.com/"
                        >
                            <i className="fa fa-youtube"></i>
                        </a>
                        <a className="btn btn-social-icon" href="mailto:">
                            <i className="fa fa-envelope-o"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <p>© Copyright 2022 Ristorante Con Fusion</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
