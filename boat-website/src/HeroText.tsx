import { motion } from "framer-motion";
import IconMe from "./IconMe";
import { animationStart, reveal } from "./utils/animation";

function HeroText( ){
    return(
    <>
    <motion.div
    layout
    initial={{height:0}}
    animate={{height:"unset"}}
    transition={{delay: animationStart, duration: 1}} 
    className="flex flex-col items-center text-center pt-100px">
        
        <motion.div variants={reveal} initial="hiddenVariant" animate="revealedVariant" transition={{delay:animationStart+2, duration:1}} className="flex flex-col text-3vw <md:text-24px font-bold mb-30px pt-100px">
            <span>Centum Joonho</span>
            <IconMe/>
            <span>Software developer</span>

        </motion.div>
        <span className="mb-30px w-1/4 <lg:w-1/3 <mb:w-1/2 text-14px leading-tight">
            나는 불현듯이 겨드랑이가 가렵다. 아하, 그것은 내 인공의 날개가 돋았던 자국이다. 오늘은 없는 날개. 
            나는 걷던 걸음을 멈추고 그리고 어디 한 번 이렇게 외쳐보고 싶었다.
            날개야, 다시 돋아라. 날자, 날자, 날자, 한 번만 날자꾸나. 한 번만 더 날아 보자꾸나.
        </span>
    </motion.div>
    </>

    );
}
export default HeroText;