function Footer() {
  return (
    <footer className="bg-black p-5 rounded-b-md">
      <div className="flex justify-evenly">
        <div className="flex flex-col p-5">
          <h3 className="text-lg mb-4 font-bold text-secondary">COMPANY</h3>
          <a
            className="text-gray-shade-1 hover:text-gray-shade-2 my-2 text-lg"
            href="#"
          >
            About us
          </a>
          <a
            className="text-gray-shade-1 hover:text-gray-shade-2 my-2 text-lg"
            href="#"
          >
            Team
          </a>
          <a
            className="text-gray-shade-1 hover:text-gray-shade-2 my-2 text-lg"
            href="#"
          >
            Careers
          </a>
        </div>

        <div className="flex flex-col p-5">
          <h3 className="text-lg mb-4 font-bold text-secondary">CONTACT</h3>
          <a
            className="text-gray-shade-1 hover:text-gray-shade-2 my-2 text-lg"
            href="#"
          >
            Help & Support
          </a>
          <a
            className="text-gray-shade-1 hover:text-gray-shade-2 my-2 text-lg"
            href="#"
          >
            Partner with us
          </a>
          <a
            className="text-gray-shade-1 hover:text-gray-shade-2 my-2 text-lg"
            href="#"
          >
            Ride with us
          </a>
        </div>

        <div className="flex flex-col p-5">
          <h3 className="text-lg mb-4 font-bold text-secondary">LEGAL</h3>
          <a
            className="text-gray-shade-1 hover:text-gray-shade-2 my-2 text-lg"
            href="#"
          >
            Terms & Conditions
          </a>
          <a
            className="text-gray-shade-1 hover:text-gray-shade-2 my-2 text-lg"
            href="#"
          >
            Refund & Cancellation
          </a>
          <a
            className="text-gray-shade-1 hover:text-gray-shade-2 my-2 text-lg"
            href="#"
          >
            Privacy Policy
          </a>
        </div>
      </div>
      <hr />
      <div className="text-white flex justify-between items-center">
        <h3 className="text-gray-shade-1">
          <span>Designed and Developed by</span>
          <a
            className="ml-2 font-bold underline"
            href="https://www.linkedin.com/in/jyotsnamehta24/"
            target="_blank"
          >
            Jyotsna Mehta
          </a>
          <span className="text-red-600 ml-2 text-lg">❤</span>
        </h3>
        <div className="flex gap-10 p-2">
          <a
            target="-blank"
            className="border h-12 w-12 flex justify-center items-center rounded-full hover:bg-white hover:text-black"
            href="https://github.com/j24m"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4c0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5c-10.2-26.5-24.9-33.6-24.9-33.6c-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8c11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1 8.7-45.6 23-61.6c-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8c14.3 16.1 23 36.6 23 61.6c0 88.2-52.4 107.6-102.3 113.3c8 7.1 15.2 21.1 15.2 42.5c0 30.7-.3 55.5-.3 63c0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32Z"
              />
            </svg>
          </a>
          <a
            target="-blank"
            className="border h-12 w-12 flex justify-center items-center rounded-full hover:bg-white hover:text-black"
            href="https://www.linkedin.com/in/jyotsnamehta24/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32Zm-273.3 373.43h-64.18V205.88h64.18ZM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43c0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43Zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44c-17.74 0-28.24 12-32.91 23.69c-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44c42.13 0 74 27.77 74 87.64Z"
              />
            </svg>
          </a>
          <a
            target="-blank"
            className="border h-12 w-12 flex justify-center items-center rounded-full hover:bg-white hover:text-black"
            href="https://twitter.com/JyotsnaMehta24"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
