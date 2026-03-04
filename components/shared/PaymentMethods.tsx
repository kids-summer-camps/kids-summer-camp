"use client";

import React from "react";

// Payment method SVG components
const AmexIcon = () => (
  <svg viewBox="0 0 57 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="57" height="39" rx="6" fill="#1F72CD" stroke="#D9D9D9" strokeWidth="1.323"/>
    <path d="M13.28 26.5V12.5H18.58L21.28 17.5L24 12.5H29.3V26.5H24.7V18.2L21.28 23.6H21.22L17.8 18.2V26.5H13.28ZM33.5 26.5L38.8 12.5H43.8L49.1 26.5H44.2L43.4 24.4H39.2L38.4 26.5H33.5ZM40.3 20.8H42.3L41.3 18.2L40.3 20.8Z" fill="white"/>
  </svg>
);

const ApplePayIcon = () => (
  <svg viewBox="0 0 58 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="58" height="40" rx="6" fill="white" stroke="#D9D9D9" strokeWidth="1.323"/>
    <path d="M15.6 20.5C15.6 19.2 16.5 18.5 17.5 18.5C18.6 18.5 19.3 19.2 19.3 20.5C19.3 21.8 18.4 22.5 17.3 22.5C16.3 22.5 15.6 21.8 15.6 20.5ZM21.3 15.5H23.2V26.5H21.3V15.5ZM27.8 18.5H29.6V19.6C30.1 18.8 31 18.3 32.1 18.3C34.1 18.3 35.5 19.8 35.5 22V26.5H33.6V22.4C33.6 21 32.9 20.2 31.7 20.2C30.5 20.2 29.7 21 29.7 22.4V26.5H27.8V18.5ZM41.5 26.6C39.1 26.6 37.5 25 37.5 22.5C37.5 20 39.1 18.4 41.5 18.4C43.9 18.4 45.5 20 45.5 22.5C45.5 25 43.9 26.6 41.5 26.6ZM41.5 20.3C40.3 20.3 39.4 21.2 39.4 22.5C39.4 23.8 40.3 24.7 41.5 24.7C42.7 24.7 43.6 23.8 43.6 22.5C43.6 21.2 42.7 20.3 41.5 20.3Z" fill="black"/>
  </svg>
);

const DinersClubIcon = () => (
  <svg viewBox="0 0 58 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="58" height="39" rx="6" fill="white" stroke="#D9D9D9" strokeWidth="1.323"/>
    <circle cx="29" cy="19.5" r="10" stroke="#004E94" strokeWidth="2" fill="none"/>
    <path d="M24 14.5V24.5C21.5 23 20 21 20 19.5C20 18 21.5 16 24 14.5Z" fill="#004E94"/>
    <path d="M34 14.5V24.5C36.5 23 38 21 38 19.5C38 18 36.5 16 34 14.5Z" fill="#004E94"/>
  </svg>
);

const DiscoverIcon = () => (
  <svg viewBox="0 0 57 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="57" height="39" rx="6" fill="white" stroke="#D9D9D9" strokeWidth="1.323"/>
    <path d="M10 25V14H15C17.5 14 19 15.5 19 17.5C19 19.5 17.5 21 15 21H12V25H10ZM12 19H15C16.2 19 17 18.3 17 17.5C17 16.7 16.2 16 15 16H12V19Z" fill="#FF6000"/>
    <path d="M20 25V14H22V25H20Z" fill="#FF6000"/>
    <path d="M23 19.5C23 16.5 25.5 14 28.5 14C30.5 14 32.2 15 33 16.5L31.2 17.5C30.8 16.7 30 16.2 28.5 16.2C26.7 16.2 25.2 17.5 25.2 19.5C25.2 21.5 26.7 22.8 28.5 22.8C30 22.8 30.8 22.3 31.2 21.5L33 22.5C32.2 24 30.5 25 28.5 25C25.5 25 23 22.5 23 19.5Z" fill="#FF6000"/>
    <path d="M33 25V14H40V16H35V18.5H39.5V20.5H35V23H40V25H33Z" fill="#FF6000"/>
    <circle cx="45" cy="19.5" r="5" fill="#FF6000"/>
  </svg>
);

const GooglePayIcon = () => (
  <svg viewBox="0 0 57 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="57" height="39" rx="6" fill="white" stroke="#D9D9D9" strokeWidth="1.323"/>
    <path d="M20 20.5V23H18V15.5H23C24.5 15.5 25.5 16.5 25.5 18C25.5 19.5 24.5 20.5 23 20.5H20ZM20 19H23C23.5 19 24 18.5 24 18C24 17.5 23.5 17 23 17H20V19Z" fill="#3C4043"/>
    <path d="M27 19.5C27 17.5 28.5 15.5 30.8 15.5C32.5 15.5 33.8 16.5 34.2 17.8L32.5 18.5C32.2 17.7 31.5 17.2 30.8 17.2C29.5 17.2 28.8 18.2 28.8 19.5C28.8 20.8 29.5 21.8 30.8 21.8C31.5 21.8 32.2 21.3 32.5 20.5L34.2 21.2C33.8 22.5 32.5 23.5 30.8 23.5C28.5 23.5 27 21.5 27 19.5Z" fill="#3C4043"/>
    <path d="M35 15.5H37V23.3C37 24.5 36.2 25.2 35 25.2V23.8C35.3 23.8 35.5 23.5 35.5 23.3V15.5H35Z" fill="#3C4043"/>
    <path d="M38 21.5V18H39.5V21.5C39.5 22.2 40 22.5 40.5 22.5C41.2 22.5 41.5 22 41.5 21.5V18H43V21.5C43 23 42 24 40.5 24C39 24 38 23 38 21.5Z" fill="#3C4043"/>
    <path d="M44 22.5V18H45.5V22.5H48V18H49.5V25H44V22.5Z" fill="#4285F4"/>
    <path d="M16.5 25H15V16.5H12.5V15H19V16.5H16.5V25Z" fill="#4285F4"/>
  </svg>
);

const MastercardIcon = () => (
  <svg viewBox="0 0 58 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="58" height="39" rx="6" fill="white" stroke="#D9D9D9" strokeWidth="1.323"/>
    <circle cx="24" cy="19.5" r="8" fill="#EB001B"/>
    <circle cx="34" cy="19.5" r="8" fill="#F79E1B"/>
    <path d="M29 13.5C30.5 14.8 31.5 17 31.5 19.5C31.5 22 30.5 24.2 29 25.5C27.5 24.2 26.5 22 26.5 19.5C26.5 17 27.5 14.8 29 13.5Z" fill="#FF5F00"/>
  </svg>
);

const PaypalIcon = () => (
  <svg viewBox="0 0 58 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="58" height="39" rx="6" fill="white" stroke="#D9D9D9" strokeWidth="1.323"/>
    <path d="M15 27L17 13H22C25 13 27 15 26 18C25 21 22 23 19 23H17L16 27H15Z" fill="#003087"/>
    <path d="M18 23L19 18H23C25 18 26 19 25 21C25 22 23 23 21 23H18Z" fill="#0070E0"/>
    <path d="M31 27L33 13H38C41 13 43 15 42 18C41 21 38 23 35 23H33L32 27H31Z" fill="#003087"/>
    <path d="M34 23L35 18H39C41 18 42 19 41 21C41 22 39 23 37 23H34Z" fill="#0070E0"/>
  </svg>
);

const ShopPayIcon = () => (
  <svg viewBox="0 0 57 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="57" height="39" rx="6" fill="#5A31F4" stroke="#D9D9D9" strokeWidth="1.323"/>
    <path d="M20 25V14H28V16H22V18.5H27V20.5H22V23H28V25H20Z" fill="white"/>
    <path d="M32 25L36 14H38L42 25H39.5L39 23H35L34.5 25H32ZM35.5 21H38.5L37 16.5L35.5 21Z" fill="white"/>
  </svg>
);

const StripeIcon = () => (
  <svg viewBox="0 0 57 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="57" height="39" rx="6" fill="white" stroke="#D9D9D9" strokeWidth="1.323"/>
    <path d="M41 19.5C41 18.2 41.8 17.5 43 17.5C44.2 17.5 45 18.2 45 19.5V25H48V19C48 16.5 46.2 15 43.5 15C41.5 15 40.2 16 39.5 17.2V15H36.5V25H39.5V19.5H41Z" fill="#635BFF"/>
    <path d="M32 15H29V25H32V15Z" fill="#635BFF"/>
    <path d="M30.5 13C31.3 13 32 12.3 32 11.5C32 10.7 31.3 10 30.5 10C29.7 10 29 10.7 29 11.5C29 12.3 29.7 13 30.5 13Z" fill="#635BFF"/>
    <path d="M25 15H22L18 25H21L21.5 23.5H25.5L26 25H29L25 15ZM22.5 21L23.5 17.5L24.5 21H22.5Z" fill="#635BFF"/>
    <path d="M12 19.5C12 18.2 12.8 17.5 14 17.5C15.2 17.5 16 18.2 16 19.5V25H19V19C19 16.5 17.2 15 14.5 15C12.5 15 11.2 16 10.5 17.2V15H7.5V25H10.5V19.5H12Z" fill="#635BFF"/>
  </svg>
);

const VisaIcon = () => (
  <svg viewBox="0 0 57 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="57" height="39" rx="6" fill="white" stroke="#D9D9D9" strokeWidth="1.323"/>
    <path d="M23 25L19 14H22L25 22L28 14H31L25 25H23Z" fill="#1A1F71"/>
    <path d="M36 14C33.5 14 31.5 15.5 31.5 17.5C31.5 19 32.5 20 34 20.5L35 21C35.5 21.2 35.8 21.5 35.8 22C35.8 22.7 35 23.2 34 23.2C32.8 23.2 31.5 22.5 31 22L29.5 24C30.5 25 32.2 25.5 34 25.5C37 25.5 39 24 39 22C39 20.5 38 19.5 36 18.8L35 18.5C34.5 18.3 34.2 18 34.2 17.5C34.2 16.8 35 16.3 36 16.3C37 16.3 38 16.8 38.5 17.2L40 15.2C39 14.5 37.5 14 36 14Z" fill="#1A1F71"/>
    <path d="M15 14L10 25H13L14 22.5H19L20 25H23L18 14H15ZM15 20L17 16L18 20H15Z" fill="#1A1F71"/>
  </svg>
);

export function PaymentMethods({ className = "" }: { className?: string }) {
  const paymentMethods = [
    { name: "Amex", Icon: AmexIcon },
    { name: "Apple Pay", Icon: ApplePayIcon },
    { name: "Diners Club", Icon: DinersClubIcon },
    { name: "Discover", Icon: DiscoverIcon },
    { name: "Google Pay", Icon: GooglePayIcon },
    { name: "Mastercard", Icon: MastercardIcon },
    { name: "PayPal", Icon: PaypalIcon },
    { name: "Shop Pay", Icon: ShopPayIcon },
    { name: "Stripe", Icon: StripeIcon },
    { name: "Visa", Icon: VisaIcon },
  ];

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {paymentMethods.map(({ name, Icon }) => (
        <div key={name} className="w-[57px] h-[39px]" title={name}>
          <Icon />
        </div>
      ))}
    </div>
  );
}
