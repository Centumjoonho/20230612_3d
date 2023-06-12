import ArrowRight from "./ArrowRight"
import Logo from "./Logo"

function Navbar() {


    return (
 <div className="w-full flex items-center justify-around h-80px fixed top-0 bg-white z-100">
    <Logo/>
    <div className="flex gap-20px items-center <md:hidden">
        <span>solutions.</span>
        <span>courses.</span>
        <span>resources.</span>
        <span>about.</span>
    </div>
    <div className="flex gap-5px items-center cursor-pointer">
        <span className="mb-3px">sign in</span>
    <ArrowRight/>
    </div>
    </div>
    )
  }
  
  export default Navbar
  