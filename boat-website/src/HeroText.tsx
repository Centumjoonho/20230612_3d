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
    className="flex flex-col items-center text-center">
        
        <motion.div variants={reveal} initial="hiddenVariant" animate="revealedVariant" transition={{delay:animationStart+1, duration:0.5}} className="flex flex-col text-3vw <md:text-24px font-bold mb-30px pt-100px">
            <span>Centum Joonho</span>
            <IconMe/>
            <span>Software developer</span>

        </motion.div>
        <span className="mb-30px w-1/4 <lg:w-1/3 <mb:w-1/2 text-14px leading-tight">
            부산 센텀 재영소프트 연구소에서 근무하고 있는 개발자 이준호 입니다.
            
        </span>
    </motion.div>
    </>

    );
}
export default HeroText; 