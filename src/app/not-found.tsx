import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-start pt-[25vh] text-gray-800">
      <h2 className="text-4xl font-bold text-red-500 mb-4">Not Found</h2>
      <p className="text-xl mb-6">Could not find requested resource</p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg transition-colors duration-300 hover:bg-blue-700"
      >
        Return to Naija Japa Postgresql App Home
      </Link>
    </div>
  );
}
