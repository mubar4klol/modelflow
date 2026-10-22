import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "ModelFlow | Conversation Operations", description: "Referral and conversation tracking prototype" };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
