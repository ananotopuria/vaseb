import OurStory from '../components/AboutUsComponents/OurStory';
import Options from '../components/common/Options';
import JourneyBlock from '../components/AboutUsComponents/Milestones';
import Title from '../components/common/Title';
import Vision from '../components/AboutUsComponents/Vision';
import Banner from '../components/AboutUsComponents/Banner';
import Team from '../components/AboutUsComponents/Team';
import Blogs from '../components/common/Blogs';
import FAQ from '../components/common/FAQ';

export default function AboutUsPage() {
  return (
    <div>
      <Title
        mainTitle="Our Story"
        subTitle="About Us"
      />
      <OurStory />
      <JourneyBlock />
      <Vision/>
      <Banner/>
      <Team/>
      <Options />
      <Blogs/>
      <FAQ showImage={false} />
    </div>
  );
}
