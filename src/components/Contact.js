import React, { Component } from 'react';

class Contact extends Component {
  render() {
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.contact;
      var contactMe = this.props.resumeBasicInfo.contact;
      var email = this.props.sharedBasicInfo.email;
    }
    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: 'black' }}>
              <span className="text-black" style={{ textAlign: 'center' }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <h3 className="text-center mb-5">{email}</h3>
        <div className="col-md-8 mx-auto d-flex align-items-center justify-content-center">
          <a href={`mailto:${email}`} className="btn btn-lg contact-btn">
            {contactMe}
          </a>
        </div>
      </section>
    );
  }
}

export default Contact;
