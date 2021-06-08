import Axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/client';

import ModuleAddCategoryWisePricing from '~/components/partials/ModuleAddCategoryWisePricing';

const FormAccountSettings = ({ categories, setCategories }) => {
  const { register, handleSubmit } = useForm();
  const [session] = useSession();
  const onSubmit = (data) => {
    Axios.post('http://localhost:4000/qc/profile', {
      ...data,
      categories,
      userType: session.user.image,
      userId: session.user.name,
    });
  };
  return (
    <form
      className="ps-form--account-settings"
      action="index.html"
      method="get"
    >
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label>Company Name</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('companyName')}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>TIIN Number</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('tiin')}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Phone Number</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('phone')}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('email')}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>No of Team Members</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('members')}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Address</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('address')}
            />
          </div>
        </div>
        <div className="col-sm-12">
          <ModuleAddCategoryWisePricing
            categories={categories}
            setCategories={setCategories}
          />
        </div>
      </div>
      <div className="ps-form__submit text-center">
        <button className="ps-btn ps-btn--gray mr-3">Cancel</button>
        <button onClick={handleSubmit(onSubmit)} className="ps-btn success">
          Update Profile
        </button>
      </div>
    </form>
  );
};

export default FormAccountSettings;
