// components/Notification.js

import React from 'react';

const Notification = ({ message }) => {
  return (
    <div className="fixed top-0 right-0 m-4 p-4 bg-green-500 text-white rounded shadow-lg z-50">
      {message}
    </div>
  );
};

export default Notification;
