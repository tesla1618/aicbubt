import Image from "next/image";
import HeroSlider from "../components/HeroSlider";
import RecentUpdates from "../components/RecentUpdates";
import Events from "../components/Events";
import Team from "../components/Team";
import RecentBlog from "../components/RecentBlog";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <RecentUpdates />
      <Events />
      <RecentBlog />
      <Team />
    </div>
  );
}
