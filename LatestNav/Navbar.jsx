//import './styles/styles.css';
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

function Navbar() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  // Calculate the top position for the image
  const navbarHeight = 74.8; // Height of the navbar in pixels
  const intrinsicImageHeight = 233; // Intrinsic height of the image in pixels
  const topPosition = `calc(50% - ${intrinsicImageHeight / 2}px)`;
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsHidden(scrollTop > lastScrollTop && scrollTop > 0);
      setLastScrollTop(scrollTop);
      setIsTransitioning(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="flex fixed justify-between flex-wrap overflow-hidden items-center text-white h-[100px] z-40  max-lg:h-28  bg-[url('https://assets-global.website-files.com/6571cd8955f9e7f772615980/659ff7ba19b066a186929466_timer-bg.webp')] bg-no-repeat border-4 border-solid  border-[#682466] w-screen ">
      <img
            src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65a0fdd20266c7ab9c981cb8_coin-3.webp"
            alt="right image"
            class="h-[253px] w-[214px] -ml-12 mt animate-bounce-slow-left rotate-image z-0"
          />
        <div className="absolute flex items-center justify-around w-full px-32 ">
          
          <a
            href="https://www.bybit.com/en/trade/spot/GTAI/USDT?affiliate_id=71085&amp;ref_code=GTPROTOCOL"
            target="_blank"
            className="bg-[#7957ff] max-lg:absolute max-lg:top-1  bg-[url('https://assets-global.website-files.com/6571cd8955f9e7f772615980/65b10941b16f3335ac99630e_bybit-bg-btn.svg')] bg-no-repeat rounded-lg hover:bg-blue-600 text-white font-dm-mono font-semibold text-[18px] py-2 pr-24 px-6 w-64 shadow-[0_11px_29px_rgba(121,87,255,.8)] "
            style={{
              backgroundSize: "auto 20px",
              backgroundPosition: "160px 9px",
            }}
          >
            BUY NOW ON
          </a>
          
          <div className=" text-center text-2xl font-bold max-lg:absolute max-lg:-top-12  ">
          $GTAI TOKEN IS LIVE
        </div>
          <div className="  flex items-center " >
          <a
            href="https://www.bybit.com/en/trade/spot/GTAI/USDT?affiliate_id=71085&amp;ref_code=GTPROTOCOL"
            target="_blank"
            className="bg-[#7957ff] max-lg:hidden bg-[url('https://assets-global.website-files.com/6571cd8955f9e7f772615980/65b10941b16f3335ac99630e_bybit-bg-btn.svg')] bg-no-repeat rounded-lg hover:bg-blue-600 text-white font-dm-mono font-semibold text-[18px]  w-64 py-2 pr-24 px-6 z-50 shadow-[0_11px_29px_rgba(121,87,255,.8)]"
            style={{
              backgroundSize: "auto 20px",
              backgroundPosition: "160px 9px",
            }}
          >
            BUY NOW ON
          </a>
          
        </div>
        
        </div>
        


        <img
            src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65a01d4de836854a8daf68c0_coin-2.webp"
            alt="left image"
            class="h-[119px] w-[140px] -right-14 z-1 mt-32 z-0 absolute animate-bounce-slow"
            style={{ top: topPosition, marginRright: "-70px" }}
          ></img>
      </div>
      <div className=" w-screen h-[100px]"></div>
      {/* Add the HTML structure for the moving image */}
      <div className="timer-decor-3">
        <img
          src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65a0fdd20266c7ab9c981cb8_coin-3.webp"
          alt=""
          className="timer-decor-3-image"
        />
        {/* <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65a0fdd20266c7ab9c981cb8_coin-3.webp" alt="" className="timer-decor-3-image back" /> */}
      </div>

      <nav
        role="navigation"
        className={`flex z-40 absolute backdrop-blur-md flex-row justify-between rounded-lg border-solid border-gray-900 border-2 bg-opacity-33 bg-[#0d0f1b54] text-[#f3f4fb] mt-4 left-5 right-5  h-16 items-center   transition-transform duration-300 ease-in-out transform ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        } ${isTransitioning ? "opacity-100" : "opacity-100"}`}
        style={{
          fontFamily: "Instrument Sans",
          fontSize: "var(--sm-14px)",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        <a
          href="/"
          aria-current="page"
          className="nav-logo w-nav-brand ml-3"
          aria-label="home"
        >
          <img
            src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a41_logo.svg"
            loading="lazy"
            alt=""
            className="header-logo-image"
          />
        </a>

        <a
          href="https://docsend.com/view/4crdyu7mm875xd6n"
          target="_blank"
          className="bracket-hover hidden lg:flex"
        >
          Pitch Deck
        </a>
        <a
          href="#use-cases"
          className="bracket-hover hidden lg:flex  "
          style={{
            fontFamily: "var(--font-basic)",
            color: "var(--link-light)",
            fontSize: "var(--sm-14px)",
          }}
        >
          Use Cases
        </a>

        <a href="#technology" className="bracket-hover hidden lg:flex">
          Technology
        </a>
        <div
          className="relative"
          onMouseEnter={() => setIsSubMenuOpen(true)}
          onMouseLeave={() => setIsSubMenuOpen(false)}
        >
          <a
            href="#"
            className="bracket-hover hidden lg:flex"
            onClick={(e) => e.preventDefault()}
          >
            Community
          </a>
          {isSubMenuOpen && (
            <SubMenu
              onMouseEnter={() => setIsSubMenuOpen(true)}
              onMouseLeave={() => setIsSubMenuOpen(false)}
            />
          )}
        </div>

        <a
          href="/"
          aria-current="page"
          className="bracket-hover hidden lg:flex"
        >
          Partners
        </a>
        <a
          href="/"
          aria-current="page"
          className="bracket-hover hidden lg:flex"
        >
          Team
        </a>
        <a
          href="/"
          aria-current="page"
          className="bracket-hover hidden lg:flex"
        >
          Contact Us
        </a>

        <div className="nav-action flex flex-wrap flex-row  space-x-4">
          <a
            id="launch-app-cta-utm"
            href="https://staking.gt-protocol.io?"
            target="_blank"
            className="relative btn-primary-frame bg-[#542fe8] flex flex-wrap items-center text-white rounded-lg px-2 py-2 w-36   h-11  border-[#542fe8] border-2"
          >
            <img
              src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65abbbd897271787d4c243f5_arrow-right.svg"
              loading="lazy"
              alt=""
              className="btn-icon ml-2 "
            />
            <span className="text-sm px-2">Stake $GTAI</span>

            <svg
              viewBox="0 0 10 10"
              className="absolute -left-2 top-0 w-8 h-4 transform rotate-120"
            >
              <path style={{ fill: "#0d0f1b54" }} d="M0 10V0h10L0 10z" />
            </svg>
          </a>
          <div className="block lg:hidden mr-3">
            <button
              onClick={handleMenuToggle}
              className="text-white focus:outline-none z-50"
            >
              {!isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="nav-action  flex-wrap flex-row  space-x-4 hidden    lg:flex">
          <a
            id="launch-app-cta-utm"
            href="https://staking.gt-protocol.io?"
            target="_blank"
            className="relative btn-primary-frame bg-[#542fe8] flex flex-wrap items-center text-white rounded-lg px-2 py-2 w-36 h-11  border-[#542fe8] border-2 bg-[#0d0f1b54]"
          >
            <span className="text-sm px-2 ">Launch App</span>

            <svg
              viewBox="0 0 10 10"
              className="absolute -left-2 top-0 w-8 h-4 transform rotate-120"
            >
              <path
                style={{ fill: "#0d0f1b54", borderRadius: "2px" }}
                d="M0 10V0h10L0 10z"
              />
            </svg>
          </a>
        </div>
      </nav>

      {isMenuOpen && (
        <div className={`absolute z-30 w-screen top-28 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        } ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
        <nav
          role="navigation "
          className={`flex flex-col justify-items-start space-y-4 space-x-2  rounded-lg border-solid border-gray-900 border-2 bg-opacity-33 bg-[#18191bf2] text-[#f3f4fb]  mt-20 ml-9 mr-9   max-w-full transition-transform duration-300 ease-in-out transform lg:hidden `}
          style={{ fontFamily: "Instrument Sans" }}
          onTransitionEnd={handleTransitionEnd}
        >
          <a
            href="https://docsend.com/view/4crdyu7mm875xd6n"
            target="_blank"
            className="bracket-hover pl-2 pt-4"
          >
            Pitch Deck
          </a>

          <a href="#use-cases" className="bracket-hover   ">
            Use Cases
          </a>

          <a href="#technology" className="bracket-hover ">
            Technology
          </a>
          <div
            className="relative"
            onMouseEnter={() => setIsSubMenuOpen(true)}
            onMouseLeave={() => setIsSubMenuOpen(false)}
          >
            <a
              href="#"
              className="bracket-hover"
              onClick={(e) => e.preventDefault()}
            >
              Community
            </a>
            {isSubMenuOpen && (
              <SubMenu
                onMouseEnter={() => setIsSubMenuOpen(true)}
                onMouseLeave={() => setIsSubMenuOpen(false)}
              />
            )}
          </div>

          <a href="/" aria-current="page" className="bracket-hover">
            Partners
          </a>
          <a href="/" aria-current="page" className="bracket-hover">
            Team
          </a>
          <a href="/" aria-current="page" className="bracket-hover">
            Contact Us
          </a>
          <a
            href="https://staking.gt-protocol.io?"
            aria-current="page"
            className="bracket-hover pb-4 "
          >
            Launch App
          </a>
          
        </nav>
        </div>
      )}
      </div>
    
  );
}

export default Navbar;
