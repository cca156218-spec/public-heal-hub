import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Send, 
  Bot, 
  User, 
  Globe, 
  MessageSquare,
  Volume2,
  Mic
} from "lucide-react"

interface Message {
  id: number
  content: string
  sender: 'user' | 'bot' | 'system'
  timestamp: string
  language?: string
  translated?: string
}

const ChatDemo = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "नमस्ते! मैं HealthBot AI हूं। मैं आपकी स्वास्थ्य संबंधी समस्याओं में मदद कर सकता हूं।",
      sender: 'bot',
      timestamp: '10:30 AM',
      language: 'Hindi',
      translated: 'Hello! I am HealthBot AI. I can help you with your health-related problems.'
    },
    {
      id: 2,
      content: "मुझे बुखार है और सिर दर्द हो रहा है",
      sender: 'user',
      timestamp: '10:32 AM',
      language: 'Hindi',
      translated: 'I have fever and headache'
    },
    {
      id: 3,
      content: "मुझे समझ गया। बुखार और सिरदर्द के कई कारण हो सकते हैं। कृपया बताएं:\n\n• बुखार कितने दिन से है?\n• तापमान कितना है?\n• कोई अन्य लक्षण जैसे खांसी, गले में दर्द?\n\nतुरंत राहत के लिए:\n✓ आराम करें\n✓ तरल पदार्थ पिएं\n✓ यदि बुखार 101°F से ज्यादा है तो डॉक्टर से मिलें",
      sender: 'bot',
      timestamp: '10:33 AM',
      language: 'Hindi',
      translated: 'I understand. Fever and headache can have many causes. Please tell me: • How many days have you had fever? • What is the temperature? • Any other symptoms like cough, sore throat? For immediate relief: ✓ Rest ✓ Drink fluids ✓ See a doctor if fever is above 101°F'
    }
  ])

  const [currentMessage, setCurrentMessage] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('Hindi')

  const languages = ['Hindi', 'English', 'Telugu', 'Odia', 'Bengali', 'Tamil']

  const sampleQueries = [
    { text: "मुझे डायबिटीज के बारे में जानकारी चाहिए", lang: "Hindi" },
    { text: "How to prevent dengue fever?", lang: "English" },
    { text: "బిపి ఎక్కువగా ఉంది, ఏం చేయాలి?", lang: "Telugu" },
    { text: "ପିଲାଙ୍କ ଟୀକାକରଣ କେବେ କରାଇବା ଉଚିତ?", lang: "Odia" }
  ]

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return

    const newMessage: Message = {
      id: messages.length + 1,
      content: currentMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      language: selectedLanguage
    }

    setMessages([...messages, newMessage])
    setCurrentMessage('')

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        content: "मैं आपकी समस्या को समझ रहा हूं। कृपया थोड़ा इंतजार करें जबकि मैं सबसे अच्छी सलाह तैयार करता हूं...",
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        language: selectedLanguage,
        translated: 'I understand your problem. Please wait while I prepare the best advice...'
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const handleSampleQuery = (query: string, lang: string) => {
    setCurrentMessage(query)
    setSelectedLanguage(lang)
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Chat Demo</h1>
          <p className="text-muted-foreground">Interactive AI health assistant demonstration</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="border-primary text-primary">
            <Bot className="w-3 h-3 mr-1" />
            AI Assistant Active
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="bg-gradient-card shadow-card h-[600px] flex flex-col">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-health rounded-full">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">HealthBot AI</CardTitle>
                    <CardDescription>Multilingual Health Assistant</CardDescription>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-success text-success-foreground">
                  Online
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 p-0">
              <ScrollArea className="h-full p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'user' 
                          ? 'bg-chat-user text-chat-user-foreground' 
                          : message.sender === 'bot'
                          ? 'bg-chat-bot text-chat-bot-foreground border'
                          : 'bg-chat-system text-chat-system-foreground'
                      }`}>
                        <div className="flex items-center gap-2 mb-1">
                          {message.sender === 'user' ? (
                            <User className="h-3 w-3" />
                          ) : (
                            <Bot className="h-3 w-3" />
                          )}
                          <span className="text-xs opacity-70">{message.timestamp}</span>
                          {message.language && (
                            <Badge variant="outline" className="text-xs h-4">
                              {message.language}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm whitespace-pre-line">{message.content}</p>
                        {message.translated && (
                          <p className="text-xs opacity-70 mt-2 italic border-t pt-2">
                            Translation: {message.translated}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              {/* Input Area */}
              <div className="border-t p-4">
                <div className="flex gap-2 mb-2">
                  <select 
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="text-xs border rounded px-2 py-1"
                  >
                    {languages.map(lang => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}
                  </select>
                  <Button variant="ghost" size="sm">
                    <Volume2 className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Mic className="h-3 w-3" />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Input
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    placeholder={`Type your health question in ${selectedLanguage}...`}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} className="bg-primary hover:bg-primary-dark">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Sample Queries */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                Sample Queries
              </CardTitle>
              <CardDescription>Try these example questions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {sampleQueries.map((query, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full text-left h-auto p-3 justify-start"
                  onClick={() => handleSampleQuery(query.text, query.lang)}
                >
                  <div>
                    <p className="text-sm font-medium">{query.text}</p>
                    <Badge variant="secondary" className="text-xs mt-1">{query.lang}</Badge>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Language Support */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                Language Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang, index) => (
                  <Badge 
                    key={index} 
                    variant={selectedLanguage === lang ? "default" : "outline"}
                    className="justify-center cursor-pointer"
                    onClick={() => setSelectedLanguage(lang)}
                  >
                    {lang}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ChatDemo