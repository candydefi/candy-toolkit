import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 260 60" xmlSpace="preserve" {...props}>
      <style>
        {
          ".st0{fill:#fff}.st1{fill:#622066}.st3{fill:#e856de}.st4{fill:#ffe317}.st5{fill:#ff9e16}.st6{fill:#88e9ff}.st7{fill:#4ac6d3}.st9{fill:#ffc7d4}.st10{fill:#ff8ddf}.st13{fill:#c00}"
        }
      </style>
      <switch>
        <g>
          <path
            className="st0"
            d="M54.6 36.1c-3.2 3.9-9.1.8-10.6-1-1-1.2-1.6-2.9-.2-4 1.3-.9 3.3 2.4 8.2 1.7l2.6 3.3z"
          />
          <path
            className="st1"
            d="M52.4 37.7c-.1 0-.2 0-.2.1-.2 0-.4.1-.7.1-.3 0-.7.1-1.1.1-.4 0-.9 0-1.4-.1-.5-.1-1.1-.2-1.7-.4-.6-.2-1.2-.5-1.7-.8-.3-.2-.6-.4-.8-.6-.3-.2-.5-.4-.8-.7l-.2-.2v-.1l-.1-.1c-.1-.1-.2-.3-.3-.4-.2-.3-.4-.6-.5-1-.1-.2-.1-.4-.2-.6 0-.2-.1-.4 0-.6 0-.2.1-.4.1-.6.1-.2.2-.4.3-.5.1-.2.2-.3.4-.4l.1-.1c.1-.1.2-.1.3-.2.2-.1.4-.1.6-.1.2 0 .4 0 .6.1.2.1.3.1.5.2.1.1.3.2.4.2.3.2.5.3.8.4.5.3 1 .5 1.5.7.2.1.5.1.7.2.2.1.4.1.6.1.4.1.7.1 1 .1H51.6c.1 0 .2.1.2.1 0 .1 0 .1-.1.2h-.1-2c-.2 0-.4-.1-.7-.1-.2-.1-.5-.1-.7-.2-.5-.2-1-.4-1.6-.7-.3-.1-.5-.3-.8-.4-.3-.1-.5-.3-.8-.4-.1 0-.3-.1-.4-.1-.1 0-.2 0-.3.1-.1 0-.1.1-.2.1 0 0-.1 0-.1.1l-.3.3c-.2.2-.3.5-.3.8 0 .3 0 .6.1.8.1.3.3.6.5.8.1.1.2.3.3.4l.1.1.1.1.2.2c.4.5.9.9 1.5 1.2.5.3 1.1.6 1.6.8.5.2 1.1.3 1.5.4.5.1.9.1 1.4.1h1.1c.3 0 .5-.1.7-.1H52.8c.1 0 .1 0 .1.1-.4.4-.4.5-.5.5z"
          />
          <path
            d="M65.6 43.2s2.6-1.2 5.7-.5c2.5.6 2.4.7 3.9 1.1 2.4.6 3.9-.7 3.9-.7s-1.3 4.9-7.6 3.4c-2.5-.5-4.1-3.4-5.9-3.3z"
            fill="#ff73ef"
          />
          <path
            className="st3"
            d="M71.6 45.8c-2-.5-3.4-2.3-4.7-3-.8.2-1.3.4-1.3.4 1.8-.1 3.4 2.8 5.9 3.3 6.3 1.5 7.6-3.4 7.6-3.4s-.1.1-.3.2c-.8 1.4-2.7 3.6-7.2 2.5z"
          />
          <path
            className="st1"
            d="M73.7 47.2c-.7 0-1.5-.1-2.4-.3-1.3-.3-2.3-1.2-3.2-1.9-.9-.7-1.6-1.4-2.4-1.4h-.1c-.2 0-.3-.1-.4-.3 0-.2 0-.3.2-.4.1 0 1.6-.8 3.8-.8.7 0 1.5.1 2.1.3 1.4.3 2 .5 2.5.7.4.1.8.2 1.4.4.4.1.8.1 1.2.1 1.5 0 2.4-.8 2.4-.8.1-.1.3-.1.4 0 .1.1.2.3.1.4 0 0-.3 1-1.2 2-.7.9-2.1 2-4.4 2zm-6.8-4c.6.3 1.1.7 1.7 1.2.9.7 1.8 1.5 3 1.8.8.2 1.5.3 2.2.3 1.6 0 3-.6 4-1.7.2-.2.4-.5.5-.7-.5.2-1.1.3-1.8.3-.4 0-.9-.1-1.3-.2-.7-.2-1-.3-1.5-.4-.5-.2-1.1-.4-2.5-.7-.6-.2-1.3-.2-2-.2-.9-.1-1.7.1-2.3.3z"
          />
          <path
            className="st4"
            d="M65.9 40.5s2.8-.7 5.7.6c2.3 1.1 2.3 1.2 3.7 1.8 2.3 1 4 0 4 0s-2.2 4.3-8.1 1.7c-2.5-1-3.5-3.8-5.3-4.1z"
          />
          <path
            className="st5"
            d="M71 44c-1.8-.9-2.9-2.7-4.1-3.6-.6.1-1 .2-1 .2 1.8.3 2.7 3.3 5.1 4.3 5.9 2.6 8.2-1.9 8.2-1.9s-3.1 3.5-8.2 1z"
          />
          <path
            className="st1"
            d="M74.2 46c-1.1 0-2.2-.3-3.3-.8-1.2-.6-2.1-1.6-2.8-2.5-.7-.9-1.4-1.7-2.2-1.8-.2 0-.3-.2-.3-.3 0-.2.1-.3.3-.4 0 0 .8-.2 2-.2 1.4 0 2.7.3 3.9.8 1.3.6 1.8.9 2.3 1.2.4.2.7.4 1.3.7.6.3 1.3.4 1.9.4 1 0 1.7-.4 1.7-.4.1-.1.3-.1.4.1.1.1.1.3 0 .4 0 0-.5.7-1.4 1.4-1 .9-2.4 1.4-3.8 1.4zm-7-5.3c.5.4 1 .9 1.4 1.5.7.9 1.5 1.8 2.6 2.3 1 .5 2.1.7 3 .7 1.3 0 2.4-.4 3.5-1.2.1-.1.3-.2.4-.3-.2 0-.5.1-.7.1-.7 0-1.5-.2-2.2-.5l-1.4-.7c-.5-.3-1-.6-2.3-1.1-1.1-.5-2.3-.8-3.6-.8h-.7z"
          />
          <g>
            <path
              className="st6"
              d="M65.7 39s3.5-.8 6.2.8c1.7 1 2 1.3 3.3 2.2 1.7 1.2 4 .9 4 .9s-3.5 3.1-8.7-.6c-1.5-1-3-3-4.8-3.3z"
            />
            <path
              className="st7"
              d="M78.3 42.9c-1.4.7-4.1 1.3-7.6-1.2-1.2-.8-3.3-2.1-4-2.9-.8.1-.9.2-.9.2 1.3.9 3.3 2.3 4.8 3.4 5.2 3.7 8.7.6 8.7.6s-.4-.1-1-.1z"
            />
            <path
              className="st1"
              d="M75.5 44.5c-1.7 0-3.5-.6-5.2-1.9-.5-.4-1.1-.8-1.6-1.2-1-.7-2.1-1.5-3.1-2.2-.1-.1-.2-.2-.2-.4 0-.1.1-.3.3-.3 0 0 .9-.2 2.1-.2 1.4 0 2.7.3 3.8.8 1.3.6 2.1 1.2 2.8 1.8.5.4.9.8 1.5 1 1.2.5 2.1.7 2.6.7.4 0 .6-.1.6-.1.2-.1.3 0 .4.2.1.1.1.3-.1.4 0 .2-1.5 1.4-3.9 1.4zm-8.9-5.3c.8.6 1.6 1.2 2.4 1.7.6.4 1.1.8 1.6 1.2 1.6 1.1 3.3 1.7 4.8 1.7 1 0 1.8-.2 2.3-.5-.6-.1-1.4-.3-2.3-.7-.7-.3-1.1-.7-1.7-1.1-.6-.5-1.4-1.1-2.6-1.7-1.1-.5-2.3-.7-3.5-.7-.3.1-.7.1-1 .1z"
            />
          </g>
          <g>
            <path
              className="st0"
              d="M59.2 26.1c-6.3.3-9.4 5.1-9 13.5.4 8.7 3.7 10.4 10 9.7 5.9-.6 9.5-1.9 9.1-10.6-.4-8.4-3.8-12.9-10.1-12.6z"
            />
            <path
              className="st0"
              d="M51 44.5s1.6 6.5 4 9.4c.8 1 1.7 1.6 2.6 1.5 1-.2 1.8-.9 1.9-2.1.1-1.8-.2-6.5-.2-6.5L51 44.5z"
            />
            <path
              d="M59.5 49.4h-.9c.1.8.1 1.7.2 2.7.1 2.7-1.2 3.2-1.2 3.2 2.3-.5 2-2.2 1.9-4.5v-1.4z"
              fill="#d1d3d3"
            />
            <path
              className="st0"
              d="M61.3 46.3s3.8 4.2 7.1 5.3c1.2.4 2.3.3 3-.4.7-.8 1-1.8.3-2.8-.9-1.5-2.8-3.7-2.8-3.7l-7.6 1.6z"
            />
            <g>
              <path
                className="st1"
                d="M57.3 55.7c-.9 0-1.7-.5-2.6-1.6-1.2-1.5-2.3-3.8-3.2-6.5-.9-2.8-1.5-5.6-1.6-8-.2-4.3.5-7.6 2-10 1.6-2.4 4-3.7 7.2-3.8h.6c6 0 9.4 4.5 9.8 12.9.1 2.4 0 4.3-.4 5.8.4.5 1.9 2.3 2.8 3.6.7 1.1.5 2.3-.4 3.2-.4.4-1.1.7-1.8.7-.4 0-.9-.1-1.5-.2-.9-.2-1.9-1-3-1.7-.6-.4-1.1-.8-1.6-1.1-1 .3-2.3.5-3.7.6h-.1c.2 1.4.1 2.7 0 3.4v.3c-.1 1.3-.9 2.2-2.2 2.4h-.3zm2.5-29.3h-.6c-3 .2-5.3 1.3-6.7 3.6-1.5 2.2-2.1 5.4-1.9 9.6.2 4.7 2.4 11.2 4.7 14.2.5.6 1.3 1.4 2.1 1.4h.2c1-.2 1.6-.8 1.7-1.8v-.3c.1-.8.2-2.1 0-3.6 0-.1 0-.2.1-.3.1-.1.1-.1.2-.1h.1c.1 0 .2-.1.3-.1 1.5-.1 2.7-.3 3.7-.6h.2c.5.3 1.1.7 1.8 1.2 1 .7 2 1.4 2.8 1.6.5.1.9.2 1.3.2.6 0 1.1-.2 1.4-.5.7-.7.8-1.6.3-2.4-.8-1.3-2.4-3.2-2.7-3.6 0 0-.1 0-.1-.1-.1-.1-.1-.2-.1-.3.4-1.5.6-3.4.4-5.8-.2-4-1.1-7.1-2.6-9.2-1.6-2-3.8-3.1-6.6-3.1z"
              />
            </g>
          </g>
          <g>
            <path
              className="st0"
              d="M52.4 8.3c-1.6.6-4 4.5-2.9 7.3 2.3 6.1 8.4 3 7.7-.3-.8-3.3-3.2-7.6-4.8-7z"
            />
            <path
              className="st1"
              d="M53.5 19.5c-.9 0-1.7-.3-2.4-.9-.8-.6-1.5-1.6-1.9-2.8-.7-1.8 0-3.7.5-4.7.7-1.5 1.7-2.6 2.6-3 .2-.1.3-.1.5-.1 1.9 0 4 4.3 4.7 7.4.2.9 0 1.8-.7 2.6-.8.9-2 1.5-3.3 1.5zm-.8-10.9h-.2c-.7.3-1.7 1.4-2.3 2.7-.7 1.5-.9 3.1-.5 4.2 1.1 2.9 2.8 3.3 3.8 3.3s2.1-.5 2.7-1.3c.5-.6.7-1.4.6-2.1-.3-1.6-1-3.3-1.8-4.7-.8-1.3-1.6-2.1-2.3-2.1z"
            />
            <path
              className="st9"
              d="M52.3 10.9c-.8.3-1.6 2.5-1.1 3.8 1.1 2.9 3.9 1.4 3.6-.1-.3-1.6-1.7-4-2.5-3.7z"
            />
            <path
              className="st10"
              d="M62.4 19.3s4 1.1 6.4 5.5c1.9 3.5 1.8 3.6 3 5.8 1.9 3.5 4.8 3.2 4.8 3.2s-6 4.9-11.1-4c-2.2-3.5-1.2-8.7-3.1-10.5z"
            />
            <path
              className="st3"
              d="M65.7 28.7c-1.2-3.1-1.3-6.5-2.1-8.9-.8-.4-1.3-.5-1.3-.5 2 1.8.7 7.3 2.7 10.8 5.1 8.8 11.4 3.7 11.4 3.7s-7.3 3.5-10.7-5.1z"
            />
            <path
              className="st1"
              d="M72 35.5c-1.3 0-2.6-.4-3.7-1.1-1.4-.9-2.6-2.3-3.6-4.1-1-1.8-1.2-4.1-1.4-6-.2-2-.3-3.8-1.2-4.7-.1-.1-.2-.3-.1-.5s.3-.2.4-.2c0 0 1.1.3 2.4 1.2 1.2.8 2.9 2.2 4.2 4.5 1.1 2 1.5 2.9 1.9 3.7.3.6.6 1.2 1.1 2.1 1.4 2.6 3.5 2.8 4.4 2.8h.3c.2 0 .3.1.4.2.1.2 0 .3-.1.4-.1.1-2.2 1.7-5 1.7zm-8.6-15.4c.5 1.1.6 2.5.7 4 .2 1.9.4 4.1 1.3 5.8 1.7 3.2 3.9 4.8 6.6 4.8 1.4 0 2.7-.5 3.5-.9-1.2-.2-2.9-.9-4.1-3.1-.5-1-.8-1.5-1.1-2.1-.4-.8-.8-1.7-1.9-3.6-1.5-2.8-3.7-4.3-5-4.9z"
            />
            <path
              className="st4"
              d="M66.3 15s3.5 2.3 4.9 7.3c1.1 4.1 1 4.1 1.7 6.6 1.1 4 3.9 4.6 3.9 4.6s-6.7 3.1-9.8-7.1c-1.2-4.2.8-9-.7-11.4z"
            />
            <path
              className="st5"
              d="M67.4 25.8c-.9-3.2.2-7.3 0-9.9-.6-.6-1.1-.9-1.1-.9 1.5 2.4-.8 7.4.4 11.5 3.1 10.2 10.1 6.9 10.1 6.9s-6.7 2-9.4-7.6z"
            />
            <path
              className="st1"
              d="M74.2 34.3c-1.6 0-3-.5-4.3-1.5-1.6-1.3-2.8-3.4-3.6-6.2-.6-2.1-.3-4.4-.1-6.4.2-2.1.4-3.9-.3-5-.1-.2-.1-.3.1-.5.1-.1.3-.1.5 0 0 0 .9.6 2 1.8 1 1.1 2.3 3 3.1 5.7.6 2.3.9 3.3 1.1 4.2.2.7.3 1.3.6 2.4.4 1.5 1.2 2.8 2.2 3.6.8.6 1.4.7 1.4.7.2 0 .3.2.3.3 0 .2-.1.3-.2.4-.1 0-1.3.5-2.8.5zm-7.1-18.1c.2 1.2.1 2.6-.1 4.2-.2 1.9-.5 4.2.1 6.1 1.6 5.9 4.8 7.1 7.1 7.1.6 0 1.1-.1 1.4-.2-.2-.1-.4-.2-.6-.4-.8-.6-1.9-1.8-2.5-4-.3-1.1-.5-1.7-.6-2.4-.2-.9-.4-1.9-1-4.1-.9-3.2-2.7-5.3-3.8-6.3z"
            />
            <g>
              <path
                className="st6"
                d="M67.3 12.3s3.9 3.2 4.8 8.4c.6 3.3.7 4.1 1.1 6.7.5 3.2 3 5.7 3 5.7s-6.7.2-7.9-10.8c-.3-3.1.5-7.6-1-10z"
              />
              <path
                className="st7"
                d="M75.4 32.2c-2.1-.7-5.4-3.1-6.2-10.5-.3-2.5.1-5.8-.4-8.3-.9-.7-1.5-1.1-1.5-1.1 1.5 2.4.7 6.9 1.1 10.1 1.2 11 7.9 10.8 7.9 10.8s-.4-.3-.9-1z"
              />
              <path
                className="st1"
                d="M76.7 33.8c-.1 0-1.9 0-3.9-1.4-1.2-.8-2.1-2-2.9-3.4-.9-1.8-1.6-3.9-1.8-6.5-.1-1.1-.1-2.2-.1-3.5 0-2.4 0-4.9-.9-6.4-.1-.2-.1-.4.1-.5.1-.1.3-.1.5 0 0 0 .8.6 1.8 1.9.9 1.1 2.1 3.1 2.9 5.7.6 2 .8 3.7 1 5.2.2 1.2.3 2.3.6 3.4 1 3.7 2.8 4.8 3 4.8.1.1.2.2.2.3-.2.2-.3.4-.5.4zm-8.4-19.9c.4 1.5.3 3.3.3 5.1 0 1.2 0 2.4.1 3.4.5 4.4 2 7.6 4.4 9.3.8.6 1.6.9 2.2 1.1-.7-.8-1.6-2.1-2.2-4.4-.3-1.1-.5-2.3-.6-3.5-.2-1.5-.4-3.1-1-5.1-.7-2.5-1.9-4.3-2.7-5.4l-.5-.5z"
              />
            </g>
            <path
              className="st0"
              d="M48.8 17.6c-2 4.5-3.4 7.2-2.1 10.9.7 1.8 3.5 5.5 11.4 5.4 6-.1 11.9-2.9 12.7-7.2.8-4.3-.4-13.6-7.4-15-8.5-1.8-12.6 1.6-14.6 5.9z"
            />
            <g>
              <path
                className="st1"
                d="M57.9 34.3c-3.4 0-6.2-.7-8.4-2-2.1-1.3-2.9-2.9-3.1-3.6-1.4-3.7-.1-6.4 1.8-10.6l.3-.6c1.2-2.5 2.8-4.4 5-5.4 2.6-1.3 6-1.5 10.1-.7 4 .8 5.9 4.1 6.8 6.6 1.2 3.3 1.1 6.8.8 8.8-.5 3-3.6 5.4-5.6 6.1-.2.1-.3 0-.4-.2-.1-.2 0-.3.2-.4 2.1-.8 4.7-3.2 5.2-5.7.3-1.9.4-5.3-.8-8.4-.8-2.4-2.6-5.5-6.4-6.2-7.2-1.5-11.9.4-14.4 5.7l-.3.6c-1.9 4.2-3.1 6.7-1.8 10.1.2.6.9 2 2.9 3.2 2.1 1.3 4.9 2 8.3 1.9.2 0 .3.1.3.3 0 .2-.1.3-.3.3 0 .2-.1.2-.2.2z"
              />
            </g>
            <g>
              <path
                className="st10"
                d="M64.5 11.6s-4-.3-6.8 2.3c-1.9 1.7-4.4 3.2-7.7 2.5-3.4-.7-4.1-2.8-4.1-2.8s1.6 1.1 5.2-.2c3.6-1.2 4.3-2 6.3-2.9 4.6-2.1 7.1 1.1 7.1 1.1z"
              />
              <path
                className="st1"
                d="M51.6 16.9c-.6 0-1.2-.1-1.8-.2-3.5-.8-4.3-3-4.3-3.1-.1-.2 0-.3.1-.4.1-.1.3-.1.4 0 0 0 .6.4 1.8.4.9 0 2-.2 3.1-.6 2.3-.8 3.4-1.4 4.4-2 .6-.3 1.1-.6 1.8-.9 1.1-.5 2.1-.7 3.1-.7 2.8 0 4.4 1.9 4.4 2 .1.1.1.3 0 .4-.1.1-.2.2-.4.2h-.4c-1.1 0-4 .2-6.2 2.2-1 1.1-3.1 2.7-6 2.7zm-4.9-2.7l.2.2c.5.5 1.5 1.2 3.1 1.5.6.1 1.1.2 1.6.2 2.6 0 4.5-1.5 5.8-2.6 2.1-1.9 4.7-2.3 6.1-2.3-.6-.5-1.7-1.1-3.2-1.1-.9 0-1.8.2-2.8.6-.7.3-1.2.6-1.8.9-1.1.6-2.2 1.2-4.6 2-1.2.4-2.3.6-3.3.6-.4.1-.7.1-1.1 0z"
              />
              <path
                d="M61.3 13.4c-.3-1-2.1-7-3.3-6.8-1 .2-.7 6.5-.6 7.6l3.9-.8z"
                fill="#ffe600"
              />
              <path
                className="st5"
                d="M58 6.6c-.1 0-.2.1-.3.3 1.2.9 2.6 5.8 2.9 6.7l-3.2.6 3.9-.7c-.2-1.1-2.1-7.1-3.3-6.9z"
              />
              <path
                className="st6"
                d="M57.4 14.2l3.9-.7c-.2-.7-.9-3-1.8-4.8l-2.2 1.5c0 1.8.1 3.3.1 4z"
              />
              <path
                className="st7"
                d="M59.6 8.6L59 9c.7 1.7 1.4 3.8 1.6 4.5l.7-.1c-.1-.6-.8-3-1.7-4.8z"
              />
              <path
                className="st1"
                d="M57.4 14.5c-.1 0-.2 0-.2-.1-.1-.1-.1-.2-.1-.3 0-.5-.1-2.4-.1-4.1 0-1 .1-1.8.2-2.4 0-.6.2-1.3.8-1.4h.1c.4 0 .8.4 1.3 1.1.3.5.7 1.3 1 2.2.6 1.6 1.2 3.3 1.3 3.8v.3c-.1.1-.1.2-.3.2l-4 .7c.1 0 0 0 0 0zm.7-7.5c-.1.1-.4.6-.4 3.3 0 1.3 0 2.7.1 3.4l3.1-.6c-.2-.7-.6-2.1-1.1-3.3C58.7 7.3 58.2 7 58.1 7z"
              />
              <path
                className="st1"
                d="M57.4 10.3c-.1 0-.3-.1-.3-.2-.1-.2 0-.4.1-.5l1.9-1.1c.2-.1.4 0 .5.1.1.2 0 .4-.1.5l-1.9 1.1c0 .1-.1.1-.2.1z"
              />
              <path
                className="st4"
                d="M65.6 12.5s-3.3-.7-6.9 2.3c-2.1 1.8-5.3 3.9-8.9 2.7-3.6-1.1-4-3.9-4-3.9s1.6 2 5.7 1 6.6-3.1 9-3.5c3.2-.8 5.1 1.4 5.1 1.4z"
              />
              <path
                className="st5"
                d="M58.6 14.7c1.9-1.6 3.8-2.1 5.1-2.3.5-.3.8-.5 1-.6-.3-.2-.6-.4-.9-.5-.8-.1-1.9 0-3.4.6-2.2.9-4 2.6-7.9 3.9-4 1.3-5.8-.5-5.8-.5s.3.6 1 1.2c.5.4 1.2.8 2 1 3.6 1.1 6.8-1 8.9-2.8z"
              />
              <g>
                <path
                  className="st1"
                  d="M51.8 18.2c-.7 0-1.4-.1-2.2-.3-2-.6-3-1.7-3.5-2.5-.6-.9-.7-1.7-.7-1.7 0-.2.1-.3.2-.4.2-.1.3 0 .4.1 0 0 1 1.1 3.2 1.1.7 0 1.4-.1 2.1-.3 2.2-.5 3.9-1.4 5.5-2.1 1.3-.6 2.4-1.2 3.5-1.4.4-.1.9-.1 1.3-.1 2.6 0 4.1 1.7 4.2 1.8.1.1.1.3 0 .4-.1.1-.2.2-.4.2 0 0-.3-.1-.9-.1-1.1 0-3.4.3-5.7 2.3-2.5 1.9-4.8 3-7 3zm-5.3-3.7c.1.1.1.2.2.4.7 1 1.7 1.8 3.1 2.2.6.2 1.3.3 1.9.3 2.1 0 4.2-1 6.6-3 2.4-2 4.8-2.4 6-2.4-.6-.4-1.5-.8-2.7-.8-.4 0-.8 0-1.2.1-1 .2-2.1.7-3.4 1.3-1.6.8-3.4 1.6-5.6 2.2-.8.2-1.6.3-2.3.3-1.1 0-2-.2-2.6-.6z"
                />
              </g>
              <path
                className="st6"
                d="M65.6 12.5s-2.4 1.2-5.5 4c-2.1 1.8-5 3.1-8.2 2.4-3.7-.7-4.7-2.9-4.7-2.9s1.9 1.9 5.8.5c4-1.3 5.7-3 7.9-3.9 3.2-1.3 4.7-.1 4.7-.1z"
              />
              <path
                className="st7"
                d="M59.4 15.8c-2.1 1.8-5.1 2.8-8.3 2.2-1.9-.4-3.1-1.2-3.9-1.8.3.5 1.6 2.1 4.6 2.7 3.2.6 6.1-.6 8.2-2.4 3.1-2.8 5.5-4 5.5-4s-.1-.1-.2-.1c-1 .2-3.1 1.1-5.9 3.4z"
              />
              <g>
                <path
                  className="st1"
                  d="M53.6 19.4c-.6 0-1.2-.1-1.8-.2-3.8-.8-5-3-5-3.1-.1-.2 0-.4.1-.5.2-.1.4-.1.5 0 0 0 1 .9 2.9.9.8 0 1.7-.2 2.6-.5 2.4-.8 4-1.7 5.4-2.6.8-.5 1.6-1 2.5-1.3 1.1-.5 2.1-.7 3-.7 1.3 0 1.9.5 2 .5.1.1.2.2.1.3 0 .1-.1.2-.2.3 0 0-2.4 1.3-5.4 4-1.9 2-4.3 2.9-6.7 2.9zm-4.7-2.1c.7.5 1.7 1 3.1 1.2.5.1 1.1.2 1.6.2 2.2 0 4.4-.9 6.2-2.5 2.2-1.9 4-3.1 4.9-3.7-.2-.1-.5-.1-.9-.1-.8 0-1.7.2-2.7.6-.8.3-1.6.8-2.4 1.3-1.4.8-3 1.8-5.5 2.6-1 .3-1.9.5-2.8.5-.6 0-1.1 0-1.5-.1z"
                />
              </g>
            </g>
            <g>
              <path
                className="st0"
                d="M69.6 9c1.4 1 2.2 5 .5 7.4-3.7 5.4-8.9.9-7.4-2.1 1.6-3.1 5.5-6.4 6.9-5.3z"
              />
              <path
                className="st1"
                d="M69.4 17.6c-.1 0-.2 0-.2-.1-.1-.1-.1-.3 0-.4.2-.3.5-.5.7-.9.7-1 1-2.5.9-4.1-.2-1.3-.7-2.5-1.3-3-.3-.2-.7-.1-1 0-1.8.5-4.7 3.4-5.7 6.1-.1.2-.2.2-.4.2-.2-.1-.2-.2-.2-.4 1.1-2.9 4.1-5.9 6.1-6.5.6-.2 1.1-.2 1.5.1.8.6 1.4 1.9 1.5 3.4.2 1.7-.2 3.3-1 4.5-.2.3-.5.7-.7.9 0 .2-.1.2-.2.2z"
              />
              <path
                className="st9"
                d="M68.5 11.1c.7.5.9 2.8.1 4-1.7 2.5-4.2.4-3.5-1 .8-1.5 2.7-3.5 3.4-3z"
              />
            </g>
            <g>
              <ellipse
                transform="rotate(11.275 62.369 29.55)"
                className="st9"
                cx={62.4}
                cy={29.6}
                rx={2.2}
                ry={1.7}
              />
              <ellipse
                transform="rotate(-158.544 49.312 26.158)"
                className="st9"
                cx={49.3}
                cy={26.2}
                rx={1.8}
                ry={1.4}
              />
              <circle className="st1" cx={54.6} cy={27.4} r={0.3} />
              <path className="st9" d="M54.8 29.7s.1-1 .9-1c.9 0 1 .9 1 .9" />
              <path
                className="st1"
                d="M54.8 29.9c-.1 0-.2-.1-.2-.2 0-.4.3-1.2 1.1-1.2.9 0 1.1.7 1.2 1.1 0 .1-.1.2-.2.2s-.2-.1-.2-.2-.1-.7-.8-.7c-.7 0-.7.8-.7.8 0 .1-.1.2-.2.2z"
              />
              <circle className="st1" cx={55.5} cy={27.7} r={0.3} />
              <g>
                <path
                  className="st1"
                  d="M55.8 30.2c-.4 0-1-.1-1.7-.5-.9-.5-1.2-1.3-1.2-1.3-.1-.2 0-.3.2-.4.2-.1.3 0 .4.2 0 0 .3.7 1 1 1.3.7 2.1.3 2.1.3.1-.1.3 0 .4.1.1.1 0 .3-.1.4-.2 0-.5.2-1.1.2z"
                />
              </g>
              <g>
                <path
                  className="st1"
                  d="M52.3 23.2c1.4.6 1.4 2.2 1.4 2.3-.1.1-.6-1.1-1.3-1.5-1.3-.7-2.2-.2-2.2-.3 0-.4 1.1-.9 2.1-.5z"
                />
                <path
                  className="st1"
                  d="M53.6 25.6c-.1 0-.2-.1-.4-.4-.2-.3-.6-.9-1-1.1-.4-.2-.9-.4-1.3-.4-.2 0-.4 0-.5.1h-.2c-.2 0-.3-.1-.3-.2s0-.2.1-.3c.2-.2.8-.5 1.4-.5.3 0 .6.1.8.2.9.4 1.3 1.2 1.4 1.7.1.2.2.7 0 .9.2 0 .1 0 0 0zM51 23.3c.5 0 1 .1 1.5.4.3.2.6.5.8.8-.2-.5-.5-1-1.1-1.3-.2-.1-.4-.1-.7-.1-.3 0-.5.1-.7.1 0 .2.1.1.2.1z"
                />
              </g>
              <g>
                <path
                  className="st1"
                  d="M60.2 25.6c-1.5-.2-2.3 1.2-2.3 1.3 0 .1 1-.7 1.8-.7 1.5 0 2 .9 2.1.8.1-.2-.6-1.3-1.6-1.4z"
                />
                <path
                  className="st1"
                  d="M61.7 27.3c-.1 0-.2-.1-.3-.2-.3-.2-.8-.6-1.7-.6-.5 0-1 .3-1.4.5-.2.1-.3.2-.4.2-.1 0-.2-.1-.2-.2 0-.2.3-.5.4-.6.3-.3 1-.9 1.9-.9h.3c.8.1 1.5.7 1.7 1.2.1.3.1.5 0 .5s-.2.1-.3.1zm-2-1.2c.8 0 1.3.2 1.7.5-.2-.3-.7-.6-1.2-.7H60c-.6 0-1.1.3-1.4.6.3-.3.7-.4 1.1-.4z"
                />
              </g>
            </g>
          </g>
          <g>
            <path
              className="st4"
              d="M73.1 50.2c1.1.5 1.7 1.8 1.2 2.9-.5 1.1-1.8 1.7-2.9 1.2L37.3 40.1c-1.1-.5-1.7-1.8-1.2-2.9.5-1.1 1.8-1.7 2.9-1.2l34.1 14.2z"
            />
            <path
              className="st5"
              d="M72.7 53.4L38.6 39.3c-1.1-.5-1.7-1.8-1.2-2.9.1-.2.2-.4.3-.5-.7.1-1.3.6-1.6 1.3-.5 1.1.1 2.4 1.2 2.9l34.1 14.1c.9.4 2 .1 2.6-.7-.4.1-.9.1-1.3-.1z"
            />
            <path
              className="st1"
              d="M72.2 54.8c-.3 0-.7-.1-1-.2l-34-14.1c-1.3-.6-2-2.1-1.4-3.4.4-1 1.4-1.6 2.4-1.6.3 0 .7.1 1 .2l34.1 14.1c1.3.6 2 2.1 1.4 3.4-.4 1-1.4 1.6-2.5 1.6zm-34-18.5c-.7 0-1.4.4-1.6 1.1-.4.9.1 1.9 1 2.3l34.1 14.1c.2.1.4.1.7.1.7 0 1.4-.4 1.6-1.1.4-.9-.1-1.9-1-2.3L38.8 36.4c-.2-.1-.4-.1-.6-.1z"
            />
          </g>
          <g>
            <defs>
              <circle id="SVGID_1_" cx={27.8} cy={33.7} r={20.7} />
            </defs>
            <use xlinkHref="#SVGID_1_" overflow="visible" fill="#fff" />
            <clipPath id="SVGID_2_">
              <use xlinkHref="#SVGID_1_" overflow="visible" />
            </clipPath>
            <g clipPath="url(#SVGID_2_)">
              <path
                className="st10"
                d="M27.7 34.4c2.8-6.6 5.3-13.5-5.5-29.5h11c4.3 18.8-.4 24.3-5.5 29.5zM27.7 34.4c-5 5.2-9.8 10.7-5.5 29.5h11c-10.8-16-8.3-22.9-5.5-29.5z"
              />
              <path
                className="st10"
                d="M27.7 34.4c6.6 2.8 13.5 5.3 29.5-5.5v11c-18.8 4.3-24.3-.5-29.5-5.5zM27.7 34.4c-5.2-5-10.7-9.8-29.5-5.5v11c16.1-10.8 22.9-8.3 29.5-5.5z"
              />
              <path
                className="st10"
                d="M27.7 34.4c3.3-1.4 6.7-2.8 9.6-6.2 3-3.3 5.6-8.5 7.9-15.3 2.4 3.7 4.1 6.3 6.5 7.7-4.6 5.5-8.9 9.4-12.9 11.4-3.8 2.2-7.4 2.3-11.1 2.4zM27.7 34.4c-3.6.1-7.2.2-11.2 2.3-4 2-8.3 5.9-12.9 11.4 2.4 1.5 4.1 4 6.5 7.7 2.3-6.8 4.9-12 7.9-15.3 3.1-3.3 6.4-4.7 9.7-6.1z"
              />
              <path
                className="st10"
                d="M27.7 34.4c1.4 3.3 2.8 6.7 6.2 9.6 3.3 3 8.5 5.6 15.3 7.9-3.7 2.4-6.3 4.1-7.7 6.5-5.6-4.5-9.5-8.9-11.5-12.8-2.1-4-2.2-7.6-2.3-11.2zM27.7 34.4c-.1-3.6-.2-7.2-2.3-11.2-2-4-5.9-8.3-11.4-12.9-1.5 2.4-4 4.1-7.7 6.5 6.8 2.3 12 4.9 15.3 7.9 3.3 3 4.7 6.4 6.1 9.7z"
              />
            </g>
          </g>
          <g>
            <path
              className="st1"
              d="M27.7 54.8c-2.8 0-5.5-.5-8.1-1.6-2.6-1.1-5-2.7-6.9-4.7-1.9-1.9-3.4-4.2-4.5-6.7-1-2.5-1.6-5.2-1.6-7.9 0-2.8.5-5.6 1.6-8.2 1.6-3.9 4.4-7.2 7.9-9.5s7.5-3.5 11.6-3.5c2.8 0 5.5.5 8.1 1.6 2.6 1.1 5 2.7 6.9 4.7 1.9 1.9 3.4 4.2 4.5 6.7 1 2.5 1.6 5.2 1.6 7.9 0 2.8-.5 5.6-1.6 8.2-1.6 3.9-4.4 7.2-7.9 9.5-3.4 2.3-7.4 3.5-11.6 3.5zm.1-41.3c-8.2 0-15.6 4.9-18.7 12.5-4.3 10.3.6 22.1 10.9 26.4 2.5 1 5.1 1.6 7.8 1.6 8.2 0 15.6-4.9 18.7-12.5 2.1-5 2.1-10.5 0-15.5s-6-8.9-10.9-11c-2.6-1-5.2-1.5-7.8-1.5z"
            />
          </g>
          <g>
            <path
              className="st0"
              d="M64.6 36.2c2 4.6-3.4 8.4-5.7 9-1.6.4-3.3.1-3.6-1.6-.3-1.5 3.7-1.9 5.2-6.6l4.1-.8z"
            />
            <path
              className="st1"
              d="M65.1 38.8c0 .1 0 .2-.1.2 0 .2-.1.4-.2.7-.1.3-.2.6-.4 1s-.4.8-.7 1.2c-.3.4-.7.9-1.1 1.3-.4.4-.9.8-1.5 1.2-.3.2-.6.3-.9.5-.3.1-.6.3-1 .4-.1 0-.2.1-.3.1H58.6c-.2 0-.3.1-.5.1-.4.1-.7.1-1.1.1-.2 0-.4 0-.6-.1-.2-.1-.4-.1-.5-.2-.2-.1-.3-.2-.5-.4-.1-.2-.2-.3-.3-.5-.1-.2-.1-.4-.2-.5v-.1-.1-.3c0-.2.1-.4.1-.6.1-.2.2-.3.4-.5.1-.1.3-.2.4-.3.1-.1.3-.2.4-.3.3-.2.5-.3.7-.5.5-.3.9-.7 1.2-1l.5-.5c.1-.2.3-.3.4-.5l.6-.9c.1-.3.2-.5.3-.6 0-.1.1-.1.1-.2v-.1c0-.1.1-.1.2-.1s.1.1.1.2V37.8c0 .1-.1.2-.1.3 0 .1-.1.2-.1.4-.1.3-.3.6-.5 1-.1.2-.3.4-.4.6-.2.2-.3.4-.5.6-.4.4-.8.8-1.3 1.1-.2.2-.5.3-.8.5-.3.2-.5.3-.7.5-.1.1-.2.2-.2.3 0 .1-.1.2-.1.3v.4c0 .1.1.3.2.4.1.3.3.5.5.6.2.1.5.2.8.3h.9c.2 0 .3-.1.5-.1h.2c.1 0 .2 0 .2-.1.6-.2 1.2-.5 1.7-.8.5-.3 1-.7 1.4-1.1.4-.4.8-.8 1.1-1.2.3-.4.5-.8.7-1.1.2-.4.3-.7.4-1 .1-.3.2-.5.2-.6 0-.1 0-.1.1-.2v-.1c0-.1.1-.1.2-.1.4 0 .4.1.4.1z"
            />
          </g>
          <g>
            <path
              className="st9"
              d="M75.9 24.1c.1-.2.3-.3.7-.6.7-.5 1.6-.8 1.3-1.8-.2-.9-1.4-.8-1.8-.1-.6-.5-1.4-.7-1.7.1-.2.7.5 1.3 1 1.8.3.3.5.6.5.6zM75.5 27c-.1-.1-.2-.2-.4-.3-.5-.3-1-.4-.9-1.1.1-.6.8-.5 1.1-.1.3-.3.8-.4 1 0 .2.4-.2.8-.5 1.1-.3.2-.3.4-.3.4zM45.8 19.7c-.1-.1-.2-.2-.4-.3-.4-.2-1-.3-.9-.9.1-.5.7-.6 1-.2.3-.3.7-.5 1-.1.2.4-.2.8-.4 1.1-.2.2-.3.4-.3.4z"
            />
          </g>
          <g>
            <path
              className="st13"
              d="M101.4 24.7l-2.9 2.7c-2-2.1-4.2-3.1-6.6-3.1-2.1 0-3.8.7-5.2 2.1-1.4 1.4-2.1 3.2-2.1 5.2 0 1.4.3 2.7.9 3.8s1.5 2 2.7 2.6c1.1.6 2.4 1 3.8 1 1.2 0 2.3-.2 3.3-.7 1-.4 2.1-1.3 3.3-2.4l2.8 2.9c-1.6 1.6-3.1 2.6-4.5 3.2-1.4.6-3 .9-4.9.9-3.4 0-6.1-1.1-8.2-3.2-2.1-2.1-3.2-4.9-3.2-8.2 0-2.2.5-4.1 1.5-5.7s2.4-3 4.2-4c1.8-1 3.8-1.5 5.9-1.5 1.8 0 3.5.4 5.1 1.1 1.5.8 2.9 1.9 4.1 3.3zM116.4 26.5h4v16h-4v-1.7c-.8.7-1.6 1.3-2.4 1.6s-1.6.5-2.6.5c-2.1 0-3.8-.8-5.4-2.4-1.5-1.6-2.3-3.6-2.3-6 0-2.5.7-4.5 2.2-6.1 1.5-1.6 3.2-2.4 5.3-2.4 1 0 1.9.2 2.7.5.8.4 1.6.9 2.3 1.6v-1.6zm-4.2 3.3c-1.2 0-2.3.4-3.1 1.3-.8.9-1.2 2-1.2 3.4s.4 2.5 1.3 3.4c.8.9 1.9 1.3 3.1 1.3 1.3 0 2.3-.4 3.1-1.3.8-.9 1.2-2 1.2-3.4s-.4-2.5-1.2-3.4c-.9-.9-2-1.3-3.2-1.3zM124.4 26.5h4v1.6c.9-.8 1.7-1.3 2.5-1.6s1.5-.4 2.3-.4c1.6 0 2.9.6 4 1.7.9.9 1.4 2.3 1.4 4.2v10.6h-4v-7c0-1.9-.1-3.2-.3-3.8s-.5-1.1-.9-1.4c-.4-.3-1-.5-1.6-.5-.8 0-1.5.3-2.1.8-.6.5-1 1.3-1.2 2.3-.1.5-.2 1.6-.2 3.2v6.4h-4V26.5zM154.3 20.3h4v22.1h-4v-1.7c-.8.7-1.6 1.3-2.4 1.6s-1.6.5-2.6.5c-2.1 0-3.8-.8-5.4-2.4-1.5-1.6-2.3-3.6-2.3-6 0-2.5.7-4.5 2.2-6.1s3.2-2.4 5.3-2.4c1 0 1.9.2 2.7.5.8.4 1.6.9 2.3 1.6v-7.7zm-4.2 9.5c-1.2 0-2.3.4-3.1 1.3-.8.9-1.2 2-1.2 3.4s.4 2.5 1.3 3.4c.8.9 1.9 1.3 3.1 1.3 1.3 0 2.3-.4 3.1-1.3.8-.9 1.2-2 1.2-3.4s-.4-2.5-1.2-3.4c-.9-.9-2-1.3-3.2-1.3zM160.6 26.5h4.1l4.2 10 4.6-10h4.1l-10 21.8h-4.1l3.3-7-6.2-14.8zM191.6 23.8l-3 2.7c-1.1-1.5-2.2-2.2-3.3-2.2-.5 0-1 .1-1.3.4-.3.3-.5.6-.5 1s.1.7.4 1c.3.4 1.3 1.4 3 2.8 1.6 1.3 2.5 2.1 2.9 2.5.8.8 1.4 1.6 1.8 2.4s.5 1.6.5 2.5c0 1.8-.6 3.2-1.8 4.4s-2.8 1.7-4.8 1.7c-1.5 0-2.9-.4-4-1.1-1.1-.8-2.1-1.9-2.9-3.6l3.5-2.1c1 1.9 2.2 2.9 3.6 2.9.7 0 1.3-.2 1.8-.6s.7-.9.7-1.4c0-.5-.2-1-.5-1.5-.4-.5-1.2-1.2-2.4-2.2-2.4-1.9-3.9-3.4-4.6-4.4-.7-1-1-2.1-1-3.1 0-1.5.6-2.8 1.7-3.9s2.6-1.6 4.2-1.6c1.1 0 2.1.3 3.1.7.7.5 1.7 1.4 2.9 2.7zM193.7 26.5h3.9l3.2 9.1 3.5-9.1h2.4l3.4 9 3.2-9h4l-5.8 16H209l-3.4-9.1-3.5 9.1h-2.5l-5.9-16zM231.3 26.5h4v16h-4v-1.7c-.8.7-1.6 1.3-2.4 1.6s-1.6.5-2.6.5c-2.1 0-3.8-.8-5.4-2.4-1.5-1.6-2.3-3.6-2.3-6 0-2.5.7-4.5 2.2-6.1s3.2-2.4 5.3-2.4c1 0 1.9.2 2.7.5.8.4 1.6.9 2.3 1.6v-1.6zm-4.2 3.3c-1.2 0-2.3.4-3.1 1.3-.8.9-1.2 2-1.2 3.4s.4 2.5 1.3 3.4c.8.9 1.9 1.3 3.1 1.3 1.3 0 2.3-.4 3.1-1.3.8-.9 1.2-2 1.2-3.4s-.4-2.5-1.2-3.4c-.9-.9-2-1.3-3.2-1.3zM243.3 26.5v1.8c.7-.7 1.5-1.3 2.3-1.6.8-.4 1.7-.5 2.7-.5 2.1 0 3.9.8 5.3 2.4s2.2 3.6 2.2 6.1c0 2.4-.8 4.4-2.3 6s-3.3 2.4-5.4 2.4c-.9 0-1.8-.2-2.6-.5s-1.6-.9-2.4-1.6v7.5h-4v-22h4.2zm4.2 3.3c-1.3 0-2.3.4-3.1 1.3-.8.9-1.2 2-1.2 3.4s.4 2.6 1.2 3.4c.8.9 1.9 1.3 3.1 1.3 1.2 0 2.3-.4 3.1-1.3.8-.9 1.3-2 1.3-3.4s-.4-2.5-1.2-3.4c-.9-.9-1.9-1.3-3.2-1.3z"
            />
          </g>
        </g>
      </switch>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
