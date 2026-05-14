import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7fbff] via-[#f8f8ff] to-[#ffffff] px-4 py-24 sm:py-28">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl items-center justify-center">
        <div className="w-full rounded-[40px] border border-slate-200/80 bg-white/95 px-6 py-10 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.16)] backdrop-blur-xl sm:px-12 sm:py-14">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow-lg shadow-emerald-200/80">
              <CheckCircle2 size={46} />
            </div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Request received
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Thank You For Contacting Us
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Our team will get back to you within 1 business day. Please check your junk e-mail folder and your voicemail box to ensure our communication is not blocked.
            </p>
          </div>

          <div className="mt-10 rounded-[28px] border border-emerald-200 bg-emerald-50 px-6 py-7 text-slate-900 shadow-sm shadow-emerald-100/80 sm:px-10">
            <p className="text-base font-medium leading-7">
              If you do not hear from us within 1 business day, please send an email to
            </p>
            <p className="mt-4 text-xl font-semibold text-emerald-900">Info@tech2globe.com</p>
            <p className="mt-2 text-sm leading-6 text-emerald-800">
              We will attend you at the earliest.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/hire-ai-developers"
              className="inline-flex items-center justify-center rounded-full bg-red-700 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-red-800"
            >
              Find out more about our services
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-900 transition hover:border-slate-300"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
