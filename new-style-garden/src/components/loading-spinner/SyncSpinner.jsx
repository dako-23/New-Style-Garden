import { SyncLoader } from "react-spinners";

export default function SyncSpinner() {
  return (
    <div className="flex flex-col justify-center items-center bg-white gap-12 z-50">

      <img
        src="https://res.cloudinary.com/dgvzzts4y/image/upload/v1744713337/main-logo_b5sax8.svg"
        alt="New Style Garden"
        className="w-35"
      />

      <SyncLoader
        color="#15803d"
        size={12}
        margin={6}
        speedMultiplier={0.9}
      />
    </div>
  );
}
