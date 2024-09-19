import Navbar from "@/app/components/base/Navbar";
import HeroSection from "@/app/components/base/HeroSection";
import FeatureSection from "@/app/components/base/FeatureSection";
import UserReviews from "@/app/components/base/UserReviews";

import Footer from "@/app/components/base/Footer";
// import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";
// import { getServerSession } from "next-auth";
export default async function LandingPage() {
  // const session: CustomSession | null = await getServerSession(authOptions);
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header */}
      {/* <Navbar user={session?.user ?? null} /> */}
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* User Reviews Section */}
      <UserReviews />

      {/* Footer */}
      <Footer />
    </div>
  );
}
