import React from "react";

const wrapperData = [
  {
    id: 1,
    href: "#",
    className: "icon icon-facebook",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        fill="none"
        className="w-12 h-12 md:w-15.5 md:h-15.5 text-white"
      >
        <path
          d="M36.916 11.1943L36.4668 11.1484C35.0608 11.0048 33.6479 10.9316 32.2324 10.9355C30.0569 10.9355 28.172 11.6026 26.8301 12.9287C25.4867 14.2564 24.7422 16.1907 24.7422 18.6182V22.1279H20.0557V28.5781H24.7422V41.5H10C8.06614 41.5 6.5 39.9339 6.5 38V10C6.5 8.06614 8.06614 6.5 10 6.5H38C39.9339 6.5 41.5 8.06614 41.5 10V38C41.5 39.9339 39.9339 41.5 38 41.5H31.3281V28.5703H35.998L36.0537 28.1338L36.7559 22.6836L36.8281 22.1201H31.3604V19.1504C31.3604 18.3841 31.4731 17.88 31.7441 17.5596C31.9994 17.2579 32.4959 17.0059 33.5596 17.0059H36.916V11.1943Z"
          stroke="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 2,
    href: "#",
    className: "icon icon-instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        fill="none"
        className="w-12 h-12 md:w-15.5 md:h-15.5 text-white"
      >
        <path
          d="M16 6.5H32C37.2459 6.5 41.5 10.7541 41.5 16V32C41.5 37.2459 37.2459 41.5 32 41.5H16C10.7541 41.5 6.5 37.2459 6.5 32V16C6.5 10.7541 10.7541 6.5 16 6.5ZM24 13.5C18.2019 13.5 13.5 18.2019 13.5 24C13.5 29.7981 18.2019 34.5 24 34.5C29.7981 34.5 34.5 29.7981 34.5 24C34.5 18.2019 29.7981 13.5 24 13.5ZM24 18.5C25.4587 18.5 26.8572 19.0799 27.8887 20.1113C28.9201 21.1428 29.5 22.5413 29.5 24C29.5 25.4587 28.9201 26.8572 27.8887 27.8887C26.8572 28.9201 25.4587 29.5 24 29.5C22.5413 29.5 21.1428 28.9201 20.1113 27.8887C19.0799 26.8572 18.5 25.4587 18.5 24C18.5 22.5413 19.0799 21.1428 20.1113 20.1113C21.1428 19.0799 22.5413 18.5 24 18.5ZM36 9.5C34.6199 9.5 33.5 10.6199 33.5 12C33.5 13.3801 34.6199 14.5 36 14.5C37.3801 14.5 38.5 13.3801 38.5 12C38.5 10.6199 37.3801 9.5 36 9.5Z"
          stroke="currentColor"
        />
      </svg>
    ),
  },
];

export const LinkWrapper = () => {
  return (
    <>
      <ul className="flex items-start justify-center gap-6">
        {wrapperData.map((item) => (
          <li key={item.id} className="cursor-pointer">
            <a
              href={item.href}
              target="_blank"
              className={`${item.className} group flex h-14 w-14 items-center justify-center rounded-full text-white/80 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:text-white`}
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
