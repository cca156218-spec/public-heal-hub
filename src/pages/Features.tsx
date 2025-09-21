import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  Shield, 
  MessageSquare, 
  Wifi, 
  WifiOff,
  Users,
  Database,
  Clock,
  Globe,
  Phone,
  Smartphone,
  AlertTriangle,
  Heart,
  Calendar,
  UserCheck
} from "lucide-react"

const Features = () => {
  const coreFeatures = [
    {
      icon: Database,
      title: "80% Accuracy in Medical Responses",
      description: "Verified against medical databases with continuous learning",
      metrics: "Accuracy Rate: 80%",
      status: "Active",
      color: "text-success"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp/SMS Authentication",
      description: "Quick authentication under 10 seconds via mobile",
      metrics: "Auth Time: <10s",
      status: "Optimized",
      color: "text-primary"
    },
    {
      icon: WifiOff,
      title: "SMS Fallback System",
      description: "Works efficiently without internet connectivity",
      metrics: "99.9% Uptime",
      status: "Reliable",
      color: "text-warning"
    },
    {
      icon: Globe,
      title: "Culturally-Aware AI",
      description: "Understands local practices and cultural beliefs",
      metrics: "Cultural Context: 95%",
      status: "Advanced",
      color: "text-secondary"
    }
  ]

  const integrationFeatures = [
    {
      icon: Shield,
      title: "Government API Integration",
      description: "Real-time data from official health databases",
      integration: "Ministry of Health & Family Welfare",
      status: "Connected"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Continuous health support replacing limited clinic hours",
      integration: "National Health Mission",
      status: "Always On"
    },
    {
      icon: AlertTriangle,
      title: "Disease Outbreak Alerts",
      description: "Integrated with government surveillance systems",
      integration: "IDSP (Integrated Disease Surveillance Programme)",
      status: "Real-time"
    },
    {
      icon: Calendar,
      title: "Vaccination Schedules",
      description: "Synchronized with government immunization programs",
      integration: "Co-WIN API",
      status: "Synchronized"
    }
  ]

  const advancedFeatures = [
    {
      icon: Globe,
      title: "Multilingual NLP Support",
      description: "Natural language processing in Hindi, English, Telugu, Odia",
      languages: ["Hindi", "English", "Telugu", "Odia"],
      coverage: 85
    },
    {
      icon: UserCheck,
      title: "ASHA Worker Escalation",
      description: "Auto-connect users with human healthcare workers when needed",
      response: "< 2 minutes",
      coverage: 92
    },
    {
      icon: Heart,
      title: "Personalized Health Tips",
      description: "AI-driven preventive care and vaccination reminders",
      personalization: "98% relevant",
      coverage: 78
    },
    {
      icon: Smartphone,
      title: "Multi-Channel Access",
      description: "WhatsApp, SMS, Voice calls, and web interface",
      channels: 4,
      coverage: 95
    }
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Advanced Health AI Features</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive AI-driven healthcare system designed for rural India with government integration
        </p>
      </div>

      {/* Core Features */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Core AI Capabilities
          </CardTitle>
          <CardDescription>Foundation features ensuring reliable healthcare assistance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <Badge variant="outline" className="mt-1">{feature.status}</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-primary">{feature.metrics}</span>
                  <div className="w-24 h-2 bg-muted rounded-full">
                    <div className="h-full bg-success rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Government Integration */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-6 w-6 text-secondary" />
            Government Database Integration
          </CardTitle>
          <CardDescription>Real-time connectivity with official health systems</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {integrationFeatures.map((feature, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <feature.icon className="h-6 w-6 text-secondary" />
                    <h3 className="font-semibold">{feature.title}</h3>
                  </div>
                  <Badge className="bg-success text-success-foreground">{feature.status}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
                <div className="pt-2 border-t">
                  <p className="text-xs font-medium text-primary">Integrated with: {feature.integration}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Advanced Features */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6 text-warning" />
            Advanced User Experience Features
          </CardTitle>
          <CardDescription>Sophisticated capabilities for comprehensive healthcare support</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-4">
                <div className="flex items-center gap-3">
                  <feature.icon className="h-6 w-6 text-warning" />
                  <h3 className="font-semibold">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
                
                {feature.languages && (
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {feature.languages.map((lang, i) => (
                        <Badge key={i} variant="secondary">{lang}</Badge>
                      ))}
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Language Coverage</span>
                        <span>{feature.coverage}%</span>
                      </div>
                      <Progress value={feature.coverage} className="h-2" />
                    </div>
                  </div>
                )}

                {feature.response && (
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Response Time:</span>
                      <p className="font-medium text-primary">{feature.response}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Success Rate:</span>
                      <p className="font-medium text-success">{feature.coverage}%</p>
                    </div>
                  </div>
                )}

                {feature.personalization && (
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Relevance:</span>
                      <p className="font-medium text-primary">{feature.personalization}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">User Coverage:</span>
                      <p className="font-medium text-success">{feature.coverage}%</p>
                    </div>
                  </div>
                )}

                {feature.channels && (
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Channels:</span>
                      <p className="font-medium text-primary">{feature.channels} Active</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Accessibility:</span>
                      <p className="font-medium text-success">{feature.coverage}% Population</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Status */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wifi className="h-6 w-6 text-success" />
            System Performance & Reliability
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-success">99.9%</div>
              <p className="text-sm text-muted-foreground">System Uptime</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">2.1s</div>
              <p className="text-sm text-muted-foreground">Average Response Time</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-warning">500K+</div>
              <p className="text-sm text-muted-foreground">Daily Interactions</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Features