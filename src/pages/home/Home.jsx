import React,{useState,useEffect} from 'react'
import Slider from '../../components/Slider/Slider'
import './Home.scss'
import Inner from '../../components/inner/Inner';
import Card from '../../components/UI/Card/Card';
import productsData from '../../assets/data/products'
import homeImg from '../../assets/image/home1.webp'
import homeImg3 from '../../assets/image/home3.webp'
import Helmet from '../../components/Helmet/Helmet';



const Home = () => {
  const [data,setData] = useState(productsData)
  const [data2,setData2] = useState(productsData)
 
  useEffect(() => {
    const filterData = productsData.filter(item => item.category === 'watch1');
    
    const filterData2 = productsData.filter(item => item.category === 'watch2');
    
    setData(filterData)
    setData2(filterData2)
  },[])
  return (
  <Helmet title={'Home'}>
      <div className='home'>
        <Slider />
        <section className='hero'>
         
            <h1>The Lawson Collection</h1>
            <p>We are happy to introduce the new Lawson Collection. These are three quartz models designed with simplicity and elegance kept in mind. They come in different sizes and colors, and all feature a stainless steel back — leaving enough space for a personalized engraving. The engraving service is complimentary with any watch from the Lawson series.</p>
          
        </section>
         <Card data={data} />
        
        <section className='rewiews'>
            <div className="wrapper">
              <div className="left">
                <h2>Swiss Essence</h2>
                <p>The first association that comes to one’s mind with the phrase “a good wristwatch” is naturally one made somewhere in Switzerland. Do you want to know what makes Swiss watches stand out?</p>
                <button>LEARN MORE</button>
              </div>
              <div className="right">
                <img src={homeImg} alt="" />
              </div>
            </div>
        </section>
        <Inner />
  
        <section className='rewiews2'>
            <div className="wrapper">
              <div className="left">
                <h2>Swiss Essence</h2>
                <p>The first association that comes to one’s mind with the phrase “a good wristwatch” is naturally one made somewhere in Switzerland. Do you want to know what makes Swiss watches stand out?</p>
                <button>LEARN MORE</button>
              </div>
              <div className="right">
                <img src={homeImg3} alt="" />
              </div>
            </div>
        </section>
  
        <div className='cards2'>
          <h2>Our Bestsellers</h2>
          <Card data={data2} />
        <button>SHOW ALL</button>
        </div>
      </div>
  </Helmet>
  )
}

export default Home