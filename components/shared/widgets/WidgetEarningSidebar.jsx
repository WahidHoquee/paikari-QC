import React, { useState } from 'react';

const WidgetEarningSidebar = () => {
  const [active, setactive] = useState(true);

  const clickHandle = () => {
    setactive((prevState) => !prevState);
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <button
        onClick={clickHandle}
        className="ps-btn ps-btn--sumbit success"
        style={{ borderRadius: 20, background: active ? '#80bc00' : '#dd3b3b' }}
      >
        Turn off {active ? 'Active' : 'InActive'} Status
      </button>
    </div>
  );
};

export default WidgetEarningSidebar;
