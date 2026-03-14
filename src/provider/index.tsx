"use client";

import { ReactNode } from "react";
import QueryProvider from "@/provider/QueryProvider";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { ThemeProvider } from "@/components/common/theme-provider";
import { Toaster } from "sonner";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryProvider>
        <SidebarProvider>
          {children}
          <Toaster position="top-right" />
        </SidebarProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
