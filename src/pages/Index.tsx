import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  MessageSquare, 
  Globe, 
  Activity, 
  Shield, 
  Users, 
  BarChart3,
  ArrowRight,
  Check,
  Heart,
  AlertTriangle,
  Sparkles,
  Zap,
  Phone,
  Star
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const Index = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: MessageSquare,
      title: "Multilingual AI Chat",
      description: "24/7 health guidance in Hindi, English, Telugu, Odia, and more regional languages",
      status: "Active"
    },
    {
      icon: AlertTriangle,
      title: "Outbreak Monitoring",
      description: "Real-time disease surveillance and early warning system for rural communities",
      status: "Live"
    },
    {
      icon: Heart,
      title: "Health Awareness",
      description: "Preventive care education and health promotion campaigns",
      status: "Active"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Data-driven insights for health officials and policy makers",
      status: "Live"
    }
  ]

  const stats = [
    { label: "Active Users", value: "50,000+", icon: Users },
    { label: "Languages Supported", value: "8", icon: Globe },
    { label: "Health Queries Daily", value: "12,000+", icon: MessageSquare },
    { label: "Districts Covered", value: "150", icon: Activity }
  ]

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-health p-12 text-white shadow-health">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-secondary opacity-95" />
        
        {/* Floating Elements */}
        <div className="absolute top-8 left-8 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse-health" />
        <div className="absolute top-20 right-20 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse-health" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-16 left-32 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse-health" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">AI-Powered Health Revolution</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent">
              Healthcare for
              <span className="block text-white drop-shadow-lg">Rural India</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-50 max-w-3xl mx-auto leading-relaxed">
              Bridging the healthcare gap with <span className="font-semibold text-white">multilingual AI assistance</span>, 
              real-time disease monitoring, and instant health guidance for underserved communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/chat')}
                className="bg-white text-primary hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold group"
              >
                <MessageSquare className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Try Chat Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/dashboard')}
                className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold"
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                View Dashboard
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center items-center gap-6 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>WhatsApp + SMS</span>
              </div>
              <div className="w-1 h-1 bg-blue-200 rounded-full" />
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>8 Languages</span>
              </div>
              <div className="w-1 h-1 bg-blue-200 rounded-full" />
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <span>24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105 group border-0">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">{stat.value}</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="bg-gradient-card shadow-card hover:shadow-health transition-all duration-500 hover:scale-105 group border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="relative z-10 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <feature.icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </div>
                <Badge 
                  variant={feature.status === "Live" ? "default" : "secondary"}
                  className={`${feature.status === "Live" ? "bg-success hover:bg-success/90" : "bg-secondary"} shadow-sm font-semibold px-3 py-1`}
                >
                  <Star className="w-3 h-3 mr-1" />
                  {feature.status}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* System Status */}
      <Card className="bg-gradient-card shadow-health border-0 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-success/5 via-transparent to-primary/5" />
        
        <CardHeader className="relative z-10 pb-6">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-success/20 rounded-xl">
              <Shield className="h-6 w-6 text-success" />
            </div>
            System Status
            <Badge className="bg-success/20 text-success border-success/30 font-semibold">
              All Systems Operational
            </Badge>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-success/10 to-success/5 rounded-2xl border border-success/20 hover:shadow-lg transition-all duration-300 group">
              <div className="p-3 bg-success/20 rounded-full group-hover:scale-110 transition-transform">
                <Check className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="font-bold text-lg">WhatsApp Integration</p>
                <p className="text-success font-medium">Operational • 99.9% uptime</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-success/10 to-success/5 rounded-2xl border border-success/20 hover:shadow-lg transition-all duration-300 group">
              <div className="p-3 bg-success/20 rounded-full group-hover:scale-110 transition-transform">
                <Check className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="font-bold text-lg">SMS Gateway</p>
                <p className="text-success font-medium">Active • Real-time delivery</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-success/10 to-success/5 rounded-2xl border border-success/20 hover:shadow-lg transition-all duration-300 group">
              <div className="p-3 bg-success/20 rounded-full group-hover:scale-110 transition-transform">
                <Check className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="font-bold text-lg">AI Language Models</p>
                <p className="text-success font-medium">Online • 8 languages ready</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Index