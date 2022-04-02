import React from "react";
import "./assets/css/styles.css";

const BotoesProfissional = () => {
  return (

<div id="buttons" className="d-flex justify-content-center mb-3">
<a href="/">
  <div id="x" className="all-btn">
    <i className="bi bi-x-circle"></i>&nbsp; Desconsiderar
  </div>
</a>
<a href="/">
  <div id="heart" className="all-btn">
    <i className="bi bi-heart-fill"></i>&nbsp; Gostei
  </div>
</a>
<a href="/">
  <div id="star" className="all-btn">
    <i className="bi bi-star"></i>&nbsp; Favoritar
  </div>
</a>
</div>
  );
}

export default BotoesProfissional;