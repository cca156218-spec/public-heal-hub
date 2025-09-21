import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  UserCheck, 
  Phone, 
  MessageSquare, 
  Clock, 
  MapPin, 
  Users, 
  Activity,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Stethoscope
} from "lucide-react"

const AshaWorkers = () => {
  const activeWorkers = [
    {
      id: 1,
      name: "Priya Sharma",
      region: "Koraput Block 1",
      status: "Available",
      activeChats: 3,
      todayEscalations: 8,
      languages: ["Hindi", "Odia"],
      specialization: "Maternal Health",
      experience: "5 years"
    },
    {
      id: 2,
      name: "Meera Devi",
      region: "Rayagada Village Cluster",
      status: "On Call",
      activeChats: 1,
      todayEscalations: 12,
      languages: ["Telugu", "English"],
      specialization: "Child Vaccination",
      experience: "8 years"
    },
    {
      id: 3,
      name: "Sunita Patel",
      region: "Malkangiri District",
      status: "Available",
      activeChats: 2,
      todayEscalations: 6,
      languages: ["Hindi", "Odia"],
      specialization: "Disease Prevention",
      experience: "3 years"
    }
  ]

  const escalationQueue = [
    {
      id: 1,
      user: "Rural Resident",
      location: "Village Podagada",
      issue: "Fever and breathing difficulty",
      priority: "High",
      waitTime: "2 min",
      assignedTo: "Priya Sharma",
      chatType: "WhatsApp"
    },
    {
      id: 2,
      user: "Pregnant Mother",
      location: "Jeypore Block",
      issue: "Vaccination schedule query",
      priority: "Medium",
      waitTime: "5 min",
      assignedTo: "Auto-assign",
      chatType: "SMS"
    },
    {
      id: 3,
      user: "Elderly Patient",
      location: "Bastar District",
      issue: "Diabetes management advice",
      priority: "Medium",
      waitTime: "3 min",
      assignedTo: "Meera Devi",
      chatType: "Voice Call"
    }
  ]

  const todayStats = [
    {
      title: "Total Escalations",
      value: "47",
      change: "+12 from yesterday",
      icon: AlertTriangle,
      color: "text-warning"
    },
    {
      title: "Resolved Cases",
      value: "42",
      change: "89% resolution rate",
      icon: CheckCircle,
      color: "text-success"
    },
    {
      title: "Average Response Time",
      value: "1.8 min",
      change: "-0.3 min improvement",
      icon: Clock,
      color: "text-primary"
    },
    {
      title: "Active ASHA Workers",
      value: "23",
      change: "Across 8 districts",
      icon: UserCheck,
      color: "text-secondary"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available': return 'bg-success text-success-foreground'
      case 'On Call': return 'bg-warning text-warning-foreground'
      case 'Busy': return 'bg-destructive text-destructive-foreground'
      default: return 'bg-muted text-muted-foreground'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
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
          <h1 className="text-3xl font-bold text-foreground">ASHA Worker Escalation</h1>
          <p className="text-muted-foreground">Human healthcare support integration system</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="border-success text-success">
            <UserCheck className="w-3 h-3 mr-1" />
            23 Workers Online
          </Badge>
          <Badge variant="outline" className="border-warning text-warning">
            <Clock className="w-3 h-3 mr-1" />
            5 Pending Escalations
          </Badge>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {todayStats.map((stat, index) => (
          <Card key={index} className="bg-gradient-card shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.change}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Active ASHA Workers */}
        <div className="xl:col-span-2">
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-success" />
                Active ASHA Workers
              </CardTitle>
              <CardDescription>Healthcare workers available for escalations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeWorkers.map((worker) => (
                <div key={worker.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <UserCheck className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{worker.name}</h3>
                        <p className="text-sm text-muted-foreground">{worker.specialization}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(worker.status)}>
                      {worker.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{worker.region}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      <span>{worker.experience} experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      <span>{worker.activeChats} active chats</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                      <span>{worker.todayEscalations} escalations today</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex gap-1">
                      {worker.languages.map((lang, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{lang}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Phone className="h-3 w-3 mr-1" />
                        Call
                      </Button>
                      <Button size="sm" className="bg-primary">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        Chat
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Escalation Queue */}
        <div>
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-warning" />
                Escalation Queue
              </CardTitle>
              <CardDescription>Pending human support requests</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {escalationQueue.map((escalation) => (
                <div key={escalation.id} className="border-l-4 border-warning pl-4 py-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">{escalation.user}</h4>
                    <Badge className={getPriorityColor(escalation.priority)}>
                      {escalation.priority}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{escalation.issue}</p>
                  
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{escalation.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" />
                      <span>{escalation.chatType}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>Waiting: {escalation.waitTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-primary font-medium">
                      {escalation.assignedTo}
                    </span>
                    <Button size="sm" className="h-6 text-xs">
                      Assign
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Performance Metrics */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            ASHA Worker Performance
          </CardTitle>
          <CardDescription>Real-time performance tracking and analytics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Response Time Distribution</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>&lt; 2 minutes</span>
                  <span className="font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>2-5 minutes</span>
                  <span className="font-medium">18%</span>
                </div>
                <Progress value={18} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>&gt; 5 minutes</span>
                  <span className="font-medium">4%</span>
                </div>
                <Progress value={4} className="h-2" />
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Resolution Outcomes</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Resolved by ASHA</span>
                  <span className="font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Referred to Clinic</span>
                  <span className="font-medium">12%</span>
                </div>
                <Progress value={12} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Emergency Referral</span>
                  <span className="font-medium">3%</span>
                </div>
                <Progress value={3} className="h-2" />
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">User Satisfaction</h4>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-success">4.8/5</div>
                <p className="text-sm text-muted-foreground">Average Rating</p>
                <div className="text-lg font-semibold text-primary">94%</div>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AshaWorkers