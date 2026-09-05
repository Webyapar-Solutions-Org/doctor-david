import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SiteFooterProps = {
  variant?: "home" | "compact";
};

export function SiteFooter({ variant = "compact" }: SiteFooterProps) {
  const isHome = variant === "home";
  const copyClass = isHome
    ? "mt-5 max-w-2xl text-xl leading-7 text-white/90"
    : "mt-4 max-w-2xl text-lg leading-7 text-white/90";
  const copyrightClass = isHome
    ? "mt-12 text-lg text-white/85"
    : "mt-10 text-base text-white/85";

  return (
    <footer id="contact" className="bg-[#1f3f79] text-white">
      <div
        className={`mx-auto grid max-w-6xl gap-10 px-5 ${
          isHome
            ? "py-16 md:grid-cols-[1fr_250px]"
            : "py-14 md:grid-cols-[1fr_220px]"
        }`}
      >
        <div>
          <h2 className={`${isHome ? "text-3xl" : "text-2xl"} font-bold`}>
            Why Choose Dr. Vivek Kumar David?
          </h2>
          <p className={copyClass}>
            Dr. Vivek Kumar David provides advanced, personalized orthopaedic
            care using modern surgical techniques and robotic technology to help
            patients recover faster, reduce pain, and regain an active
            lifestyle.
          </p>
          <p className={copyrightClass}>
            @2026 All Rights Reserved | Developed by:{" "}
            <a
              href="https://www.webyaparsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-bold ${isHome ? "text-[#ff314e]" : "text-[#ff3b57]"}`}
            >
              Webyapar Solutions Pvt. Ltd.
            </a>
          </p>
        </div>
        <div>
          <h3 className={`${isHome ? "text-xl" : "text-lg"} font-bold`}>
            Contact Us:
          </h3>
          <div className={`mt-6 flex ${isHome ? "gap-6" : "gap-5"}`}>
            <a
              href="#contact"
              className={`flex items-center justify-center rounded-full bg-[#2387df] font-bold ${
                isHome ? "h-12 w-12 text-2xl" : "h-10 w-10 text-xl"
              }`}
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className={`flex items-center justify-center rounded-full bg-gradient-to-br from-[#f6a23a] via-[#e63b80] to-[#6244d5] text-sm font-bold ${
                isHome ? "h-12 w-12 text-lg" : "h-10 w-10"
              }`}
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className={`flex items-center justify-center rounded bg-[#0b79bc] font-bold ${
                isHome ? "h-12 w-12 text-lg" : "h-10 w-10 text-sm"
              }`}
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
