import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <div className="font-serif text-9xl font-bold text-green-100 mb-4">404</div>
        <h1 className="font-serif text-3xl font-bold text-slate-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. It may have been moved
          or the URL may be incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Home
          </Link>
          <a
            href="tel:8449675247"
            className="border-2 border-brand text-brand hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Call 844-967-5247
          </a>
        </div>
      </div>
    </div>
  );
}
