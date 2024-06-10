import React from 'react';

const SubNavbar = ({ text }) => {
  return (
    <div className="bg-[#F5F5DC] w-full h-16 flex justify-center items-center"> {/* Ajuste do height para h-20 */}
      <p>{text}</p>
    </div>
  );
};

export default SubNavbar;
