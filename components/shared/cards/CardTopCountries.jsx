import React from 'react';

const CardTopCountries = () => (
  <section className="ps-card ps-card--top-country">
    <div className="ps-card__header">
      <h4>Top QC Customers</h4>
    </div>
    <div className="ps-card__content">
      <div className="row">
        <div className="col-6">
          <figure className="organge">
            <figcaption>Nepal</figcaption>
            <strong>80%</strong>
          </figure>
        </div>
        <div className="col-6">
          <figure className="red">
            <figcaption>Egypt</figcaption>
            <strong>65%</strong>
          </figure>
        </div>
        <div className="col-6">
          <figure className="green">
            <figcaption>South Korea</figcaption>
            <strong>65%</strong>
          </figure>
        </div>
        <div className="col-6">
          <figure className="cyan">
            <figcaption>Saudi Arabia</figcaption>
            <strong>35%</strong>
          </figure>
        </div>
      </div>
      <img src="/img/map-and-bundle.png" alt="" />
      <p>We only started collecting region data from January 2015</p>
    </div>
  </section>
);

export default CardTopCountries;
