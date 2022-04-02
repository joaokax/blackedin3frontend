import React from 'react';

const FeatureBox = (props) => (
    <div className="box p-4">
        <i className="icon">{props.icon}</i>
        <h3 className="box-title">{props.boxTitle}</h3>
        <p className="p-color desc">{props.desc}</p>
        <a class="learn-more" href="*">saiba mais »</a>
    </div>
)

const FeatureBoxRed = (props) => (
    <div className="box pb-3">
        <i className="icon-red">{props.icon}</i>
        <h3 className="box-title">{props.boxTitle}</h3>
        <p className="p-color desc">{props.desc}</p>
        <a class="learn-more" href="*">saiba mais »</a>
    </div>
)
 
export {
    FeatureBox,
    FeatureBoxRed
}
