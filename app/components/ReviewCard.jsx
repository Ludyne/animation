"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ReviewCard({ img, name, username, body }) {
  return (
    <figure
      className={cn(
        "relative w-72 overflow-hidden rounded-lg p-px mx-2",
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
            priority={true}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-muted">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm text-[#F7F6F9]">{body}</blockquote>
      </div>
    </figure>
  );
}
