import React from "react";

const Navbar = () => {
    return (
        
        <div className="container p-1">
            <div className="d-flex justify-content-between mb-3">

                <div className="btn-group btn-group-sm">
                    <button type="button" className="btn btn-primary">Day</button>
                    <button type="button" className="btn btn-primary">Week</button>
                    <button type="button" className="btn btn-primary">Month</button>
                </div>
                
                <div className="btn-group btn-group-sm">
                    <button type="button" className="btn btn-success">L</button>
                    <button type="button" className="btn btn-success">*</button>
                    <button type="button" className="btn btn-success">R</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;