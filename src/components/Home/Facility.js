import React from "react";

const Facility = () => {
  return (
    <div>
      <div class="flex w-full bg-primary">
        <div class="grid h-14 flex-grow card rounded-none place-items-center text-white"></div>
        <div class="divider gap-1"></div>
        <div class="grid h-14 flex-grow card rounded-none place-items-center hover:bg-primary_lighter cursor-pointer text-white">
          LIBRARY
        </div>
        <div class="divider gap-1"></div>
        <div class="grid h-14 flex-grow card rounded-none place-items-center hover:bg-primary_lighter cursor-pointer text-white">
          LAB FACILITY
        </div>
        <div class="divider gap-1"></div>
        <div class="grid h-14 flex-grow card rounded-none place-items-center hover:bg-primary_lighter cursor-pointer text-white">
          RESEARCH
        </div>
        <div class="divider gap-1"></div>
        <div class="grid h-14 flex-grow card rounded-none place-items-center hover:bg-primary_lighter cursor-pointer text-white">
          DIGITAL EDUCATION
        </div>
        <div class="divider gap-1"></div>
        <div class="grid h-14 flex-grow card rounded-none place-items-center hover:bg-primary_lighter cursor-pointer text-white">
          CO-CURRICULAR
        </div>
        <div class="divider gap-1"></div>
        <div class="grid h-14 flex-grow card rounded-none place-items-center text-white"></div>
        <div class="divider gap-1"></div>
      </div>
    </div>
  );
};

export default Facility;
