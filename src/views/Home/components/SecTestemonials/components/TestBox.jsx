import React from 'react';

import '../assets/css/styles.css'

const TestBox = (props) => {
    return (
        <div className="test-container d-flex flex-column col">
            <div className="test-text text-justify p-color p-4 mb-3">
                <p>{props.text}</p>
            </div>
            <div className="person d-flex">
                <div className="test-image">
                    <img src={props.photo} alt="Foto de rosto" className="photo"/>
                </div>
                <div className="name text-justify px-2">
                    <h5 className="font-weight-bold">{props.name}</h5>
                    <p className="profession">{props.profession}</p>
                </div>
            </div>
        </div>

    );
}

export default TestBox;