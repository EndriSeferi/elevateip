'use client';
import { Tabs } from './Tabs';

export default function Navbar() {
  return (
    <div className="flex w-full justify-start bg-neutral-950 p-8 text-neutral-200">
      <div className="flex justify-between w-full items-center">
        <h1 className="flex justify-center items-center text-left w-24">
          Logo
        </h1>
        <Tabs />
      </div>
    </div>
  );
}
