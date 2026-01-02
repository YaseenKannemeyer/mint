"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import ReactCountryFlag from "react-country-flag"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Spoken languages with associated country codes for flags
const languages = [
  { value: "english", label: "English", countryCode: "US" },
  { value: "spanish", label: "Spanish", countryCode: "ES" },
  { value: "french", label: "French", countryCode: "FR" },
  { value: "german", label: "German", countryCode: "DE" },
  { value: "portuguese", label: "Portuguese", countryCode: "PT" },
  { value: "chinese", label: "Chinese", countryCode: "CN" },
  { value: "japanese", label: "Japanese", countryCode: "JP" },
  { value: "hindi", label: "Hindi", countryCode: "IN" },
  { value: "arabic", label: "Arabic", countryCode: "SA" },
]

function ComboBoxResponsive() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("english") // <-- Default is now English

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-35 justify-between"
        >
          {value ? (
            <div className="flex items-center gap-2">
              <ReactCountryFlag
                countryCode={
                  languages.find((lang) => lang.value === value)?.countryCode ||
                  "US"
                }
                svg
                style={{ width: "1.5em", height: "1.5em" }}
                title={languages.find((lang) => lang.value === value)?.label}
              />
              {languages.find((lang) => lang.value === value)?.label}
            </div>
          ) : (
            "Select language..."
          )}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search language..." className="h-9" />
          <CommandList>
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup>
              {languages.map((lang) => (
                <CommandItem
                  key={lang.value}
                  value={lang.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <div className="flex items-center gap-2">
                    <ReactCountryFlag
                      countryCode={lang.countryCode}
                      svg
                      style={{ width: "1.5em", height: "1.5em" }}
                      title={lang.label}
                    />
                    {lang.label}
                  </div>
                  <Check
                    className={cn(
                      "ml-auto",
                      value === lang.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default ComboBoxResponsive
