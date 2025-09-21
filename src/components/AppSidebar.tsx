import { useState } from "react"
import { 
  Home, 
  MessageSquare, 
  BarChart3, 
  AlertTriangle, 
  Heart, 
  Users, 
  Languages, 
  Settings, 
  Activity,
  Shield,
  Globe,
  UserCheck,
  Calendar
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

const mainItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Chat Demo", url: "/chat", icon: MessageSquare },
  { title: "Dashboard", url: "/dashboard", icon: BarChart3 },
  { title: "Outbreak Alerts", url: "/alerts", icon: AlertTriangle },
  { title: "Features", url: "/features", icon: Shield },
  { title: "ASHA Workers", url: "/asha-workers", icon: UserCheck },
  { title: "Vaccination", url: "/vaccination", icon: Calendar },
  { title: "Disease Awareness", url: "/awareness", icon: Heart },
]

const adminItems = [
  { title: "Analytics", url: "/analytics", icon: Activity },
  { title: "User Management", url: "/users", icon: Users },
  { title: "Multi-language", url: "/languages", icon: Languages },
  { title: "System Health", url: "/system", icon: Shield },
  { title: "Settings", url: "/settings", icon: Settings },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path
  const isMainExpanded = mainItems.some((i) => isActive(i.url))
  const isAdminExpanded = adminItems.some((i) => isActive(i.url))
  
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary text-primary-foreground font-medium shadow-health" 
      : "hover:bg-accent hover:text-accent-foreground transition-colors"

  return (
    <Sidebar
      className={state === "collapsed" ? "w-14" : "w-64"}
      collapsible="icon"
    >
      <SidebarContent className="bg-gradient-dashboard">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-health rounded-lg">
              <Globe className="h-6 w-6 text-white" />
            </div>
            {state !== "collapsed" && (
              <div>
                <h2 className="font-bold text-lg text-foreground">HealthBot AI</h2>
                <p className="text-xs text-muted-foreground">Rural Health System</p>
              </div>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-semibold">
            Main System
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {state !== "collapsed" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Admin Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-secondary font-semibold">
            Administration
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {state !== "collapsed" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}