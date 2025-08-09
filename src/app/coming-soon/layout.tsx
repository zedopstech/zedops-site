import { ReactNode } from "react";

export const metadata = {
  title: "ZedOps: The Future of Construction Management is Coming Soon",
  description: "Get ready for ZedOps. We are building a revolutionary platform to streamline construction project management, enhance collaboration, and boost efficiency. Sign up for exclusive updates.",
};

export default function ComingSoonLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}