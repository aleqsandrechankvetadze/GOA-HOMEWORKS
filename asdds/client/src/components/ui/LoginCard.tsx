import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "./switch"
import { Apple, Facebook, Mail } from "lucide-react"

export function LoginCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>sign up</CardTitle>
        <CardDescription>or</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex gap-5">
          <Facebook />
          <Mail />
          <Apple />
          </div>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="your full name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">password</Label>
              <Input id="name" placeholder="your password" />
            </div>
            <div className="flex items-center gap-5">
              <Switch/>
              <p>remember me</p>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between flex-col">
        <Button className="px-[130px]">sign up</Button>
        <p>dont have an account? <span className="text-gray-500">sign up</span></p>
      </CardFooter>
    </Card>
  )
}

