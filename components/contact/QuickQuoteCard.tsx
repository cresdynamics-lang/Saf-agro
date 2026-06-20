import Link from "next/link";
import { Sparkles, Clock, Share2, ArrowRight, Phone } from "lucide-react";
import { ENQUIRY_PHONE } from "@/lib/grade-specs";

export default function QuickQuoteCard() {
  return (
    <div className="bg-gradient-to-br from-[#E8F5E9] to-white border border-[#326949]/10 rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(50,105,73,0.08)]">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-[#37F713] text-black px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" /> Quick Quote
        </div>
        <div className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold text-gray-600 flex items-center gap-1.5 shadow-sm">
          <Clock className="w-3.5 h-3.5" /> ~24 hrs
        </div>
        <div className="flex-1"></div>
        <button className="p-2.5 bg-white rounded-full border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
          <Share2 className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <h3 className="text-2xl font-black text-[#111] mb-3 leading-tight tracking-tight">
        Receive a Custom Quote — {new Date().toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}
      </h3>
      
      <p className="text-gray-600 text-sm mb-8 leading-relaxed font-medium">
        Tell us your commodity requirements and our trading floor will prepare a detailed pricing structure based on today's market rates.
      </p>

      <div className="flex items-center gap-2 mb-8 text-sm text-gray-700 bg-white px-4 py-3 rounded-xl border border-gray-100 shadow-sm">
        <span className="font-medium">Response time:</span> <span className="font-black text-[#326949]">Within 24hrs</span>
      </div>

      <Link href="/contact" className="w-full py-4 bg-[#37F713] text-black rounded-2xl font-black uppercase tracking-widest hover:bg-[#326949] hover:text-white transition-all hover:shadow-lg flex justify-center items-center gap-2 mb-4 group">
        Request Quote <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </Link>
      
      <p className="text-xs font-bold text-gray-400 text-center uppercase tracking-widest mb-4">
        Or speak directly to us
      </p>

      <a href={`tel:${ENQUIRY_PHONE.replace(/\s/g, "")}`} className="w-full py-4 bg-white border-2 border-gray-100 text-black rounded-2xl font-black uppercase tracking-widest hover:border-[#37F713] transition-all flex justify-center items-center gap-2 shadow-sm group">
        <Phone className="w-5 h-5 text-[#326949] group-hover:text-[#37F713]" /> Call Sales
      </a>
    </div>
  );
}
