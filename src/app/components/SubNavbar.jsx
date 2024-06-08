import React from 'react';

const SubNavbar = ({ text }) => {
  return (
    <div className="bg-[#E4C5C5] w-full h-16 flex justify-center items-center"> {/* Ajuste do height para h-20 */}
      <p>{text}</p>
    </div>
  );
};

export default SubNavbar;
