import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  Calendar, 
  Syringe, 
  Baby, 
  Users, 
  MapPin, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  Shield,
  Phone,
  MessageSquare
} from "lucide-react"

const VaccinationSchedule = () => {
  const upcomingCampaigns = [
    {
      id: 1,
      vaccine: "Polio (OPV)",
      campaign: "National Immunization Day",
      date: "2024-01-28",
      locations: ["Koraput", "Rayagada", "Malkangiri"],
      targetAge: "0-5 years",
      targetPopulation: 45000,
      registered: 38500,
      status: "Preparation"
    },
    {
      id: 2,
      vaccine: "Measles-Rubella",
      campaign: "Routine Immunization",
      date: "2024-02-15",
      locations: ["Bastar", "Dantewada"],
      targetAge: "9-15 months",
      targetPopulation: 12000,
      registered: 9800,
      status: "Registration Open"
    },
    {
      id: 3,
      vaccine: "DPT Booster",
      campaign: "School Health Program",
      date: "2024-03-01",
      locations: ["All Districts"],
      targetAge: "5-6 years",
      targetPopulation: 25000,
      registered: 15600,
      status: "Upcoming"
    }
  ]

  const todaySchedule = [
    {
      time: "09:00 AM",
      location: "Primary Health Center, Koraput",
      vaccine: "BCG, OPV, Hepatitis B",
      ageGroup: "Newborns",
      scheduled: 25,
      completed: 18,
      status: "In Progress"
    },
    {
      time: "11:00 AM",
      location: "Anganwadi Center, Jeypore",
      vaccine: "DPT, IPV, Rotavirus",
      ageGroup: "6 weeks",
      scheduled: 40,
      completed: 35,
      status: "Completed"
    },
    {
      time: "02:00 PM",
      location: "Community Center, Rayagada",
      vaccine: "Measles, JE",
      ageGroup: "9-12 months",
      scheduled: 30,
      completed: 12,
      status: "In Progress"
    }
  ]

  const reminderStats = [
    {
      title: "Reminders Sent Today",
      value: "2,847",
      subtitle: "WhatsApp: 1,920 | SMS: 927",
      icon: MessageSquare,
      color: "text-primary"
    },
    {
      title: "Follow-up Due",
      value: "1,245",
      subtitle: "Missed appointments",
      icon: AlertTriangle,
      color: "text-warning"
    },
    {
      title: "Vaccination Rate",
      value: "87.5%",
      subtitle: "This month's coverage",
      icon: Shield,
      color: "text-success"
    },
    {
      title: "Next Due",
      value: "3,156",
      subtitle: "Children due this week",
      icon: Calendar,
      color: "text-secondary"
    }
  ]

  const personalizedReminders = [
    {
      child: "Baby Arjun (6 months)",
      parent: "Sunita Devi",
      village: "Podagada Village",
      vaccine: "DPT-3, IPV-3",
      dueDate: "Tomorrow",
      contact: "+91 9876543210",
      language: "Odia",
      method: "WhatsApp"
    },
    {
      child: "Priya Sharma (12 months)",
      parent: "Meera Sharma",
      village: "Bastar District",
      vaccine: "Measles-1, JE-1",
      dueDate: "3 days",
      contact: "+91 9123456789",
      language: "Hindi",
      method: "SMS"
    },
    {
      child: "Baby Krishna (18 months)",
      parent: "Lakshmi Patel",
      village: "Malkangiri Town",
      vaccine: "Measles-2, DPT Booster",
      dueDate: "1 week",
      contact: "+91 8765432109",
      language: "Telugu",
      method: "Voice Call"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Preparation': return 'bg-warning text-warning-foreground'
      case 'Registration Open': return 'bg-primary text-primary-foreground'
      case 'Upcoming': return 'bg-secondary text-secondary-foreground'
      case 'In Progress': return 'bg-warning text-warning-foreground'
      case 'Completed': return 'bg-success text-success-foreground'
      default: return 'bg-muted text-muted-foreground'
    }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Vaccination Schedule</h1>
          <p className="text-muted-foreground">Government-integrated immunization tracking and reminders</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="border-primary text-primary">
            <Shield className="w-3 h-3 mr-1" />
            Co-WIN Integrated
          </Badge>
          <Badge variant="outline" className="border-success text-success">
            <CheckCircle className="w-3 h-3 mr-1" />
            87.5% Coverage
          </Badge>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {reminderStats.map((stat, index) => (
          <Card key={index} className="bg-gradient-card shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.subtitle}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Upcoming Campaigns */}
        <div className="xl:col-span-2">
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Upcoming Vaccination Campaigns
              </CardTitle>
              <CardDescription>Government scheduled immunization drives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingCampaigns.map((campaign) => (
                <div key={campaign.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Syringe className="h-6 w-6 text-primary" />
                      <div>
                        <h3 className="font-semibold">{campaign.vaccine}</h3>
                        <p className="text-sm text-muted-foreground">{campaign.campaign}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(campaign.status)}>
                      {campaign.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{new Date(campaign.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Baby className="h-4 w-4 text-muted-foreground" />
                      <span>{campaign.targetAge}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{campaign.locations.join(", ")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{campaign.registered.toLocaleString()} registered</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Registration Progress</span>
                      <span>{Math.round((campaign.registered / campaign.targetPopulation) * 100)}%</span>
                    </div>
                    <Progress value={(campaign.registered / campaign.targetPopulation) * 100} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      {campaign.registered.toLocaleString()} of {campaign.targetPopulation.toLocaleString()} children registered
                    </p>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline">
                      <MessageSquare className="h-3 w-3 mr-1" />
                      Send Reminders
                    </Button>
                    <Button size="sm" className="bg-primary">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Today's Schedule */}
        <div>
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-secondary" />
                Today's Schedule
              </CardTitle>
              <CardDescription>Active vaccination sessions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {todaySchedule.map((session, index) => (
                <div key={index} className="border-l-4 border-secondary pl-4 py-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{session.time}</span>
                    <Badge className={getStatusColor(session.status)} variant="outline">
                      {session.status}
                    </Badge>
                  </div>
                  
                  <h4 className="font-medium">{session.vaccine}</h4>
                  <p className="text-sm text-muted-foreground">{session.location}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-muted-foreground">Age Group:</span>
                      <p className="font-medium">{session.ageGroup}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Progress:</span>
                      <p className="font-medium">{session.completed}/{session.scheduled}</p>
                    </div>
                  </div>

                  <Progress value={(session.completed / session.scheduled) * 100} className="h-1" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Personalized Reminders */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-warning" />
            Personalized Vaccination Reminders
          </CardTitle>
          <CardDescription>AI-driven multilingual reminders for parents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalizedReminders.map((reminder, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Baby className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold text-sm">{reminder.child}</h4>
                    <p className="text-xs text-muted-foreground">Parent: {reminder.parent}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs">{reminder.village}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Syringe className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs">{reminder.vaccine}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs font-medium text-warning">Due: {reminder.dueDate}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex gap-1">
                    <Badge variant="secondary" className="text-xs">{reminder.language}</Badge>
                    <Badge variant="outline" className="text-xs">{reminder.method}</Badge>
                  </div>
                  <Button size="sm" variant="outline" className="h-6 text-xs">
                    <Phone className="h-3 w-3 mr-1" />
                    Send
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default VaccinationSchedule