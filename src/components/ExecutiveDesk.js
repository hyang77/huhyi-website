import React from "react";

function ExecutiveDesk() {
  //import images from folder
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context(
      "../assets/images/desks/desk-executive",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  //loading image
  console.log(images);
  const loadImages = images.map((image) => {
    return <img key={image} src={image} alt="" />;
  });

  return (
    <React.Fragment>
      <div className="title executive-desk-title">主管桌</div>
      <div className="items executive-desk-items">{loadImages}</div>
    </React.Fragment>
  );
}

export default ExecutiveDesk;
