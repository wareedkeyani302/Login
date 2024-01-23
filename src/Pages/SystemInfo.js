import React from 'react';
import SystemData from './SystemData';

const SystemInfo = () => {
  return (
    <div className='container'>
      <h1>Here is the system info</h1>
      <ul className='system-info'>
        {SystemData.map((system, index) => (
          <li key={index} className='info-item'>
            <strong>IP Address:</strong> {system.ipAddress}<br />
            <strong>RAM:</strong> {system.ram}<br />
            <strong>System Name:</strong> {system.systemName}<br />
            <strong>System Type:</strong> {system.systemType}<br />
            <strong>Domain:</strong> {system.domain}<br />
            <strong>Processor:</strong> {system.Processor}<br />
            <strong>Logical Processor:</strong> {system.logicalProcessor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SystemInfo;

