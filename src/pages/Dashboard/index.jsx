import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  ReactTable,
  SelectBox,
  Text,
} from "components";

const quarterlyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const durationOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardPage = () => {
  const tableData = React.useRef([
    {
      productname: "img_unsplashwh2fhl0veo.png",
      stock: "32 in stock",
      price: "$ 45.99",
      totalsales: "20",
    },
    {
      productname: "img_unsplasha2jnamzag.png",
      stock: "32 in stock",
      price: "$ 45.99",
      totalsales: "20",
    },
    {
      productname: "img_unsplashrazur66vuc.png",
      stock: "32 in stock",
      price: "$ 45.99",
      totalsales: "20",
    },
    {
      productname: "img_unsplashcpccybprfa.png",
      stock: "32 in stock",
      price: "$ 45.99",
      totalsales: "20",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("productname", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-start p-0.5">
            <Img
              className="h-14 md:h-auto ml-[35px] mt-4 object-cover rounded-lg w-[17%]"
              alt="unsplashwh2fhlZero"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[544px] pb-[15px] sm:pl-5 pl-[35px] text-blue_gray-200 text-sm tracking-[-0.14px]"
            size="txtPoppinsMedium14Bluegray200"
          >
            Product Name
          </Text>
        ),
      }),
      tableColumnHelper.accessor("stock", {
        cell: (info) => (
          <Text
            className="pb-[22px] pt-[34px] text-blue_gray-900_02 text-sm tracking-[-0.14px]"
            size="txtPoppinsRegular14Bluegray90002"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[158px] pb-[15px] pl-[18px] text-blue_gray-200 text-sm tracking-[-0.14px]"
            size="txtPoppinsMedium14Bluegray200"
          >
            Stock
          </Text>
        ),
      }),
      tableColumnHelper.accessor("price", {
        cell: (info) => (
          <Text
            className="pb-[18px] pt-[35px] text-base text-black-900 tracking-[-0.16px]"
            size="txtPoppinsMedium16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[123px] pb-[15px] pl-[13px] text-blue_gray-200 text-sm tracking-[-0.14px]"
            size="txtPoppinsMedium14Bluegray200"
          >
            Price
          </Text>
        ),
      }),
      tableColumnHelper.accessor("totalsales", {
        cell: (info) => (
          <Text
            className="pb-[18px] sm:pl-5 pl-7 pt-[35px] text-base text-blue_gray-900_02 tracking-[-0.16px]"
            size="txtPoppinsRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[143px] pb-[15px] text-blue_gray-200 text-sm tracking-[-0.14px]"
            size="txtPoppinsMedium14Bluegray200"
          >
            Total Sales
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[71px] items-start justify-start md:px-5 w-[94%] md:w-full">
          <Sidebar className="!sticky !w-[306px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto shadow-bs1 top-[0]">
            <div className="flex flex-row items-start justify-start ml-7 md:ml-[0] mr-[61px] mt-[35px] w-[71%]">
              <div className="flex flex-row gap-2 items-center justify-start w-[90%]">
                <Img
                  className="h-[37px] w-[37px]"
                  src="defaultNoData.png"
                  alt="settingOne"
                />
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-black-900 tracking-[0.26px]"
                  size="txtPoppinsSemiBold26"
                >
                  ChemPoint
                </Text>
              </div>
              <Text
                className="ml-1 mt-[18px] text-[10px] text-gray-600 tracking-[-0.10px]"
                size="txtPoppinsMedium10"
              >
                v.01
              </Text>
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "8px",
                  width: "100%",
                  gap: "14px",
                  color: "#9197b3",
                  fontWeight: 500,
                  fontSize: "14px",
                  borderRadius: "8px",
                  [`&:hover, &.ps-active`]: {
                    color: "#ffffff",
                    backgroundColor: "#5932eaff !important",
                  },
                },
              }}
              renderExpandIcon={() => (
                <Img
                  className="h-4 w-4"
                  src="defaultNoData.png"
                  alt="arrowright"
                />
              )}
              className="flex flex-col items-center justify-start mt-[52px] sm:px-5 px-7 w-[82%]"
            >
              <MenuItem
                icon={
                  <Img
                    className="h-6 w-6"
                    src="defaultNoData.png"
                    alt="icon24outline"
                  />
                }
              >
                <Text className="tracking-[-0.14px]">IProcess</Text>
              </MenuItem>
              <SubMenu
                icon={
                  <Img
                    className="h-6 my-0.5 w-6"
                    src="images/img_3dsquare1.svg"
                    alt="3dsquareOne"
                  />
                }
                label={<Text className="tracking-[-0.14px]">Submit Issue</Text>}
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    className="h-6 mb-1 w-6"
                    src="defaultNoData.png"
                    alt="usersquareOne"
                  />
                }
                label={
                  <Text className="mt-1 tracking-[-0.14px]">Lookup Issue</Text>
                }
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    className="h-6 my-0.5 w-6"
                    src="images/img_walletmoney2.svg"
                    alt="walletmoneyTwo"
                  />
                }
                label={
                  <Text className="tracking-[-0.14px]">Search Issues</Text>
                }
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    className="h-6 mb-1 w-6"
                    src="defaultNoData.png"
                    alt="discountshapeOne"
                  />
                }
                label={
                  <Text className="mt-1 tracking-[-0.14px]">
                    Knowledge base articles
                  </Text>
                }
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    className="h-6 mb-1 w-6"
                    src="defaultNoData.png"
                    alt="messagequestion"
                  />
                }
                label={<Text className="mt-1 tracking-[-0.14px]">Reports</Text>}
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
            </Menu>
            <Text
              className="mt-[439px] mx-auto text-center text-sm text-white-A700 tracking-[0.14px] w-3/5 sm:w-full"
              size="txtPoppinsSemiBold14"
            >
              Upgrade to PRO to get access all Features!
            </Text>
            <Button className="cursor-pointer font-semibold leading-[normal] min-w-[203px] mt-5 mx-auto text-center text-sm tracking-[0.14px]">
              Get Pro Now!
            </Button>
            <div className="flex flex-row items-center justify-start mb-[76px] mt-[68px] mx-auto w-[82%]">
              <Img
                className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                src="defaultNoData.png"
                alt="ellipseEight"
              />
              <div className="flex flex-col items-start justify-start ml-3">
                <Text
                  className="text-black-900 text-sm tracking-[0.14px]"
                  size="txtPoppinsMedium14Black900"
                >
                  Evano
                </Text>
                <Text
                  className="text-gray-600_01 text-xs tracking-[0.12px]"
                  size="txtPoppinsRegular12"
                >
                  Project Manager
                </Text>
              </div>
              <Img
                className="h-6 ml-[71px] w-6"
                src="defaultNoData.png"
                alt="arrowdown"
              />
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsMedium24"
              >
                Hello Shahrukh👋🏼,
              </Text>
              <Input
                name="search"
                placeholder="Search"
                className="leading-[normal] p-0 placeholder:text-blue_gray-200 text-left text-sm tracking-[-0.14px] w-full"
                wrapClassName="flex sm:flex-1 sm:w-full"
                prefix={
                  <Img
                    className="h-6 mr-2 my-auto"
                    src="defaultNoData.png"
                    alt="search 1"
                  />
                }
              ></Input>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start mt-[23px] p-[31px] sm:px-5 rounded-[30px] shadow-bs1 w-full">
              <List
                className="sm:flex-col flex-row gap-[45.5px] grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(2,_1fr_1px)_1fr] justify-center mb-0.5 pb-0.5 w-[93%]"
                orientation="horizontal"
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row gap-5 items-center justify-between w-full">
                    <div className="bg-gradient  flex flex-col h-[84px] items-center justify-end p-[19px] rounded-[50%] w-[84px]">
                      <Img
                        className="h-[42px] mt-0.5 w-[42px]"
                        src="defaultNoData.png"
                        alt="moneyreciveOne"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[55%]">
                      <Text
                        className="text-gray-500 text-sm tracking-[-0.14px]"
                        size="txtPoppinsRegular14"
                      >
                        Earning
                      </Text>
                      <div className="md:h-[45px] h-[63px] relative w-full">
                        <Text
                          className="absolute left-[0] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 top-[0] tracking-[-0.32px]"
                          size="txtPoppinsSemiBold32"
                        >
                          $198k
                        </Text>
                        <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-start justify-evenly mx-auto w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_arrowup.svg"
                            alt="arrowup"
                          />
                          <Text
                            className="text-blue_gray-900_01 text-xs tracking-[-0.12px]"
                            size="txtPoppinsRegular12Bluegray90001"
                          >
                            <span className="text-green-A700 font-poppins text-left font-bold">
                              37.8%
                            </span>
                            <span className="text-blue_gray-900_01 font-poppins text-left font-normal">
                              {" "}
                              this{" "}
                            </span>
                            <span className="text-blue_gray-900_01 font-poppins text-left font-normal">
                              month
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-[87px] bg-gray-200 w-px" />
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row gap-5 items-center justify-between w-full">
                    <div className="bg-gradient1  flex flex-col h-[84px] items-center justify-end p-5 rounded-[50%] w-[84px]">
                      <Img
                        className="h-[42px] mt-0.5 w-[42px]"
                        src="defaultNoData.png"
                        alt="walletmoneyOne"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[51%]">
                      <Text
                        className="text-gray-500 text-sm tracking-[-0.14px]"
                        size="txtPoppinsRegular14"
                      >
                        Balance
                      </Text>
                      <div className="h-16 md:h-[46px] relative w-full">
                        <Text
                          className="absolute left-[0] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 top-[0] tracking-[-0.32px]"
                          size="txtPoppinsSemiBold32"
                        >
                          $2.4k
                        </Text>
                        <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-start justify-evenly mx-auto w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                          <Text
                            className="text-blue_gray-900_01 text-xs tracking-[-0.12px]"
                            size="txtPoppinsRegular12Bluegray90001"
                          >
                            <span className="text-pink-A700 font-poppins text-left font-bold">
                              2%
                            </span>
                            <span className="text-blue_gray-900_01 font-poppins text-left font-normal">
                              {" "}
                              this{" "}
                            </span>
                            <span className="text-blue_gray-900_01 font-poppins text-left font-normal">
                              month
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-[87px] bg-gray-200 w-px" />
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row gap-5 items-center justify-between w-full">
                    <div className="bg-gradient2  flex flex-col h-[84px] items-center justify-start p-[21px] sm:px-5 rounded-[50%] w-[84px]">
                      <Img
                        className="h-[42px] w-[42px]"
                        src="defaultNoData.png"
                        alt="bagTwentyOne"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-1/2">
                      <Text
                        className="text-gray-500 text-sm tracking-[-0.14px]"
                        size="txtPoppinsRegular14"
                      >
                        Total Sales
                      </Text>
                      <div className="h-16 md:h-[46px] relative w-full">
                        <Text
                          className="absolute left-[0] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 top-[0] tracking-[-0.32px]"
                          size="txtPoppinsSemiBold32"
                        >
                          $89k
                        </Text>
                        <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-start justify-evenly mx-auto w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_arrowup.svg"
                            alt="arrowup"
                          />
                          <Text
                            className="text-blue_gray-900_01 text-xs tracking-[-0.12px]"
                            size="txtPoppinsRegular12Bluegray90001"
                          >
                            <span className="text-green-A700 font-poppins text-left font-bold">
                              11%
                            </span>
                            <span className="text-blue_gray-900_01 font-poppins text-left font-normal">
                              {" "}
                              this week
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex md:flex-col flex-row gap-9 items-center justify-between mt-7 w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[22px] sm:px-5 rounded-[30px] shadow-bs1 w-[65%] md:w-full">
                <div className="flex flex-col items-center justify-start mb-[13px] w-[95%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-[58px] items-start justify-between w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start">
                      <Text
                        className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px]"
                        size="txtPoppinsSemiBold22"
                      >
                        Overview
                      </Text>
                      <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] w-full">
                        <Text
                          className="text-gray-500 text-sm tracking-[-0.14px]"
                          size="txtPoppinsRegular14"
                        >
                          Monthly Earning
                        </Text>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[29px] items-center justify-start mt-[5px] p-[3px]"
                          style={{
                            backgroundImage: "url('images/img_group12.svg')",
                          }}
                        >
                          <div className="flex flex-row gap-1.5 items-center justify-start mb-1 w-[81%] md:w-full">
                            <div
                              className="bg-cover bg-no-repeat flex flex-row h-[7px] items-center justify-center pb-1 pl-1 w-[32%]"
                              style={{
                                backgroundImage: "url('images/img_group3.svg')",
                              }}
                            >
                              <Img
                                className="h-[3px] w-[3px]"
                                src="defaultNoData.png"
                                alt="vector"
                              />
                            </div>
                            <Text
                              className="text-white-A700 text-xs tracking-[-0.12px]"
                              size="txtPoppinsSemiBold12"
                            >
                              35%
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <SelectBox
                      className="sm:flex-1 leading-[normal] mb-8 sm:mt-0 mt-1 text-left text-xs tracking-[-0.12px] w-[22%] sm:w-full"
                      placeholderClassName="text-gray-600_02"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="defaultNoData.png"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupTwentySix"
                      options={quarterlyOptionsList}
                      isSearchable={false}
                      placeholder="Quarterly"
                      color="gray_50_01"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between mt-2 w-full">
                    <div className="bg-gray-100_01 h-[111px] sm:mt-0 mt-24 rounded-lg w-[6%]"></div>
                    <div className="bg-gray-100_01 h-[142px] sm:mt-0 mt-[65px] rounded-lg w-[6%]"></div>
                    <div className="bg-gray-100_01 h-44 sm:mt-0 mt-[31px] rounded-lg w-[6%]"></div>
                    <div className="bg-gray-100_01 h-[131px] sm:mt-0 mt-[76px] rounded-lg w-[6%]"></div>
                    <div className="bg-gray-100_01 h-[94px] sm:mt-0 mt-[113px] rounded-lg w-[6%]"></div>
                    <div className="bg-gray-100_01 h-[131px] sm:mt-0 mt-[76px] rounded-lg w-[6%]"></div>
                    <div className="bg-gray-100_01 h-[142px] sm:mt-0 mt-[65px] rounded-lg w-[6%]"></div>
                    <div className="bg-deep_purple-A400_01 h-[207px] rounded-lg shadow-bs2 w-[8%]"></div>
                    <div className="bg-gray-100_01 h-[181px] sm:mt-0 mt-[26px] rounded-lg w-[6%]"></div>
                    <div className="bg-gray-100_01 h-[152px] sm:mt-0 mt-[55px] rounded-lg w-[6%]"></div>
                    <div className="bg-gray-100_01 h-[111px] sm:mt-0 mt-24 rounded-lg w-[6%]"></div>
                    <div className="bg-gray-100_01 h-[168px] sm:mt-0 mt-[39px] rounded-lg w-[6%]"></div>
                  </div>
                  <div className="flex flex-row items-start justify-between mt-3 w-[97%] md:w-full">
                    <Text
                      className="text-[8px] text-gray-800 tracking-[-0.08px]"
                      size="txtPoppinsMedium8"
                    >
                      Jan
                    </Text>
                    <Text
                      className="text-[8px] text-gray-800 tracking-[-0.08px]"
                      size="txtPoppinsMedium8"
                    >
                      Feb
                    </Text>
                    <Text
                      className="text-[8px] text-gray-800 tracking-[-0.08px]"
                      size="txtPoppinsMedium8"
                    >
                      Mar
                    </Text>
                    <Text
                      className="text-[8px] text-gray-800 tracking-[-0.08px]"
                      size="txtPoppinsMedium8"
                    >
                      Apr
                    </Text>
                    <Text
                      className="text-[8px] text-gray-800 tracking-[-0.08px]"
                      size="txtPoppinsMedium8"
                    >
                      May
                    </Text>
                    <Text
                      className="text-[8px] text-gray-800 tracking-[-0.08px]"
                      size="txtPoppinsMedium8"
                    >
                      Jun
                    </Text>
                    <Text
                      className="h-3 text-[8px] text-gray-800 tracking-[-0.08px]"
                      size="txtPoppinsMedium8"
                    >
                      Jul
                    </Text>
                    <Text
                      className="text-[10px] text-gray-800 tracking-[-0.10px]"
                      size="txtPoppinsBold10"
                    >
                      Aug
                    </Text>
                    <Text
                      className="text-[8px] text-gray-800 tracking-[-0.08px]"
                      size="txtPoppinsMedium8"
                    >
                      Sep
                    </Text>
                    <Text
                      className="text-[8px] text-gray-800 tracking-[-0.08px]"
                      size="txtPoppinsMedium8"
                    >
                      Oct
                    </Text>
                    <Text
                      className="text-[8px] text-gray-800 tracking-[-0.08px]"
                      size="txtPoppinsMedium8"
                    >
                      Nov
                    </Text>
                    <Text
                      className="text-[8px] text-gray-800 tracking-[-0.08px]"
                      size="txtPoppinsMedium8"
                    >
                      Dec
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start p-[23px] sm:px-5 rounded-[30px] shadow-bs1 w-[32%] md:w-full">
                <Text
                  className="ml-3.5 md:ml-[0] text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px]"
                  size="txtPoppinsSemiBold22"
                >
                  Customers
                </Text>
                <Text
                  className="ml-3.5 md:ml-[0] mt-[5px] text-gray-500 text-sm tracking-[-0.14px]"
                  size="txtPoppinsRegular14"
                >
                  Customers that buy products
                </Text>
                <div className="bg-white-A700 md:h-[222px] h-[229px] mb-[19px] ml-3.5 md:ml-[0] mt-[22px] p-[17px] relative rounded-[114px] shadow-bs1 w-[229px]">
                  <div className="absolute h-[181px] inset-[0] justify-center m-auto w-[181px]">
                    <div className="border-[20px] border-gray-100_02 border-solid h-[169px] m-auto rounded-[84px] w-[169px]"></div>
                    <div className="absolute bg-gradient3  h-[181px] inset-[0] justify-center m-auto rounded-[90px] w-[181px]"></div>
                  </div>
                  <div className="absolute bg-gradient4  h-[181px] inset-x-[0] mx-auto rounded-[90px] top-[7%] w-[181px]"></div>
                  <Text
                    className="absolute h-max inset-[0] justify-center m-auto text-[16.64px] text-black-900 text-center tracking-[-0.17px]"
                    size="txtPoppinsRegular1664"
                  >
                    <span className="md:text-[21.76px] sm:text-[19.76px] text-black-900 font-poppins text-[23.76px] font-bold">
                      <>
                        65%
                        <br />
                      </>
                    </span>
                    <span className="text-black-900 font-poppins text-[11.88px] font-normal">
                      Total New Customers
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start mt-7 py-[21px] rounded-[30px] shadow-bs1 w-full">
              <div className="flex flex-col gap-5 items-center justify-start mb-4 w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[92%] md:w-full">
                  <Text
                    className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px]"
                    size="txtPoppinsSemiBold22"
                  >
                    Product Sell
                  </Text>
                  <Input
                    name="groupTwentyFour"
                    placeholder="Search"
                    className="leading-[normal] p-0 placeholder:text-blue_gray-200 text-left text-xs tracking-[-0.12px] w-full"
                    wrapClassName="flex md:ml-[0] ml-[376px] md:mt-0 mt-0.5 rounded-[10px] w-1/4 md:w-full"
                    prefix={
                      <Img
                        className="h-6 mr-2 my-auto"
                        src="defaultNoData.png"
                        alt="search 1"
                      />
                    }
                    color="gray_50_01"
                  ></Input>
                  <SelectBox
                    className="leading-[normal] md:ml-[0] ml-[25px] md:mt-0 mt-0.5 text-left text-xs tracking-[-0.12px] w-[16%] md:w-full"
                    placeholderClassName="text-gray-600_02"
                    indicator={
                      <Img
                        className="h-6 mr-[0] w-6"
                        src="defaultNoData.png"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="duration"
                    options={durationOptionsList}
                    isSearchable={false}
                    placeholder="Last 30 days"
                    color="gray_50_01"
                  />
                </div>
                <div className="overflow-auto w-full">
                  <ReactTable
                    columns={tableColumns}
                    data={tableData.current}
                    rowClass={""}
                    headerClass="border-b border-gray-200_01"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
