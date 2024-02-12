import { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import SubMenu from "./SubMenu"

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

  const handleCommunityClick = () => {
    setIsSubMenuOpen(!isSubMenuOpen); // Toggle the submenu visibility on click
  };

  return (
    <div className="relative">
      <div className="flex fixed justify-between flex-wrap overflow-hidden items-center text-white h-[100px] z-30  max-lg:h-28  bg-[url('https://assets-global.website-files.com/6571cd8955f9e7f772615980/659ff7ba19b066a186929466_timer-bg.webp')] bg-no-repeat border-4 border-solid  border-[#682466] w-screen ">
      <img
            src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65a0fdd20266c7ab9c981cb8_coin-3.webp"
            alt="right image"
            className="h-[253px] w-[214px] -ml-12 mt animate-bounce-slow-left rotate-image z-0"
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
          
          <div className="z-50 text-center text-2xl font-bold max-lg:absolute max-lg:-top-12  ">
          $GTAI TOKEN IS LIVE
        </div>
          <div className="  flex items-center " >
          <a
            href="https://www.bybit.com/en/trade/spot/GTAI/USDT?affiliate_id=71085&amp;ref_code=GTPROTOCOL"
            target="_blank"
            className="bg-[#7957ff] max-lg:hidden bg-[url('https://assets-global.website-files.com/6571cd8955f9e7f772615980/65b10941b16f3335ac99630e_bybit-bg-btn.svg')] bg-no-repeat rounded-lg hover:bg-blue-600 text-white font-dm-mono font-semibold text-[18px]  w-64 py-2 pr-24 px-6 z-40 shadow-[0_11px_29px_rgba(121,87,255,.8)]"
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
            className="h-[119px] w-[140px] -right-14  mt-32  absolute animate-bounce-slow"
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
        <div className="relative flex flex-row justify-between">
      <a
        href="#"
        className="bracket-hover hidden lg:flex"
        onClick={(e) => {
          e.preventDefault();
          handleCommunityClick(); // Call handleCommunityClick function on click
        }}
      >
        Community
        <div class="icon w-icon-dropdown-toggle relative">
  <div class=" inset-y-0 right-0 flex items-center pt-2 pl-2 pr-2 pointer-events-none">
  <svg
  class="h-3 w-3 text-gray-400"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  style={{transform: isSubMenuOpen ? "rotate(180deg)" : "rotate(0deg)", fill: "#ffffff" }} 
  aria-hidden="true"
>
  <path
    fill-rule="evenodd"
    d="M10 4l-5.5 9h11z" 
    clip-rule="evenodd"
  />
</svg>
  </div>
  </div>
      </a>
      {isSubMenuOpen && <SubMenu />}
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

        <a
                  href="https://app.gt-protocol.io/"
                  target="_blank"
                  className="border-2 border-t-0 border-l-0 rounded-lg border-[#542fe8] relative w-[137px] h-11"
                >
                  <div className="text-indigo-700 absolute z-0">
                    <svg
                      version="1.2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 135 18"
                      width="135"
                      height="18"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        fill-rule="evenodd"
                        class="a"
                        d="m9 2.8c0.9-1.1 2.3-1.8 3.8-1.8h123.2c2.8 0 5 2.2 5 5v28c0 2.8-2.2 5-5 5h-130c-2.8 0-5-2.2-5-5v-19.9c0-1.2 0.4-2.3 1.2-3.2zz"
                      ></path>
                    </svg>
                    <span className="border-l-2 w-1 h-5 inline-block rounded-bl-lg border-indigo-700">
                      <span></span>
                    </span>
                  </div>
                  <p className="text-gray-100 pt-2 z-10 text-center font-['Instrument Sans'] font-light text-base">
                    Launch App
                  </p>
                </a>
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
            className="bracket-hover1 pl-2 pt-4"
          >
            Pitch Deck
          </a>

          <a href="#use-cases" className="bracket-hover1   ">
            Use Cases
          </a>

          <a href="#technology" className="bracket-hover1 ">
            Technology
          </a>
          <div
            className="relative"
            onMouseEnter={() => setIsSubMenuOpen(true)}
            onMouseLeave={() => setIsSubMenuOpen(false)}
          >
            <a
              href="#"
              className="bracket-hover1"
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

          <a href="/" aria-current="page" className="bracket-hover1">
            Partners
          </a>
          <a href="/" aria-current="page" className="bracket-hover1">
            Team
          </a>
          <a href="/" aria-current="page" className="bracket-hover1">
            Contact Us
          </a>
          <a
            href="https://staking.gt-protocol.io?"
            aria-current="page"
            className="bracket-hover1 pb-4 "
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
