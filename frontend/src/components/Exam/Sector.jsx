import React from 'react';

const Sector = ({ sector, onClick }) => {
  return (
    <button 
      className="p-4 bg-gray-200 hover:bg-gray-300 rounded m-2"
      onClick={() => onClick(sector.id)}
    >
      {sector.name}
    </button>
  );
};

export default Sector;