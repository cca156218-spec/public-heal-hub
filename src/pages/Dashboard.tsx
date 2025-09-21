import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  AlertTriangle,
  Globe,
  Activity,
  MapPin,
  Clock,
  Heart,
  Shield
} from "lucide-react"

const Dashboard = () => {
  const healthMetrics = [
    { label: "Total Consultations Today", value: "1,247", trend: "+12%", icon: MessageSquare },
    { label: "Active Users", value: "8,934", trend: "+8%", icon: Users },
    { label: "Response Time (Avg)", value: "2.3s", trend: "-15%", icon: Clock },
    { label: "Health Alerts Sent", value: "456", trend: "+25%", icon: AlertTriangle }
  ]

  const languageStats = [
    { language: "Hindi", percentage: 35, users: "3,127" },
    { language: "English", percentage: 25, users: "2,234" },
    { language: "Telugu", percentage: 15, users: "1,340" },
    { language: "Odia", percentage: 12, users: "1,072" },
    { language: "Bengali", percentage: 8, users: "715" },
    { language: "Others", percentage: 5, users: "446" }
  ]

  const recentActivity = [
    { type: "outbreak", message: "Dengue outbreak detected in Koraput district", time: "5 min ago", severity: "high" },
    { type: "query", message: "1,200 health queries processed in last hour", time: "10 min ago", severity: "normal" },
    { type: "alert", message: "Water contamination alert sent to 5 villages", time: "15 min ago", severity: "medium" },
    { type: "system", message: "WhatsApp integration - 99.9% uptime", time: "30 min ago", severity: "normal" }
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Health Dashboard</h1>
          <p className="text-muted-foreground">Real-time monitoring of rural health system</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="border-success text-success">
            <Activity className="w-3 h-3 mr-1" />
            Live Monitoring
          </Badge>
        </div>
      </div>

      {/* Health Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {healthMetrics.map((metric, index) => (
          <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elevated transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                  <p className={`text-sm ${metric.trend.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                    {metric.trend} from yesterday
                  </p>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <metric.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Language Usage */}
        <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Language Usage
            </CardTitle>
            <CardDescription>Distribution of queries by language today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {languageStats.map((lang, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{lang.language}</span>
                  <span className="text-muted-foreground">{lang.users} users</span>
                </div>
                <Progress value={lang.percentage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-secondary" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest system events and alerts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
                <div className={`p-1.5 rounded-full ${
                  activity.severity === 'high' ? 'bg-destructive/20' :
                  activity.severity === 'medium' ? 'bg-warning/20' : 'bg-success/20'
                }`}>
                  {activity.type === 'outbreak' && <AlertTriangle className="h-3 w-3 text-destructive" />}
                  {activity.type === 'query' && <MessageSquare className="h-3 w-3 text-primary" />}
                  {activity.type === 'alert' && <MapPin className="h-3 w-3 text-warning" />}
                  {activity.type === 'system' && <Shield className="h-3 w-3 text-success" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.message}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* System Health */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-destructive" />
            System Health Monitor
          </CardTitle>
          <CardDescription>Critical infrastructure status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">WhatsApp API</span>
                <span className="text-sm text-success">99.9%</span>
              </div>
              <Progress value={99.9} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">SMS Gateway</span>
                <span className="text-sm text-success">98.7%</span>
              </div>
              <Progress value={98.7} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">AI Models</span>
                <span className="text-sm text-success">100%</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard