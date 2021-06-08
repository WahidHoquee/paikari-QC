import React, { useState } from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import styles from './ProfileInformation.module.scss';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

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

const dataSource = [
  {
    key: '1',
    category: 'Shirt',
    price: 60,
  },
  {
    key: '1',
    category: 'Pant',
    price: 100,
  },
];

const ProfileInformation = ({ settingsInfo }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const {
    CompanyName,
    Email,
    NoOfMember,
    Phone,
    ProfilePicture,
    Address,
    TIIN,
  } = settingsInfo;

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImageUrl(imageUrl);
        setLoading(false);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <form className="ps-form ps-form--new" action="index.html" method="get">
      <div className="ps-card__header">
        <h4>Profile Information</h4>
      </div>
      <div className="form-group">
        <label>
          Profile Picture<sup style={{ color: 'red' }}>*</sup>
        </label>
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
          ) : (
            uploadButton
          )}
        </Upload>
      </div>

      <ul className={styles.profile_info}>
        <li>
          <h5>Company Name</h5>
          {CompanyName}
        </li>
        <li>
          <h5>TIIN Number</h5>
          {TIIN}
        </li>
        <li>
          <h5>Phone Number</h5>
          {Phone}
        </li>
        <li>
          <h5>Email</h5>
          {Email}
        </li>
        <li>
          <h5>Team Members</h5>
          {NoOfMember}
        </li>
        <li>
          <h5 style={{ display: 'block' }}>Address</h5>
          {Address}
        </li>
      </ul>
      {/* <Table columns={columns} dataSource={dataSource} pagination={false} /> */}

      {/* <div className="ps-form__content">
        <div className="form-group">
          <label>
            Profile Picture<sup style={{ color: 'red' }}>*</sup>
          </label>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </div>
        <div className="form-group">
          <label>
            Profile Name<sup>*</sup>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Profile Name"
          />
        </div>
      </div> */}
      {/* <div className="ps-form__bottom">
        <button className="ps-btn ps-btn--gray">Reset</button>
        <button className="ps-btn ps-btn--sumbit success">Submit</button>
      </div> */}
    </form>
  );
};

export default ProfileInformation;
