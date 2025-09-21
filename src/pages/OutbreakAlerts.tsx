import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  AlertTriangle, 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp,
  Shield,
  Activity,
  Phone,
  MessageSquare
} from "lucide-react"

const OutbreakAlerts = () => {
  const activeOutbreaks = [
    {
      id: 1,
      disease: "Dengue Fever",
      location: "Koraput District, Odisha",
      severity: "High",
      cases: 45,
      trend: "+12 today",
      lastUpdate: "2 hours ago",
      status: "Active Monitoring"
    },
    {
      id: 2,
      disease: "Malaria",
      location: "Bastar District, Chhattisgarh",
      severity: "Medium",
      cases: 23,
      trend: "+3 today",
      lastUpdate: "4 hours ago",
      status: "Under Control"
    },
    {
      id: 3,
      disease: "Chikungunya",
      location: "Rayagada District, Odisha",
      severity: "Low",
      cases: 8,
      trend: "+1 today",
      lastUpdate: "6 hours ago",
      status: "Monitoring"
    }
  ]

  const preventionCampaigns = [
    {
      disease: "Dengue",
      reach: 12500,
      messages: "Remove standing water, use mosquito nets",
      coverage: 85
    },
    {
      disease: "Malaria",
      reach: 8900,
      messages: "Use treated bed nets, eliminate breeding sites",
      coverage: 78
    },
    {
      disease: "Chikungunya",
      reach: 5600,
      messages: "Prevent mosquito breeding, seek early treatment",
      coverage: 92
    }
  ]

  const recentAlerts = [
    {
      type: "outbreak",
      message: "New dengue cluster detected in Jeypore block",
      location: "Koraput, Odisha",
      time: "15 min ago",
      action: "Field team dispatched"
    },
    {
      type: "prevention",
      message: "Water contamination warning issued",
      location: "5 villages in Malkangiri",
      time: "1 hour ago",
      action: "SMS alerts sent to 2,500 residents"
    },
    {
      type: "response",
      message: "Medical team deployed for outbreak response",
      location: "Bastar, Chhattisgarh",
      time: "3 hours ago",
      action: "On-ground assessment initiated"
    }
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-destructive text-destructive-foreground'
      case 'Medium': return 'bg-warning text-warning-foreground'
      case 'Low': return 'bg-success text-success-foreground'
      default: return 'bg-muted text-muted-foreground'
    }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Outbreak Alerts</h1>
          <p className="text-muted-foreground">Real-time disease surveillance and response coordination</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="border-destructive text-destructive">
            <AlertTriangle className="w-3 h-3 mr-1" />
            3 Active Outbreaks
          </Badge>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Cases</p>
                <p className="text-2xl font-bold text-destructive">76</p>
                <p className="text-sm text-muted-foreground">+16 today</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Districts Affected</p>
                <p className="text-2xl font-bold text-warning">8</p>
                <p className="text-sm text-muted-foreground">2 states</p>
              </div>
              <MapPin className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Alerts Sent</p>
                <p className="text-2xl font-bold text-primary">2,847</p>
                <p className="text-sm text-muted-foreground">Last 24h</p>
              </div>
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Response Teams</p>
                <p className="text-2xl font-bold text-success">12</p>
                <p className="text-sm text-muted-foreground">Deployed</p>
              </div>
              <Shield className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Active Outbreaks */}
        <div className="xl:col-span-2">
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-destructive" />
                Active Outbreaks
              </CardTitle>
              <CardDescription>Current disease outbreaks requiring attention</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeOutbreaks.map((outbreak) => (
                <div key={outbreak.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{outbreak.disease}</h3>
                    <Badge className={getSeverityColor(outbreak.severity)}>
                      {outbreak.severity} Risk
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{outbreak.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{outbreak.cases} cases</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      <span>{outbreak.trend}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{outbreak.lastUpdate}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Badge variant="outline">{outbreak.status}</Badge>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Phone className="h-3 w-3 mr-1" />
                        Contact Team
                      </Button>
                      <Button size="sm" className="bg-primary">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Alerts */}
        <div>
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Recent Alerts
              </CardTitle>
              <CardDescription>Latest system notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentAlerts.map((alert, index) => (
                <div key={index} className="border-l-4 border-primary pl-4 py-2">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className={`h-4 w-4 mt-0.5 ${
                      alert.type === 'outbreak' ? 'text-destructive' :
                      alert.type === 'prevention' ? 'text-warning' : 'text-success'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{alert.message}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {alert.location}
                      </p>
                      <p className="text-xs text-success">{alert.action}</p>
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Prevention Campaigns */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-secondary" />
            Prevention Campaigns
          </CardTitle>
          <CardDescription>Active health awareness and prevention messaging</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {preventionCampaigns.map((campaign, index) => (
              <div key={index} className="space-y-3 p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{campaign.disease} Prevention</h3>
                  <Badge variant="secondary">{campaign.coverage}% Coverage</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{campaign.messages}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>People Reached</span>
                    <span className="font-medium">{campaign.reach.toLocaleString()}</span>
                  </div>
                  <Progress value={campaign.coverage} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default OutbreakAlerts