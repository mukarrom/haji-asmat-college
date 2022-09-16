import React from 'react';

function Facility() {
  return (
    <div>
      <div className="flex w-full bg-primary">
        <div className="grid h-14 flex-grow card rounded-none place-items-center text-white" />
        <div className="divider gap-1" />
        <div className="grid h-14 flex-grow card rounded-none place-items-center hover:bg-primary_lighter cursor-pointer text-white">
          LIBRARY
        </div>
        <div className="divider gap-1" />
        <div className="grid h-14 flex-grow card rounded-none place-items-center hover:bg-primary_lighter cursor-pointer text-white">
          LAB FACILITY
        </div>
        <div className="divider gap-1" />
        <div className="grid h-14 flex-grow card rounded-none place-items-center hover:bg-primary_lighter cursor-pointer text-white">
          RESEARCH
        </div>
        <div className="divider gap-1" />
        <div className="grid h-14 flex-grow card rounded-none place-items-center hover:bg-primary_lighter cursor-pointer text-white">
          DIGITAL EDUCATION
        </div>
        <div className="divider gap-1" />
        <div className="grid h-14 flex-grow card rounded-none place-items-center hover:bg-primary_lighter cursor-pointer text-white">
          CO-CURRICULAR
        </div>
        <div className="divider gap-1" />
        <div className="grid h-14 flex-grow card rounded-none place-items-center text-white" />
        <div className="divider gap-1" />
      </div>
    </div>
  );
}

export default Facility;
