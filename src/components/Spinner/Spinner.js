import React from 'react';

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(70vh)'
};

const Spinner = ({ latest }) => <>
    <div className="container text-center" style={style}>
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
</>

export default Spinner;
