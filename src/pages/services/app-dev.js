import React, { Component  } from "react";
import Layout from '../../components/layout';
import ServicesList from '../../components/services-list';
import ContactForm from '../../components/contact-form';


import serviceImage1 from "../../static/images/services/single_service_img1.png";
import serviceImage2 from "../../static/images/services/single_service_img2.png";
import serviceImage3 from "../../static/images/services/single_service_img3.png";

const WebsiteDevelopment = () => {
    const fields = {
        name: true,
        email: true,
        contactno: true,
        city: true,
        request: true
    };
    return(
        <Layout>
        <div id="banner-area" className="banner-area bg-overlay case-bg-overlay">
                  <div className="container">
                      <div className="row">
                          <div className="col-sm-12">
                              <div className="banner-heading">
                                  <h1 className="banner-title">
                                     App Dev
                                  </h1>
                              </div>
                          </div>
                          {/* Col end */}
                      </div>
                      {/* Row end */}
                  </div>
                  {/* Container end */}
              </div>
        {/* Banner area end */}
        <section id="tw-features-contact" className="tw-features-contact">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <div className="section-heading text-center">
                        <h2>Why does my business need a mobile application?</h2>
                        <span className="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40" />
                    </div>
                    <div className="tw-features-contact-info">
                    <p>
                        Today, the world is moving towards mobile devices. Through an app, you offer your target audiences a convenient way of reaching out to you.
                    </p>
                    <p>
                        You can send out notifications, announcements, birthday wishes, exclusive offers and engage with your customers easily and regularly via Mobile App.
                    </p>
                    <p>
                        You can also collect precious customer data through an app. We can help you design, develop and upgrade your app on both iOS as well as Android devices.
                    </p>
                    <p>
                        Hybrid apps through frameworks like ionic help you go to market in very less time.
                    </p>
                </div>
                </div>
                <div className="col-md-6" id="services-form-section">
                    <div className="section-heading text-center">
                        <h2>Let's Get Started</h2>
                        <span className="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40" />
                    </div>
                    <div className="contact-us-form service-contact-form">
                        <ContactForm subjectText="New Message On Services Page" fields={fields} labelClass="text-dark" submitButtonText="Submit" formName="services" />
                    {/* Form end */}
                    </div>
                    {/* Contact us form end */}
                </div>
                {/* Col End */}
                </div>
                {/* Row End */}
            </div>
            {/* Container End */}
            </section>
            {/* Feature Contact Us end */}

            <section id="main-container" className="main-container">
                <div className="container">
                    {/* 1st Content Row End */}
                    <div className="row">
                        <div className="col-md-6 ml-auto align-self-md-center">
                        <img src={serviceImage2} alt="website development" className="img-fluid analytics-img" />
                        </div>
                        {/* Col End */}
                        <div className="col-md-6 align-self-center">
                            <div className="tw-web-analytics-content">
                                <div className="section-heading text-center" style={{marginBottom: "0px"}}>
                                    <h2>How can I do Digital Marketing for my business?</h2>
                                    <span className="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40" />
                                </div>
                                <p>
                                    There are two main approaches to Digital Marketing :
                                    <br />
                                    1. Organic (Long-term gains)
                                    <br />
                                    2. Paid (Short-term gains) 
                                    <br />
                                    SEO (Search Engine Optimisation), link-building, blogging, updating the website with relevant content and several other activities are required for growing your reach organically.
                                    <br />
                                    SEM (Search Engine Marketing), SMM (Social Media Marketing), Search and Display Ads on LinkedIn and several other activities comprise the Paid Approach.
                                    <br />
                                    Understand in more depth how a Digital Marketing Campaign can be designed for your business.
                                    <a href="#services-form-section" className="tw-readmore">
                                            Book A Complimentary Consultation or Request a Call-back 
                                        <i className="fa fa-angle-right"></i>
                                    </a>
                                </p>
                            </div>
                            {/* Analytics Content End */}
                        </div>
                        {/* Col End */}
                    </div>
                    {/* 2nd Content Row End */}
                    <div className="row d-none">
                        {/* Col End */}
                        <div className="col-md-6 ml-auto align-self-center">
                        <div className="tw-web-analytics-content">
                            <i className="icon icon-target" />
                            <h3>Improve website’s performance</h3>
                            <span className="bottom-border tw-mt-20 tw-mb-30" />
                            <p>
                                Digital Marketing is for everyone. You decide your budget upfront and then design campaigns accordingly. 
                                It let's you define your target audience very precisely. You can run your campaigns for a longer period of time at lesser costs.
                            </p>
                        </div>
                        {/* Analytics Content End */}
                        </div>
                    
                        <div className="col-md-6 ml-auto align-self-center">
                        <div className="tw-web-analytics-content">
                            <i className="icon icon-target" />
                            <h3>Improve website’s performance</h3>
                            <span className="bottom-border tw-mt-20 tw-mb-30" />
                            <p>
                                Digital Marketing is for everyone. You decide your budget upfront and then design campaigns accordingly. 
                                It let's you define your target audience very precisely. You can run your campaigns for a longer period of time at lesser costs.
                            </p>
                        </div>
                        {/* Analytics Content End */}
                        </div>
                    </div>
                    {/* 3rd Content Row End */}
                </div>
                {/* Container End */}
            </section>
        <ServicesList />
      </Layout>
    )
}

export default WebsiteDevelopment;
