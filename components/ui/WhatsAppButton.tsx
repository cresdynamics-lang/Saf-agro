"use client";

import Link from "next/link";

export default function WhatsAppButton() {
  const phoneNumber = ""; // We will wire this up later
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center justify-center">
      {/* Rotating Text */}
      <div className="absolute h-36 w-36 animate-[spin_8s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
          <path
            id="textPath"
            d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            fill="transparent"
          />
          <text className="fill-[#1F3E35] font-black text-[13.5px] uppercase tracking-[0.2em]">
            <textPath href="#textPath" startOffset="0%">
              hi we are here • 
            </textPath>
          </text>
        </svg>
      </div>

      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#128C7E] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] focus:outline-none focus:ring-4 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-12 w-12"
        >
          <path d="M12.031 0C5.395 0 .012 5.385.008 12.022a11.96 11.96 0 0 0 1.6 6.012L0 24l6.115-1.604a11.996 11.996 0 0 0 5.914 1.564h.005c6.634 0 12.016-5.384 12.019-12.021C24.05 5.32 18.665 0 12.031 0zm0 21.984h-.004a9.95 9.95 0 0 1-5.074-1.39l-.364-.216-3.771.99.998-3.678-.237-.378a9.939 9.939 0 0 1-1.522-5.306c.003-5.495 4.475-9.967 9.97-9.967 2.66 0 5.163 1.037 7.042 2.92a9.923 9.923 0 0 1 2.914 7.048c-.004 5.495-4.477 9.967-9.972 9.967zm5.452-7.464c-.299-.15-1.771-.874-2.046-.975-.274-.1-.474-.15-.673.15-.199.3-.772.975-.947 1.175-.175.2-.35.225-.649.075-.3-.15-1.265-.466-2.409-1.488-.89-.794-1.492-1.775-1.667-2.075-.175-.3-.019-.462.131-.611.135-.134.3-.349.449-.524.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.673-1.625-.922-2.225-.243-.583-.49-.504-.673-.513a12.63 12.63 0 0 0-.573-.012c-.2 0-.524.075-.798.375-.274.3-1.047 1.025-1.047 2.5s1.072 2.899 1.222 3.099c.15.2 2.112 3.224 5.116 4.523.715.309 1.272.493 1.706.63.717.228 1.37.195 1.884.118.577-.086 1.771-.724 2.02-1.424.25-.7.25-1.3.175-1.424-.075-.125-.274-.2-.573-.35z"/>
        </svg>
      </Link>
    </div>
  );
}
