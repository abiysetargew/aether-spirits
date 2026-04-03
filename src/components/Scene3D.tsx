'use client';

export default function Scene3D() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
      <div className="relative">
        <div className="w-32 h-64 border-2 border-[rgba(201,169,98,0.5)] rounded-xl bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative">
          <div className="absolute inset-4 border border-[rgba(201,169,98,0.3)] rounded-lg" />
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-[#c9a962] to-[#8b7355] rounded-t-lg" />
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-48 bg-[rgba(201,169,98,0.1)] rounded-full blur-3xl" />
      </div>
    </div>
  );
}
