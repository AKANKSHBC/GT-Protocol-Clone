import React from "react";
import { useState, useEffect } from "react";

const SubMenu = (isOpen) => {
  return (
    <div
      className={`absolute top-10 left-0 z-10 ${isOpen ? "block" : "hidden"}`}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
    >
      <nav className="w-72 h-max border-gray-900 border-2 bg-opacity-60 bg-[#18191bf2] text-[#f3f4fb] text-sm">
        <a
          href="https://t.me/GTProtocolNews"
          target="_blank"
          className="flex flex-wrap flex-row pl-4 pt-4 pb-4  "
          tabIndex="0"
        >
          <img
            src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a44_ico-telegram.svg"
            loading="lazy"
            alt=""
            className="nav-dropdown-icon pr-2"
          />
          <div className="nav-dropdown-text pr-24">Telegram Channel</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-6 ml-auto mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
        <a
          href="https://t.me/GTAI_Traders_Chat"
          target="_blank"
          className="flex flex-wrap flex-row pb-4 pl-3"
          tabIndex="0"
        >
          <img
            src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65a557a8fe80f3ea27f0c792_ico-global.svg"
            loading="lazy"
            alt=""
            className="nav-dropdown-icon pr-2"
          />
          <div className="nav-dropdown-text pr-24">Global Official Chat</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-6 ml-auto  mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
        <a
          href="https://t.me/GTProtocol_founder"
          target="_blank"
          className="flex flex-wrap flex-row pb-4 pl-3"
          tabIndex="0"
        >
          <img
            src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65a556916265db3c1f59076a_ico-person.svg"
            loading="lazy"
            alt=""
            className="nav-dropdown-icon pr-2"
          />
          <div className="nav-dropdown-text pr-12">
            Founder's Personal Channel
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-6 ml-auto  mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
        <div className="channels-list">
          <div className="channels-title pl-3 pb-4">Local Telegram Groups:</div>
          <div className="channels-item flex flex-row justify-around pb-4">
            <a
              href="https://t.me/GTProtocolCIS"
              target="_blank"
              className="channels-link sansserif w-inline-block flex flex-row group"
              tabIndex="0"
            >
              <img
                src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65a0265fdff702efb9dafa27_Chat-Sng.svg"
                loading="lazy"
                alt=""
                className="channels-flag pr-2"
              />
              <div className="channels-name relative">
                СНГ
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transition-all duration-300 group-hover:h-0"></span>
              </div>
            </a>
            <a
              href="https://t.me/gtpturkey"
              target="_blank"
              className="channels-link w-inline-block flex flex-row group"
              tabIndex="0"
            >
              <img
                src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a55_flag-TR.svg"
                loading="lazy"
                alt=""
                className="channels-flag pr-2"
              />
              <div className="channels-name relative">
                TR
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transition-all duration-300 group-hover:h-0"></span>
              </div>
            </a>
            <a
              href="https://t.me/GTProtocolKR"
              target="_blank"
              className="channels-link w-inline-block flex flex-row group"
              tabIndex="0"
            >
              <img
                src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65a546fc27b4bca420bb0b45_flag-korean.svg"
                loading="lazy"
                alt=""
                className="channels-flag pr-2"
              />
              <div className="channels-name relative">
                KR
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transition-all duration-300 group-hover:h-0"></span>
              </div>
            </a>
          </div>
          <div className="channels-item flex flex-row pb-4 pl-6 ">
            <a
              href="https://t.me/GTProtocolCN"
              target="_blank"
              className="channels-link w-inline-block flex flex-row pr-14 group"
              tabIndex="0"
            >
              <img
                src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a52_flag-CN.svg"
                loading="lazy"
                alt=""
                className="channels-flag pr-2"
              />
              <div className="channels-name relative">
                CN
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transition-all duration-300 group-hover:h-0"></span>
              </div>
            </a>
            <a
              href="https://t.me/GTProtocolPR"
              target="_blank"
              className="channels-link w-inline-block flex flex-row group"
              tabIndex="0"
            >
              <img
                src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a56_flag-IR.svg"
                loading="lazy"
                alt=""
                className="channels-flag pr-2"
              />
              <div className="channels-name relative">
                PR
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transition-all duration-300 group-hover:h-0"></span>
              </div>
            </a>
          </div>
        </div>
        <a
          href="https://twitter.com/gt_protocol"
          target="_blank"
          className="flex flex-row pb-4 pl-3"
          tabIndex="0"
        >
          <img
            src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a4e_ico-x.svg"
            loading="lazy"
            alt=""
            className="nav-dropdown-icon pr-2"
          />
          <div className="nav-dropdown-text ">Twitter</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-6 ml-auto  mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
        <a
          href="https://discord.gg/gt-protocol"
          target="_blank"
          className="flex flex-row pb-4 pl-3"
          tabIndex="0"
        >
          <img
            src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a46_ico-discord.svg"
            loading="lazy"
            alt=""
            className="nav-dropdown-icon pr-2"
          />
          <div className="nav-dropdown-text ">Discord</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-6 ml-auto  mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
        <a
          href="https://medium.com/@gt-protocol"
          target="_blank"
          className="flex flex-row pb-4 pl-3"
          tabIndex="0"
        >
          <img
            src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a50_ico-medium.svg"
            loading="lazy"
            alt=""
            className="nav-dropdown-icon pr-2"
          />
          <div className="nav-dropdown-text ">Medium</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-6 ml-auto  mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
        <a
          href="https://www.youtube.com/@gtprotocol"
          target="_blank"
          className="flex flex-row pb-4 pl-3"
          tabIndex="0"
        >
          <img
            src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a51_ico-YouTube.svg"
            loading="lazy"
            alt=""
            className="nav-dropdown-icon pr-2"
          />
          <div className="nav-dropdown-text ">Youtube</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-6 ml-auto  mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/company/gtprotocol"
          target="_blank"
          className="flex flex-row pb-4 pl-3"
          tabIndex="0"
        >
          <img
            src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a4d_ico-linkedIn.svg"
            loading="lazy"
            alt=""
            className="nav-dropdown-icon pr-2"
          />
          <div className="nav-dropdown-text ">Linkedin</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-6 ml-auto  mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/gtprotocolio"
          target="_blank"
          className="flex flex-row pb-4 pl-3"
          tabIndex="0"
        >
          <img
            src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a45_ico-facebook.svg"
            loading="lazy"
            alt=""
            className="nav-dropdown-icon pr-2"
          />
          <div className="nav-dropdown-text ">Facebook</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-6 ml-auto  mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/gt.protocol/"
          target="_blank"
          className="flex flex-row pb-4 pl-3"
          tabIndex="0"
        >
          <img
            src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a4f_ico-insta.svg"
            loading="lazy"
            alt=""
            className="nav-dropdown-icon pr-2"
          />
          <div className="nav-dropdown-text ">Instagram</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-6 ml-auto  mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
        <a
          href="https://www.tiktok.com/@gtprotocolio"
          target="_blank"
          className="flex flex-row pb-4 pl-3"
          tabIndex="0"
        >
          <img
            src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a4c_ico-tikTok.svg"
            loading="lazy"
            alt=""
            className="nav-dropdown-icon pr-2"
          />
          <div className="nav-dropdown-text ">TikTok</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-6 ml-auto  mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
      </nav>
    </div>
  );
};
export default SubMenu;