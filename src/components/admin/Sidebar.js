import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const { user } = useSelector(state => state.auth); // Get user from Redux state

    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/dashboard"><i className="fa fa-tachometer"></i> Tổng quan</Link>
                    </li>
                    
                    {/* Check if user is admin */}
                    {user && user.role === 'admin' && (
                        <>
                            <li>
                                <Link to="/admin/products"><i className="fa fa-product-hunt"></i> Quản lý sản phẩm</Link>
                            </li>
                            <li>
                                <Link to="/admin/orders"><i className="fa fa-shopping-basket"></i> Quản lý đơn hàng</Link>
                            </li>
                            <li>
                                <Link to="/admin/users"><i className="fa fa-users"></i> Quản lý người dùng</Link>
                            </li>
                            <li>
                                <Link to="/admin/reviews"><i className="fa fa-star"></i> Quản lý bình luận</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;