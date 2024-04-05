import Image from 'next/image'

export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 dark:bg-gray-950 bg-gray-50">
      </div>
    </div>
  );
}