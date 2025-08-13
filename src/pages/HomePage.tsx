import AboutComponent from "../components/home-components/About"
import Categories from "../components/home-components/Categories"
import FaqSection from "../components/home-components/Faq"
import OurSuggest from "../components/home-components/OurSuggest"
import Showcase from "../components/home-components/Showcase"
import WhyUs from "../components/home-components/WhyUs"

const HomePage = () => {
  return (
    <>
        <Showcase/>
        <Categories />
        <OurSuggest/>
        <WhyUs/>
        <FaqSection/>
        <AboutComponent/>
    </>
  )
}

export default HomePage