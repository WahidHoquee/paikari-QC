import React from 'react';

const FormCreateCategory = ({categoryData}) => {
  return (
    <form className="ps-form ps-form--new" action="index.html" method="get">
      <div className="ps-form__content">
        <div className="form-group">
          <label>
            Order No<sup>*</sup>
          </label>
          <input 
            className="form-control"
            type="text"
            placeholder="Enter Order name"
          />
        </div>
        <div className="form-group">
          <label>
            Reported Date<sup>*</sup>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Reported Date"
          />
        </div>
        <div className="form-group form-group--select">
          <label>Catagory</label>
          <div className="form-group__content">
            

            <select className="ps-select" title="Parent">
              <option value="1"> Select Catagory </option>
            {
              categoryData.map((category , index) => 
                      <option value={index+2}> {category.CategoryName} </option>
                      )
                    }
            </select>
            
          </div>
        </div>
        <div className="form-group">
          <label>QC Report</label>
          <textarea
            className="form-control"
            rows="6"
            placeholder="Enter QC Report"
          ></textarea>
        </div>
      </div>
      <div className="ps-form__bottom">
        <button className="ps-btn ps-btn--gray">Reset</button>
        <button className="ps-btn ps-btn--sumbit success">Submit</button>
      </div>
    </form>
  );
};

export default FormCreateCategory;
