// import { Checkbox } from "@/components/ui/checkbox"
// import { Label } from "@/components/ui/label"
import React from "react"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

export default function Check() {
  return (
  <div className="w-1/2 mx-auto  flex mt-20 mb-60">
      <form action="" method="post" className="w-full flex flex-col">
      <div className="flex flex-col gap-y-4 items-center justify-center w-full">
      <h2 className="self-start">Choose A Payment Method</h2>
      <RadioGroup defaultValue="comfortable" className="w-full space-y-4">
      <div className="flex items-center bg-[#E1E6FA] py-6 px-4 space-x-4">
        <RadioGroupItem value="bank  tranfer" id="bankTransfer" className="size-10" />
        <Label htmlFor="bankTransfer" className="text-2xl font-normal">Pay With Bank Transfer</Label>
      </div>
      <div className="flex items-center bg-[#E1E6FA] py-6 px-4 space-x-4">
        <RadioGroupItem value="card" id="card" className="size-10" />
        <Label htmlFor="card" className="text-2xl font-normal">Pay With Card</Label>
      </div>
    </RadioGroup>
      </div>
      <Link to={"/card"}><Button className=" w-60 self-end mt-14 py-6 px-3 bg-[#183152] hover:bg-[#183152]">PROCEED TO PAYMENT</Button></Link>
    </form>
  </div>
  )
}
