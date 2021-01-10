import React from "react";
import styled from "styled-components";
import { css } from "@emotion/core";
import { useGlobalContext } from "../context";
import CircleLoader from "react-spinners/CircleLoader";

const Loading = () => {
  const { webLoading, setWebLoading } = useGlobalContext();
  const [color, setColor] = React.useState("#ccc");

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #222;
  `;

  return (
    <LoadingBox>
      <CircleLoader
        color={color}
        loading={webLoading}
        css={override}
        size={150}
      />
    </LoadingBox>
    // <LoadingBox>
    //   <div className="box">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="-120 0 400 140.5"
    //       fill="#666"
    //     >
    //       <title>Loxi</title>
    //       <g id="layout_01" data-name="layout_01">
    //         <g id="layout_02" data-name="layout_02">
    //           <g id="LOXI">
    //             <rect
    //               className="cls-1"
    //               id="L-left"
    //               y="3.5"
    //               width="20"
    //               height="136.5"
    //             ></rect>
    //             <rect
    //               className="cls-1"
    //               id="L-bottom"
    //               y="119.5"
    //               width="224"
    //               height="21"
    //             ></rect>
    //             <rect
    //               className="cls-1"
    //               id="I-line"
    //               x="204"
    //               y="19.5"
    //               width="20"
    //               height="120.5"
    //             ></rect>
    //             <rect
    //               className="cls-1"
    //               id="I-point"
    //               x="204"
    //               y="3.5"
    //               width="20"
    //               height="20"
    //             ></rect>
    //             <path
    //               className="cls-1"
    //               id="O"
    //               d="M112,140a70,70,0,1,1,70-70A70.08,70.08,0,0,1,112,140Zm0-120a50,50,0,1,0,50,50A50.06,50.06,0,0,0,112,20Z"
    //             ></path>
    //             <g id="X">
    //               <rect
    //                 className="cls-1"
    //                 x="110.54"
    //                 y="34.08"
    //                 width="58.25"
    //                 height="20"
    //                 transform="translate(9.73 111.67) rotate(-45)"
    //               ></rect>
    //               <rect
    //                 className="cls-1"
    //                 x="55.21"
    //                 y="89.42"
    //                 width="58.25"
    //                 height="20"
    //                 transform="translate(-45.6 88.75) rotate(-45)"
    //               ></rect>
    //               <rect
    //                 className="cls-1"
    //                 x="74.33"
    //                 y="14.96"
    //                 width="20"
    //                 height="58.25"
    //                 transform="translate(-6.47 72.55) rotate(-45)"
    //               ></rect>
    //               <rect
    //                 className="cls-1"
    //                 x="129.67"
    //                 y="70.29"
    //                 width="20"
    //                 height="58.25"
    //                 transform="translate(-29.39 127.88) rotate(-45)"
    //               ></rect>
    //               <rect
    //                 className="cls-1"
    //                 id="X-center"
    //                 x="102"
    //                 y="61.75"
    //                 width="20"
    //                 height="20"
    //                 transform="translate(-17.93 100.21) rotate(-45)"
    //               ></rect>
    //             </g>
    //           </g>
    //         </g>
    //       </g>
    //     </svg>
    //   </div>
    // </LoadingBox>
  );
};

export default Loading;

const LoadingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999;
  position: fixed;

  .box {
    width: 100%;
    max-width: 300px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .box #L-left {
    transform-origin: left center;
    animation: name-l 3s ease-in-out 3s both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  .box #L-bottom {
    transform-origin: left top;
    animation: name-l-b 3s ease-in-out 3s both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  .box #O {
    transform-origin: left center;
    animation: name-o 3s ease-in-out 3s both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  .box #X {
    transform-origin: left center;
    animation: name-x 3s ease-in-out 3s both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  .box #X #X-center {
    animation: name-x-c 3s ease-in-out 3s both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  .box #I-point {
    transform-origin: left center;
    animation: name-i-p 3s ease-in-out 3s both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  .box #I-line {
    transform-origin: left center;
    animation: name-i-l 3s ease-in-out 3s both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes box-open {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes name-l {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-80px) scaleY(0.65);
    }
  }
  @keyframes name-l-b {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translate(-80px, -10px) scale(0.3, 0.9);
    }
  }
  @keyframes name-o {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-30px) scale(0.68);
    }
  }
  @keyframes name-x {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(60px) scale(0.8);
    }
  }
  @keyframes name-x-c {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes name-i-p {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(60px) scale(0.8);
    }
  }
  @keyframes name-i-l {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translate(60px, 5px) scale(0.8, 0.65);
    }
  }
`;
