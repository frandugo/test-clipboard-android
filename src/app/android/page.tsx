"use client"
import { useState } from "react";
import Image from "next/image";

export default function Android() {
    const [code, setCode] = useState("hey-there-hgfhgfhgf");
    const copyCode = () => {
    if (typeof window !== "undefined") {
        window.navigator.clipboard
        .writeText(code)
        .then(function () {
          console.log("Text copied to clipboard successfully!");
        })
        .catch(function (err) {
          console.error("Failed to copy text: ", err);
        });
     }
    }
    return (
      <div className="p-4">
        <p className="my-4">{code}</p>
        <button onClick={ copyCode } className="bg-[tomato] p-4">Copy code</button>
      </div>
    );
}
