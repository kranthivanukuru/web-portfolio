"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050816]">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-32 w-32 rounded-full border border-purple-500/20" />

        <div className="absolute h-24 w-24 rounded-full border border-purple-400/40 animate-spin" />

        <div className="h-4 w-4 rounded-full bg-purple-400 shadow-[0_0_25px_#a855f7]" />
      </div>
    </div>
  );
}