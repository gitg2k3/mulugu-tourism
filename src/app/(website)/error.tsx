"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log sanitized error message without exposing connection strings or credentials
    const rawMsg = error?.message ? String(error.message) : "An unexpected error occurred";
    const sanitizedMsg = rawMsg.replace(
      /postgres(?:ql)?:\/\/[^@\s]+@/gi,
      "postgresql://[REDACTED]@"
    );
    console.error("Website route error encountered:", sanitizedMsg);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20">
      <Container size="sm">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 rounded-3xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 mx-auto flex items-center justify-center">
            <AlertCircle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Notice
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
              We couldn&apos;t load this information right now
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-md mx-auto">
              Please try again in a few moments, or return to the home page.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" onClick={() => reset()}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <Link href="/">
              <Button size="lg" variant="outline">
                <Home className="w-4 h-4 mr-2" />
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
