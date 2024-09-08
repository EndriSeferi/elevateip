'use client';
import { Tabs } from './Tabs';

export default function Navbar() {
  return (
    <div className="flex w-full justify-start bg-neutral-950 p-8 text-neutral-200 md:justify-center">
      <Tabs />
    </div>
  );
}
