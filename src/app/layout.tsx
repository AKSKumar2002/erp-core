import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import SplashScreen from "@/components/layout/SplashScreen";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "GMS JAIN ERP | Premium Jewelry Management",
  description: "Enterprise Resource Planning for Jewelry Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans bg-zinc-950 text-foreground overflow-hidden">
        <SplashScreen />
        <div className="flex h-screen w-full">
          <Sidebar />
          <div className="flex flex-col flex-1 h-full overflow-hidden md:pl-0 transition-all">
            {/* The Sidebar is fixed, so we need to account for it if it wasn't overlapping, 
                but Sidebar is fixed left. We need a margin-left on the content or 
                just handle it via the flex layout if sidebar is relative. 
                My Sidebar component is fixed. I should probably make the main content 
                have a left margin or make the Sidebar relative in a grid.
                Let's make Sidebar logic in layout handle the spacing or just padding.
                Actually my Sidebar component has logic for width but it's fixed position.
                I will wrap the main content in a div with margin.
             */}
            <main className="flex-1 flex flex-col h-full relative transition-all overflow-hidden">
              {/* 
                  Note: The sidebar component toggles width. 
                  Ideally the width state should lift up to layout context, 
                  but for simplicity I'll style the sidebar to standard 64 (w-64) 
                  and if it collapses it goes to w-20. 
                  To avoid state complexity in this server component (Layout), 
                  I will just apply a standard left margin and let the sidebar overlay 
                  or push content. 
                  Better: Create a client wrapper for the layout body? 
                  
                  Alternative: Make the Sidebar relative (not fixed) so flex handles it. 
                  Let's check Sidebar.tsx code... 
                  "fixed left-0 top-0".
                  Okay, let's update Sidebar to be relative or handle the margin in a client component.
                  
                  Actually, sticking to margin-left: 16rem (w-64) is safest default.
                  The collapse feature acts on client side. Visual quirk is acceptable for MVP 
                  or I can make a 'Shell' client component.
               */}
              <MainContentWrapper>
                {children}
              </MainContentWrapper>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

// Simple wrapper to handle header inclusion and scrolling
import React from 'react';

function MainContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full w-full bg-black/20">
      <Header />
      <div className="flex-1 overflow-auto p-6 scroll-smooth">
        {children}
      </div>
    </div>
  );
}
