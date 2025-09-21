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
  AlertTriangle
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
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-health p-8 text-white">
        <div className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              AI-Powered Healthcare for Rural India
            </h1>
            <p className="text-xl mb-6 text-blue-100">
              Bridging the healthcare gap with multilingual AI assistance, real-time disease monitoring, 
              and instant health guidance for underserved communities.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => navigate('/chat')}
                className="bg-white text-primary hover:bg-gray-100"
              >
                Try Chat Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/dashboard')}
                className="border-white text-white hover:bg-white/10"
              >
                View Dashboard
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 translate-x-16" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elevated transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elevated transition-all hover:scale-105">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
                <Badge 
                  variant={feature.status === "Live" ? "default" : "secondary"}
                  className={feature.status === "Live" ? "bg-success" : ""}
                >
                  {feature.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* System Status */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-success" />
            System Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
              <Check className="h-4 w-4 text-success" />
              <div>
                <p className="font-medium">WhatsApp Integration</p>
                <p className="text-sm text-muted-foreground">Operational</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
              <Check className="h-4 w-4 text-success" />
              <div>
                <p className="font-medium">SMS Gateway</p>
                <p className="text-sm text-muted-foreground">Active</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
              <Check className="h-4 w-4 text-success" />
              <div>
                <p className="font-medium">AI Language Models</p>
                <p className="text-sm text-muted-foreground">Online</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Index