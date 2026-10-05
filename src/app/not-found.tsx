import React from "react";
import Link from "next/link";
import { Compass, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20">
      <Container size="sm">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 rounded-3xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 mx-auto flex items-center justify-center">
            <Compass className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              404 • Destination Not Found
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
              You Have Wandered Off the Trail
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-md mx-auto">
              The page or destination you are searching for might have moved, been renamed, or does not exist.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link href="/">
              <Button size="lg">
                <Home className="w-4 h-4 mr-2" />
                Return to Home
              </Button>
            </Link>
            <Link href="/explore">
              <Button size="lg" variant="outline">
                <Compass className="w-4 h-4 mr-2" />
                Explore Attractions
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
