import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const MobileSidebar = () => {
  const [clicked, setClicked] = useState(true);
  const [liclicked, setLiClicked] = useState({
    dash: false,
    links: false,
    summ: false,
    details: false,
  });
  const handleToggle = () => {
    console.log("clicked!");
    setClicked(!clicked);
  };
  
  const handleClick = (section) => {
    if (liclicked.dash) setLiClicked(!liclicked.dash);
    if (liclicked.links) setLiClicked(!liclicked.links);
    if (liclicked.summ) setLiClicked(!liclicked.summ);
    if (liclicked.details) setLiClicked(!liclicked.details);
    setLiClicked((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  
  return (
    <div>
      <aside
          id="sidebar"
          className={`w-${clicked ? "80" : "24"} 
          ${ window.innerWidth > 768 ? 'hidden' : 'block bg-white w-full h-screen left-0 absolute'}
           h-120 text-xl border-r border-gray-700 `}
        >
          <FontAwesomeIcon
            icon={clicked ? faArrowLeft : faArrowRight}
            onClick={handleToggle}
            className={`toggleButton text-2xl px-6 pb-0 mb-0 mt-4`}
          />
          {clicked ? (
            <ul className="mt-4 border-t-2 space-y-2">
              <li
                className={` ${
                  liclicked.dash ? "text-green-600" : ""
                } p-4 pl-16 mt-2`}
                onClick={() => handleClick("dash")}
              >
                <a href="#" className="hover:text-green-600 flex items-center">
                  <svg
                    className="inline-block mb-1 mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={` ${
                        liclicked.dash ? "fill-green-600" : ""
                      } hover:fill-green-700`}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H5.25C6.04565 0 6.80871 0.316071 7.37132 0.87868C7.93393 1.44129 8.25 2.20435 8.25 3V5.25C8.25 6.04565 7.93393 6.80871 7.37132 7.37132C6.80871 7.93393 6.04565 8.25 5.25 8.25H3C2.20435 8.25 1.44129 7.93393 0.87868 7.37132C0.316071 6.80871 0 6.04565 0 5.25V3ZM9.75 3C9.75 2.20435 10.0661 1.44129 10.6287 0.87868C11.1913 0.316071 11.9544 0 12.75 0H15C15.7956 0 16.5587 0.316071 17.1213 0.87868C17.6839 1.44129 18 2.20435 18 3V5.25C18 6.04565 17.6839 6.80871 17.1213 7.37132C16.5587 7.93393 15.7956 8.25 15 8.25H12.75C11.9544 8.25 11.1913 7.93393 10.6287 7.37132C10.0661 6.80871 9.75 6.04565 9.75 5.25V3ZM0 12.75C0 11.9544 0.316071 11.1913 0.87868 10.6287C1.44129 10.0661 2.20435 9.75 3 9.75H5.25C6.04565 9.75 6.80871 10.0661 7.37132 10.6287C7.93393 11.1913 8.25 11.9544 8.25 12.75V15C8.25 15.7956 7.93393 16.5587 7.37132 17.1213C6.80871 17.6839 6.04565 18 5.25 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.316071 16.5587 0 15.7956 0 15V12.75ZM9.75 12.75C9.75 11.9544 10.0661 11.1913 10.6287 10.6287C11.1913 10.0661 11.9544 9.75 12.75 9.75H15C15.7956 9.75 16.5587 10.0661 17.1213 10.6287C17.6839 11.1913 18 11.9544 18 12.75V15C18 15.7956 17.6839 16.5587 17.1213 17.1213C16.5587 17.6839 15.7956 18 15 18H12.75C11.9544 18 11.1913 17.6839 10.6287 17.1213C10.0661 16.5587 9.75 15.7956 9.75 15V12.75Z"
                      fill="#262626"
                    />
                  </svg>
                  <span className="mb-1 ml-5">My Dashboard</span>
                  <svg
                    className="ml-auto"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="hover:fill-green-700"
                      d="M8.25 4.5L15.75 12L8.25 19.5"
                      stroke="#262626"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                </a>
              </li>
              <hr className="border-t-2 border-gray-300"/>
              <li
                className={` ${
                  liclicked.links ? "text-green-600" : ""
                } p-4 pl-16 border-b-2`}
                onClick={() => handleClick("links")}
              >
                <a href="#" className="hover:text-green-600 flex items-center">
                  <svg
                    className="inline-block mb-1 mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_517_653)">
                      <path
                        className={` ${
                          liclicked.links ? "fill-green-600" : ""
                        } hover:fill-green-700`}
                        d="M13.0612 8.11023L14.4762 9.52523C15.1263 10.1753 15.642 10.947 15.9938 11.7963C16.3457 12.6456 16.5267 13.5559 16.5267 14.4752C16.5267 15.3945 16.3457 16.3049 15.9938 17.1542C15.642 18.0035 15.1263 18.7752 14.4762 19.4252L14.1222 19.7782C12.8094 21.0911 11.0288 21.8286 9.17223 21.8286C7.31562 21.8286 5.53505 21.0911 4.22223 19.7782C2.90941 18.4654 2.17188 16.6848 2.17188 14.8282C2.17187 12.9716 2.90941 11.1911 4.22223 9.87823L5.63723 11.2932C5.1696 11.7568 4.79814 12.3081 4.54416 12.9156C4.29018 13.5231 4.1587 14.1748 4.15726 14.8333C4.15582 15.4917 4.28445 16.144 4.53576 16.7526C4.78707 17.3612 5.15612 17.9142 5.62171 18.3798C6.08731 18.8453 6.64028 19.2144 7.24889 19.4657C7.8575 19.717 8.50975 19.8456 9.1682 19.8442C9.82665 19.8428 10.4783 19.7113 11.0858 19.4573C11.6933 19.2033 12.2447 18.8319 12.7082 18.3642L13.0622 18.0102C13.9996 17.0726 14.5262 15.8011 14.5262 14.4752C14.5262 13.1494 13.9996 11.8779 13.0622 10.9402L11.6472 9.52523L13.0622 8.11123L13.0612 8.11023ZM19.7792 14.1212L18.3652 12.7072C18.8329 12.2437 19.2043 11.6923 19.4583 11.0848C19.7123 10.4773 19.8438 9.82565 19.8452 9.1672C19.8466 8.50875 19.718 7.8565 19.4667 7.24789C19.2154 6.63928 18.8463 6.08631 18.3808 5.62071C17.9152 5.15512 17.3622 4.78607 16.7536 4.53476C16.145 4.28345 15.4927 4.15482 14.8343 4.15626C14.1758 4.1577 13.5241 4.28919 12.9166 4.54316C12.3091 4.79714 11.7578 5.1686 11.2942 5.63623L10.9402 5.99023C10.0029 6.92787 9.4763 8.19941 9.4763 9.52523C9.4763 10.8511 10.0029 12.1226 10.9402 13.0602L12.3552 14.4752L10.9402 15.8892L9.52623 14.4752C8.87615 13.8252 8.36047 13.0535 8.00864 12.2042C7.65681 11.3549 7.47573 10.4445 7.47573 9.52523C7.47573 8.60592 7.65681 7.69561 8.00864 6.84628C8.36047 5.99696 8.87615 5.22525 9.52623 4.57523L9.88023 4.22223C11.1931 2.90941 12.9736 2.17188 14.8302 2.17188C16.6868 2.17188 18.4674 2.90941 19.7802 4.22223C21.0931 5.53505 21.8306 7.31562 21.8306 9.17223C21.8306 11.0288 21.0931 12.8094 19.7802 14.1222L19.7792 14.1212Z"
                        fill="#262626"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_517_653">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="mb-1 ml-5">TOTM links</span>
                  <svg
                    className="ml-auto"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.25 4.5L15.75 12L8.25 19.5"
                      stroke="#262626"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                </a>
              </li>
              <li
                className={` ${
                  liclicked.summ ? "text-green-600" : ""
                } p-4 pl-16  border-b-2`}
                onClick={() => handleClick("summ")}
              >
                <a href="#" className="hover:text-green-600 flex items-center">
                  <svg
                    className="inline-block mb-1 mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z"
                      fill="#262626"
                    />
                    <path
                      d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z"
                      fill="#262626"
                    />
                    <path
                      d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z"
                      fill="#262626"
                    />
                    <path
                      d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z"
                      fill="#262626"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z"
                      fill="#262626"
                    />
                  </svg>
                  <span className="mb-1 ml-5">Daily Summary</span>
                  <svg
                    className="ml-auto"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.25 4.5L15.75 12L8.25 19.5"
                      stroke="#262626"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                </a>
              </li>
              <li
                className={` ${
                  liclicked.details ? "text-green-600" : ""
                } p-4 pl-16 border-b-2`}
                onClick={() => handleClick("details")}
              >
                <a href="#" className="hover:text-green-600  flex items-center">
                  <svg
                    className="inline-block mb-1 mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_517_661)">
                      <path
                        d="M12.0003 0L21.9153 4.5H23.2503C23.4492 4.5 23.6399 4.57902 23.7806 4.71967C23.9212 4.86032 24.0003 5.05109 24.0003 5.25V8.25C24.0003 8.44891 23.9212 8.63968 23.7806 8.78033C23.6399 8.92098 23.4492 9 23.2503 9H22.5003V19.5C22.6678 19.5001 22.8304 19.5563 22.9622 19.6596C23.0941 19.7629 23.1876 19.9074 23.2278 20.07L23.9778 23.07C24.0057 23.1805 24.008 23.2959 23.9844 23.4074C23.9609 23.5189 23.9121 23.6235 23.8419 23.7133C23.7717 23.803 23.6819 23.8755 23.5793 23.9252C23.4768 23.9749 23.3642 24.0005 23.2503 24H0.750264C0.636311 24.0005 0.523753 23.9749 0.421207 23.9252C0.318661 23.8755 0.228845 23.803 0.158634 23.7133C0.0884218 23.6235 0.0396755 23.5189 0.0161256 23.4074C-0.00742429 23.2959 -0.00515347 23.1805 0.0227643 23.07L0.772764 20.07C0.813201 19.9075 0.906738 19.7632 1.03853 19.6599C1.17033 19.5567 1.33283 19.5004 1.50026 19.5V9H0.750264C0.551352 9 0.360586 8.92098 0.219934 8.78033C0.0792819 8.63968 0.000264278 8.44891 0.000264278 8.25V5.25C0.000264278 5.05109 0.0792819 4.86032 0.219934 4.71967C0.360586 4.57902 0.551352 4.5 0.750264 4.5H2.08526L12.0003 0ZM5.66576 4.5H18.3363L12.0003 1.5L5.66576 4.5ZM3.00026 9V19.5H4.50026V9H3.00026ZM6.00026 9V19.5H9.75026V9H6.00026ZM11.2503 9V19.5H12.7503V9H11.2503ZM14.2503 9V19.5H18.0003V9H14.2503ZM19.5003 9V19.5H21.0003V9H19.5003ZM22.5003 7.5V6H1.50026V7.5H22.5003ZM21.9153 21H2.08526L1.71026 22.5H22.2903L21.9153 21Z"
                        fill="#2E8362"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_517_661">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className="mb-1 ml-5">Bank Details</span>
                  <svg
                    className="ml-auto"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.25 4.5L15.75 12L8.25 19.5"
                      stroke="#262626"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          ) : (
            <ul className="mt-4 space-y-2">
              <li className="pl-8 p-4 flex justify-center items-center m-0">
                <svg
                  className="inline-block mb-1 mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="hover:fill-green-700"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H5.25C6.04565 0 6.80871 0.316071 7.37132 0.87868C7.93393 1.44129 8.25 2.20435 8.25 3V5.25C8.25 6.04565 7.93393 6.80871 7.37132 7.37132C6.80871 7.93393 6.04565 8.25 5.25 8.25H3C2.20435 8.25 1.44129 7.93393 0.87868 7.37132C0.316071 6.80871 0 6.04565 0 5.25V3ZM9.75 3C9.75 2.20435 10.0661 1.44129 10.6287 0.87868C11.1913 0.316071 11.9544 0 12.75 0H15C15.7956 0 16.5587 0.316071 17.1213 0.87868C17.6839 1.44129 18 2.20435 18 3V5.25C18 6.04565 17.6839 6.80871 17.1213 7.37132C16.5587 7.93393 15.7956 8.25 15 8.25H12.75C11.9544 8.25 11.1913 7.93393 10.6287 7.37132C10.0661 6.80871 9.75 6.04565 9.75 5.25V3ZM0 12.75C0 11.9544 0.316071 11.1913 0.87868 10.6287C1.44129 10.0661 2.20435 9.75 3 9.75H5.25C6.04565 9.75 6.80871 10.0661 7.37132 10.6287C7.93393 11.1913 8.25 11.9544 8.25 12.75V15C8.25 15.7956 7.93393 16.5587 7.37132 17.1213C6.80871 17.6839 6.04565 18 5.25 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.316071 16.5587 0 15.7956 0 15V12.75ZM9.75 12.75C9.75 11.9544 10.0661 11.1913 10.6287 10.6287C11.1913 10.0661 11.9544 9.75 12.75 9.75H15C15.7956 9.75 16.5587 10.0661 17.1213 10.6287C17.6839 11.1913 18 11.9544 18 12.75V15C18 15.7956 17.6839 16.5587 17.1213 17.1213C16.5587 17.6839 15.7956 18 15 18H12.75C11.9544 18 11.1913 17.6839 10.6287 17.1213C10.0661 16.5587 9.75 15.7956 9.75 15V12.75Z"
                    fill="#262626"
                  />
                </svg>
              </li>
              <li className="pl-8 p-4 flex justify-center items-center m-0">
                <svg
                  className="inline-block mb-1 mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_517_653)">
                    <path
                      className="hover:fill-green-700"
                      d="M13.0612 8.11023L14.4762 9.52523C15.1263 10.1753 15.642 10.947 15.9938 11.7963C16.3457 12.6456 16.5267 13.5559 16.5267 14.4752C16.5267 15.3945 16.3457 16.3049 15.9938 17.1542C15.642 18.0035 15.1263 18.7752 14.4762 19.4252L14.1222 19.7782C12.8094 21.0911 11.0288 21.8286 9.17223 21.8286C7.31562 21.8286 5.53505 21.0911 4.22223 19.7782C2.90941 18.4654 2.17188 16.6848 2.17188 14.8282C2.17187 12.9716 2.90941 11.1911 4.22223 9.87823L5.63723 11.2932C5.1696 11.7568 4.79814 12.3081 4.54416 12.9156C4.29018 13.5231 4.1587 14.1748 4.15726 14.8333C4.15582 15.4917 4.28445 16.144 4.53576 16.7526C4.78707 17.3612 5.15612 17.9142 5.62171 18.3798C6.08731 18.8453 6.64028 19.2144 7.24889 19.4657C7.8575 19.717 8.50975 19.8456 9.1682 19.8442C9.82665 19.8428 10.4783 19.7113 11.0858 19.4573C11.6933 19.2033 12.2447 18.8319 12.7082 18.3642L13.0622 18.0102C13.9996 17.0726 14.5262 15.8011 14.5262 14.4752C14.5262 13.1494 13.9996 11.8779 13.0622 10.9402L11.6472 9.52523L13.0622 8.11123L13.0612 8.11023ZM19.7792 14.1212L18.3652 12.7072C18.8329 12.2437 19.2043 11.6923 19.4583 11.0848C19.7123 10.4773 19.8438 9.82565 19.8452 9.1672C19.8466 8.50875 19.718 7.8565 19.4667 7.24789C19.2154 6.63928 18.8463 6.08631 18.3808 5.62071C17.9152 5.15512 17.3622 4.78607 16.7536 4.53476C16.145 4.28345 15.4927 4.15482 14.8343 4.15626C14.1758 4.1577 13.5241 4.28919 12.9166 4.54316C12.3091 4.79714 11.7578 5.1686 11.2942 5.63623L10.9402 5.99023C10.0029 6.92787 9.4763 8.19941 9.4763 9.52523C9.4763 10.8511 10.0029 12.1226 10.9402 13.0602L12.3552 14.4752L10.9402 15.8892L9.52623 14.4752C8.87615 13.8252 8.36047 13.0535 8.00864 12.2042C7.65681 11.3549 7.47573 10.4445 7.47573 9.52523C7.47573 8.60592 7.65681 7.69561 8.00864 6.84628C8.36047 5.99696 8.87615 5.22525 9.52623 4.57523L9.88023 4.22223C11.1931 2.90941 12.9736 2.17188 14.8302 2.17188C16.6868 2.17188 18.4674 2.90941 19.7802 4.22223C21.0931 5.53505 21.8306 7.31562 21.8306 9.17223C21.8306 11.0288 21.0931 12.8094 19.7802 14.1222L19.7792 14.1212Z"
                      fill="#262626"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_517_653">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </li>
              <li className="pl-8 p-4 flex justify-center items-center m-0">
                <svg
                  className="inline-block mb-1 mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z"
                    fill="#262626"
                  />
                  <path
                    d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z"
                    fill="#262626"
                  />
                  <path
                    d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z"
                    fill="#262626"
                  />
                  <path
                    d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z"
                    fill="#262626"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z"
                    fill="#262626"
                  />
                </svg>
              </li>
              <li className="pl-8 p-4 flex justify-center items-center m-0">
                <svg
                  className="inline-block mb-1 mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_517_661)">
                    <path
                      d="M12.0003 0L21.9153 4.5H23.2503C23.4492 4.5 23.6399 4.57902 23.7806 4.71967C23.9212 4.86032 24.0003 5.05109 24.0003 5.25V8.25C24.0003 8.44891 23.9212 8.63968 23.7806 8.78033C23.6399 8.92098 23.4492 9 23.2503 9H22.5003V19.5C22.6678 19.5001 22.8304 19.5563 22.9622 19.6596C23.0941 19.7629 23.1876 19.9074 23.2278 20.07L23.9778 23.07C24.0057 23.1805 24.008 23.2959 23.9844 23.4074C23.9609 23.5189 23.9121 23.6235 23.8419 23.7133C23.7717 23.803 23.6819 23.8755 23.5793 23.9252C23.4768 23.9749 23.3642 24.0005 23.2503 24H0.750264C0.636311 24.0005 0.523753 23.9749 0.421207 23.9252C0.318661 23.8755 0.228845 23.803 0.158634 23.7133C0.0884218 23.6235 0.0396755 23.5189 0.0161256 23.4074C-0.00742429 23.2959 -0.00515347 23.1805 0.0227643 23.07L0.772764 20.07C0.813201 19.9075 0.906738 19.7632 1.03853 19.6599C1.17033 19.5567 1.33283 19.5004 1.50026 19.5V9H0.750264C0.551352 9 0.360586 8.92098 0.219934 8.78033C0.0792819 8.63968 0.000264278 8.44891 0.000264278 8.25V5.25C0.000264278 5.05109 0.0792819 4.86032 0.219934 4.71967C0.360586 4.57902 0.551352 4.5 0.750264 4.5H2.08526L12.0003 0ZM5.66576 4.5H18.3363L12.0003 1.5L5.66576 4.5ZM3.00026 9V19.5H4.50026V9H3.00026ZM6.00026 9V19.5H9.75026V9H6.00026ZM11.2503 9V19.5H12.7503V9H11.2503ZM14.2503 9V19.5H18.0003V9H14.2503ZM19.5003 9V19.5H21.0003V9H19.5003ZM22.5003 7.5V6H1.50026V7.5H22.5003ZM21.9153 21H2.08526L1.71026 22.5H22.2903L21.9153 21Z"
                      fill="#2E8362"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_517_661">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </li>
            </ul>
          )}
        </aside>
    </div>
  )
}

export default MobileSidebar
