'use client'
import { usePathname } from "next/navigation";

const useIsPortal = () => {
  const location = usePathname(); // Get the current location
  const isPortal = location.includes("portal"); // Check if 'portal' is in the path

  return isPortal;
};

export default useIsPortal;
