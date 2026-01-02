import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ComboBoxResponsive from "@/components/ui/LanguageCbo"
import  DollarIcon  from "../ui/DollarIcon"
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"





function TopBanner() {
  return (
    <div className="w-full border-b-2">
      <div className="flex items-center justify-between px-3 py-3">

        {/* Left side: Avatar + Title */}
        <div className="flex items-center space-x-6">

          {/* Avatar */}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          {/* Left divider + Mint */}
          <div className="flex items-center border-l-2 pl-4 h-full">
            <h1 className="text-2xl font-semibold flex items-center gap-3">
              <DollarIcon className="w-10 h-10" />
              Mint
            </h1>
          </div>
        </div>

        {/* Right side: Language combo box */}
        <div className="flex items-center gap-3">
          <ComboBoxResponsive />
          <AnimatedThemeToggler />
          <IoNotificationsCircleSharp className="w-6 h-6"/>
          
        </div>

      </div>
    </div>
  )
}

export default TopBanner
