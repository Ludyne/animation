import React from "react";
import { cn } from "../lib/utils.jsx";
import Image from "next/image";

const Card = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-72 overflow-hidden rounded-lg p-px",
        "bg-gradient-to-b to-[#0C0024] from-[#4C3182]"
      )}
    >
      <div className="bg-card h-full text-card-foreground px-6 py-4 rounded-lg">
        <div className="flex flex-row items-center gap-2">
          <Image
            className="rounded-full"
            width={32}
            height={32}
            alt=""
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-muted">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </div>
    </figure>
  );
};

export default Card;
