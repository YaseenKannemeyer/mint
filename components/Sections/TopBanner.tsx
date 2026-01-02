import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ComboBoxResponsive from "@/components/ui/LanguageCbo"

function TopBanner() {
  return (
    <div className="w-full border-b-2">
      <div className="flex items-stretch justify-between px-3 py-3">
        
        {/* Left side: Avatar + Title */}
        <div className="flex items-stretch space-x-6">
          <div className=" flex items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          {/* Left divider */}
          <div className="flex items-stretch border-l-2 pl-10 -my-3">
            <h1 className="text-2xl font-semibold flex items-center">
              Mint
            </h1>
          </div>
        </div>

        {/* Right side: Language combo box */}
        <div className="flex justify-end items-center pr-4 md:pr-6 lg:pr-8">
          <ComboBoxResponsive />
        </div>

      </div>
    </div>
  )
}

export default TopBanner
