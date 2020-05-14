import React from "react";

class Contact extends React.Component {
  getGoogleMaps() {
    // If we haven't already defined the promise, define it
    if (!this.googleMapsPromise) {
      this.googleMapsPromise = new Promise((resolve) => {
        // Add a global handler for when the API finishes loading
        window.resolveGoogleMapsPromise = () => {
          // Resolve the promise
          const google = window.google;
          resolve(google);

          // Tidy up
          delete window.resolveGoogleMapsPromise;
        };

        // Load the Google Maps API
        const script = document.createElement("script");
        const API = "AIzaSyAkeyjvj6Ry1BX4KnhCXpI7BMs0pJ6ayLo";
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=resolveGoogleMapsPromise`;
        script.async = true;
        document.body.appendChild(script);
      });
    }

    // Return a promise for the Google Maps API
    return this.googleMapsPromise;
  }

  componentWillMount() {
    // Start Google Maps API loading since we know we'll soon need it
    this.getGoogleMaps();
  }

  componentDidMount() {
    // Once the Google Maps API has finished loading, initialize the map
    this.getGoogleMaps().then((google) => {
      const huhyi = { lat: 22.981134, lng: 120.252958 };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: huhyi,
      });
      const marker = new google.maps.Marker({
        position: huhyi,
        map: map,
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="contact-section-container">
          <div className="contact-info-items">
            <div className="contact-section-title">
              <span>有任何問題歡迎與我們聯繫!</span>
              <span>
                We'd love to hear from you. Send us a message and we'll respond
                as soon as possible.
              </span>
            </div>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6 mt-2">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="姓名 Name"
                  ></input>
                </div>
                <div className="form-group col-md-6 mt-2 ">
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    placeholder="電話 Phone"
                  ></input>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="主旨 Subject"
                ></input>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="您的訊息 Message"
                ></textarea>
              </div>
              <div className="text-center">
                <button type="button" className="btn btn-light mb-5 ">
                  確認送出 Send
                </button>
              </div>
            </form>
          </div>
          <div className="contact-info-items">
            <div id="map"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Contact;
