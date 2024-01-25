import Gallery from '../Gallery/Gallery'
import Heading from '../Heading/Heading'
import './MainSection.scss'


const MainSection = ({heading, gallery}) => {
  return (
    <section className='section'>
      <Heading heading={heading}/>
      <Gallery gallery={gallery}/>
    </section>
  )
}

export default MainSection
