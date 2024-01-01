import React from "react";

function Headeritem({ name, Icon, keyValue }) {
  return (
    <div
      key={keyValue}
      className="text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline hover:underline-offset-8 mb-2"
    >
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
}

export default Headeritem;
