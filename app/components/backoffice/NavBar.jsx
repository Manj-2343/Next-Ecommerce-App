import {
  AlignJustify,
  Bell,
  LayoutDashboard,
  LogOut,
  Settings,
  Sun,
  User,
  X,
} from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeSwitcher from "../ThemeSwitcher";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between dark:bg-slate-800 bg-white text-slate-50  h-20 px-8 py-8 fixed top-0 w-100% left-60 right-0 pl-30 z-40 shadow-md">
      {/* Icons */}
      <button className="text-lime-700 dark:text-lime-500">
        <AlignJustify />
      </button>
      {/* 3Icons */}
      <div className="flex space-x-3">
        <button>
        <ThemeSwitcher />
        </button >
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent  rounded-lg "
            >
              <Bell className="text-lime-700 dark:text-lime-500" />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-800  rounded-full -top-0 end-6 dark:border-gray-900">
                20
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-2 px-4 pr-8">
            <DropdownMenuLabel>Notification</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <img
                  src="/profile.jpg"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Image yellow sweet corn stock out..</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-2 py-0.55 bg-red-700 text-white rounded-full text-sm">Stock Out</p>
                    <p>Dec 12 2024 -12:40PM</p>
                  </div>
                </div>
                <button className="border"><X/></button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <img
                  src="/profile.jpg"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Image yellow sweet corn stock out..</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-2 py-0.55 bg-red-700 text-white rounded-full text-sm">Stock Out</p>
                    <p>Dec 12 2024 -12:40PM</p>
                  </div>
                </div>
                <button className="border"><X/></button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <img
                  src="/profile.jpg"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Image yellow sweet corn stock out..</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-2 py-0.55 bg-green-700 text-white rounded-full text-sm">Stock Out</p>
                    <p>Dec 12 2024 -12:40PM</p>
                  </div>
                </div>
                <button className="border"><X/></button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <img
                  src="/profile.jpg"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Image yellow sweet corn stock out..</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-2 py-0.55 bg-red-700 text-white rounded-full text-sm">Stock Out</p>
                    <p>Dec 12 2024 -12:40PM</p>
                  </div>
                </div>
                <button className="border"><X/></button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <img
                  src="/profile.jpg"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Image yellow sweet corn stock out..</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-2 py-0.55 bg-green-700 text-white rounded-full text-sm">Stock Out</p>
                    <p>Dec 12 2024 -12:40PM</p>
                  </div>
                </div>
                <button className="border"><X/></button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LogOut className="mr-2 h-4 w-4"></LogOut>
                <span>LogOut</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <button>
              <img
                src="/profile.jpg"
                alt="User Profile"
                width={200}
                height={200}
                className="w-8 h-8 rounded-full"
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-2 px-4 pr-8">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LayoutDashboard className="mr-2 h-4 w-4"></LayoutDashboard>
                <span>DashBoard</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <Settings className="mr-2 h-4 w-4"></Settings>
                <span>Edit Profile</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LogOut className="mr-2 h-4 w-4"></LogOut>
                <span>LogOut</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavBar;
