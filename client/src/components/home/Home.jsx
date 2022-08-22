import { useEffect } from "react";
import { styled,Box } from "@mui/material";
import Banner from "./Banner";
import NavBar from "./NavBar";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch,useSelector } from "react-redux";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";


const Component=styled(Box)`
padding: 10px;
background:#f2f2f2
`

const Home = () => {

  const { products } = useSelector(state=>state.getProducts)
 
  const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getProducts())
},[dispatch])


  return (
    <>
      <NavBar/>
      <Component>
        <Banner/>
        <MidSlide products={products} title="Deal of the day" timer={true} />
        <MidSection/>
        <Slide products={products} title="Discounts for you" timer={false} />
        <Slide products={products} title="Suggesting Items"  timer={false}/>
        <Slide products={products} title="Top Selection"  timer={false}/>
        <Slide products={products} title="Recommended items"  timer={false}/>
        <Slide products={products} title="Trending offers"  timer={false}/>
        <Slide products={products} title="Season Best Picks"  timer={false}/>
        <Slide products={products} title="Top deal on accessories"  timer={false}/>
      </Component>
      
    </> 
    

    
    
   );
}
 
export default Home;