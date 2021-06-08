import React, { useState } from 'react';
import { Select, Table } from 'antd';
import { useForm, Controller } from 'react-hook-form';

const { Option } = Select;
const columns = [
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
];

const ModuleAddCategoryWisePricing = ({ categories, setCategories }) => {
  const { register, control, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setCategories([
      ...categories,
      {
        key: data.category.toLowerCase(),
        category: data.category,
        price: data.price,
      },
    ]);
    reset();
  };
  return (
    <figure className="ps-block--form-box">
      <figcaption id="categoryWiseCaption">
        <span>Category Wise Pricing</span>
      </figcaption>
      <div className="ps-block__content">
        {categories.length > 0 ? (
          <Table columns={columns} dataSource={categories} pagination={false} />
        ) : null}

        <div className="row" style={{ margin: '2.5rem 0' }}>
          <div className="col-sm-5">
            <div className="form-group">
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select
                    className="ps-ant-dropdown"
                    listItemHeight={20}
                    placeholder="Category"
                    {...field}
                    options={[
                      { value: 'Jeans', label: 'Jeans' },
                      { value: 'T-Shirt', label: 'T-Shirt' },
                      { value: 'Shorts', label: 'Shorts' },
                    ]}
                  />
                )}
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Price Per Unit"
                style={{ height: 41 }}
                {...register('price')}
              />
            </div>
          </div>
          <div className="col-sm-3">
            <button onClick={handleSubmit(onSubmit)} className="ps-btn success">
              Add Category
            </button>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default ModuleAddCategoryWisePricing;
