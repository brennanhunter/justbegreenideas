import { Leaf } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-200 text-gray-700">
      {/* Angled top edge to mirror the Header style */}
      <div
        className="absolute top-0 left-0 right-0 h-6 bg-white"
        style={{ clipPath: 'polygon(0 0, 65% 0, 55% 100%, 0 100%)' }}
      />

      <div className="relative pt-10 pb-6 px-8 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 text-green-700">
          <Leaf size={18} strokeWidth={2} />
          <span className="font-semibold tracking-wide text-sm uppercase">
            Just Be Green Media LLC
          </span>
          <Leaf size={18} strokeWidth={2} />
        </div>

        <p className="text-xs text-gray-500">
          &copy; {year} Just Be Green Media LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
