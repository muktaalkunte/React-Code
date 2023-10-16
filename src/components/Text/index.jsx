import React from "react";

const sizeClasses = {
  txtPoppinsMedium8: "font-normal font-poppins",
  txtPoppinsMedium14Black900: "font-normal font-poppins",
  txtPoppinsBold10: "font-bold font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsMedium14Bluegray200: "font-normal font-poppins",
  txtPoppinsRegular12Bluegray90001: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsRegular1664: "font-normal font-poppins",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsSemiBold26: "font-poppins font-semibold",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsRegular14Bluegray90002: "font-normal font-poppins",
  txtPoppinsMedium10: "font-normal font-poppins",
  txtPoppinsSemiBold32: "font-poppins font-semibold",
  txtPoppinsSemiBold22: "font-poppins font-semibold",
  txtPoppinsSemiBold12: "font-poppins font-semibold",
  txtPoppinsMedium16: "font-normal font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
