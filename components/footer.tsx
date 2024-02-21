import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 absolute bottom-5 z-10 h-0 w-[100%] items-center justify-center">
      <small className="mb-2 block text-xs">
        &copy; Khuong Tran. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
    // <footer className="text-center items-center justify-center h-20 px-4 border border-black">This is the footer</footer>
  );
}