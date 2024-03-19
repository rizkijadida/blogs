import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold cursor-pointer">Foodhub</h1>

          <div className="hidden md:block">
            <div className="flex cursor-pointer items-center gap-8">
              <h3>Home</h3>
              <h3>Profile</h3>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="block md:hidden">
            <Button variant="ghost">
                <Menu/>
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Home</DropdownMenuItem>
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
