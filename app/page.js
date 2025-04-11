import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-orange-500 rounded"></div>
        </div>
        <Link
          href="/auth/login"
          className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          Get Started
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 flex items-center justify-between">
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Manage your Expense
            <br />
            <span className="text-orange-500">&</span>
            <br />
            Control your Money
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Start preparing your budgets and save tons of money
          </p>
          <div className="space-x-4">
            <Link
              href="/auth/login"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="#features"
              className="bg-white border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="hidden lg:block w-1/2 pl-20">
          <div className="relative w-full h-[500px]">
            <Image
              src="/expense-illustration.svg"
              alt="Expense Management Illustration"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
