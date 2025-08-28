// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";

// const NotFound = () => {
//   const location = useLocation();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Generate a random value (you can replace with API, timestamp, etc.)
//       const newValue = `QR-${Date.now()}`;
//       setText(newValue);
//     }, 10000); // 10 seconds

//     return () => clearInterval(interval); // cleanup on unmount
//   }, []);


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-background">
//       <div className="text-center">
//          <h1 className="text-2xl font-bold mb-4">Auto Changing QR Code</h1>
//       <p className="mb-2 text-gray-600">Changes every 10 seconds</p>
//       <QRCodeCanvas value={text} size={200} />
//       <p className="mt-4 text-sm text-gray-500">Current Value: {text}</p>

//       </div>
//     </div>
//   );
// };

// export default NotFound;

import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function NotFound() {
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random value (you can replace with API, timestamp, etc.)
      const newValue = `QR-${Date.now()}`;
      setText(newValue);
    }, 10000); // 10 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Auto Changing QR Code</h1>
      <p className="mb-2 text-gray-600">Changes every 10 seconds</p>
      <QRCodeCanvas value={text} size={200} />
      <p className="mt-4 text-sm text-gray-500">Current Value: {text}</p>
    </div>
  );
}
