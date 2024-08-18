import React from "react";
import propTypes from "prop-types" 
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({ children }) => {
  
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};


Layout.propTypes = {
  children: propTypes.node.isRequired,
}

export default Layout;
