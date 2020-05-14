import React from "react";

function Contact() {
  return (
    <React.Fragment>
      <div className="contact-section-title">
        <span>有何問題歡迎與我們聯繫!</span>
        <span>
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </span>
      </div>
      <div className="contact-section-container">
        <div className="contact-info-items">
          <form>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="姓名(Name)"
                ></input>
              </div>
              <div className="col">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                ></input>
              </div>
              <div className="col">
                <input
                  type="number"
                  className="form-control"
                  placeholder="電話(Phone)"
                ></input>
              </div>
            </div>
            <div className="row">
              <input
                type="number"
                className="form-control mb-4"
                placeholder="主旨(Subject)"
              ></input>
            </div>
            <div className="row">
              <textarea
                className="form-control mb-4"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="您的訊息(Your message)"
              ></textarea>
            </div>
          </form>
          <button type="button" className="btn btn-light mb-5">
            確認送出 Send
          </button>
        </div>
        <div className="contact-info-items"></div>
        
      </div>
    </React.Fragment>
  );
}
export default Contact;
