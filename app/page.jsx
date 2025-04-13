"use client";
import { ReviewCarousel } from "./components/ReviewCarousel";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-between items-center min-h-screen overflow-hidden w-screen py-12">
      <ReviewCarousel />
      <div className="h-96 w-screen rounded-full absolute -bottom-96 bg-primary/40 blur-[200px]"></div>
      <div className="h-96 w-screen rounded-full absolute -top-96 bg-primary/40 blur-[200px]"></div>
    </main>
  );
}
