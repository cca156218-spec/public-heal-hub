-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  phone_number TEXT,
  preferred_language TEXT DEFAULT 'hindi',
  location TEXT,
  age INTEGER,
  gender TEXT,
  medical_conditions TEXT[],
  emergency_contact TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create ASHA workers table
CREATE TABLE public.asha_workers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  worker_id TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  district TEXT NOT NULL,
  block TEXT,
  village TEXT,
  specializations TEXT[],
  languages TEXT[] DEFAULT ARRAY['hindi', 'english'],
  availability_status TEXT DEFAULT 'available' CHECK (availability_status IN ('available', 'busy', 'offline')),
  rating DECIMAL(3,2) DEFAULT 0.0,
  total_consultations INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create chat conversations table
CREATE TABLE public.chat_conversations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  session_id TEXT NOT NULL,
  language TEXT DEFAULT 'hindi',
  platform TEXT DEFAULT 'whatsapp' CHECK (platform IN ('whatsapp', 'sms', 'web')),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'escalated', 'resolved', 'abandoned')),
  escalated_to UUID REFERENCES public.asha_workers(id),
  escalation_reason TEXT,
  user_location TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create chat messages table
CREATE TABLE public.chat_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id UUID NOT NULL REFERENCES public.chat_conversations(id) ON DELETE CASCADE,
  message_type TEXT NOT NULL CHECK (message_type IN ('user', 'bot', 'asha')),
  content TEXT NOT NULL,
  language TEXT DEFAULT 'hindi',
  confidence_score DECIMAL(3,2),
  medical_category TEXT,
  sentiment TEXT,
  requires_escalation BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create health queries table
CREATE TABLE public.health_queries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  conversation_id UUID REFERENCES public.chat_conversations(id) ON DELETE CASCADE,
  query_text TEXT NOT NULL,
  query_category TEXT NOT NULL,
  symptoms TEXT[],
  urgency_level TEXT DEFAULT 'normal' CHECK (urgency_level IN ('low', 'normal', 'high', 'emergency')),
  ai_response TEXT,
  accuracy_verified BOOLEAN DEFAULT false,
  user_feedback INTEGER CHECK (user_feedback >= 1 AND user_feedback <= 5),
  location TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create vaccination schedules table
CREATE TABLE public.vaccination_schedules (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  child_name TEXT,
  child_dob DATE,
  vaccine_name TEXT NOT NULL,
  due_date DATE NOT NULL,
  administered_date DATE,
  location TEXT,
  batch_number TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'administered', 'missed', 'rescheduled')),
  reminder_sent BOOLEAN DEFAULT false,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create outbreak alerts table
CREATE TABLE public.outbreak_alerts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  disease_name TEXT NOT NULL,
  alert_type TEXT NOT NULL CHECK (alert_type IN ('outbreak', 'warning', 'advisory', 'emergency')),
  severity_level INTEGER CHECK (severity_level >= 1 AND severity_level <= 5),
  affected_areas TEXT[] NOT NULL,
  description TEXT NOT NULL,
  prevention_measures TEXT,
  symptoms TEXT[],
  source_authority TEXT DEFAULT 'Government Health Department',
  active BOOLEAN DEFAULT true,
  cases_reported INTEGER DEFAULT 0,
  deaths_reported INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE
);

-- Create health analytics table
CREATE TABLE public.health_analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  metric_type TEXT NOT NULL,
  metric_value JSONB NOT NULL,
  location TEXT,
  time_period TEXT NOT NULL,
  recorded_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.asha_workers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.health_queries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vaccination_schedules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.outbreak_alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.health_analytics ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create RLS policies for ASHA workers
CREATE POLICY "ASHA workers can view their own data" 
ON public.asha_workers 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "ASHA workers can update their own data" 
ON public.asha_workers 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Public can view active ASHA workers for matching" 
ON public.asha_workers 
FOR SELECT 
USING (active = true);

-- Create RLS policies for chat conversations
CREATE POLICY "Users can view their own conversations" 
ON public.chat_conversations 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own conversations" 
ON public.chat_conversations 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own conversations" 
ON public.chat_conversations 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create RLS policies for chat messages
CREATE POLICY "Users can view messages from their conversations" 
ON public.chat_messages 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.chat_conversations 
    WHERE id = conversation_id AND user_id = auth.uid()
  )
);

CREATE POLICY "Users can insert messages to their conversations" 
ON public.chat_messages 
FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.chat_conversations 
    WHERE id = conversation_id AND user_id = auth.uid()
  )
);

-- Create RLS policies for health queries
CREATE POLICY "Users can view their own health queries" 
ON public.health_queries 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create health queries" 
ON public.health_queries 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create RLS policies for vaccination schedules
CREATE POLICY "Users can view their own vaccination schedules" 
ON public.vaccination_schedules 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own vaccination schedules" 
ON public.vaccination_schedules 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own vaccination schedules" 
ON public.vaccination_schedules 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create RLS policies for outbreak alerts (public read access)
CREATE POLICY "Everyone can view active outbreak alerts" 
ON public.outbreak_alerts 
FOR SELECT 
USING (active = true);

-- Create RLS policies for health analytics (public read access for aggregated data)
CREATE POLICY "Authenticated users can view health analytics" 
ON public.health_analytics 
FOR SELECT 
TO authenticated
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_asha_workers_updated_at
  BEFORE UPDATE ON public.asha_workers
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_chat_conversations_updated_at
  BEFORE UPDATE ON public.chat_conversations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_vaccination_schedules_updated_at
  BEFORE UPDATE ON public.vaccination_schedules
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, phone_number, preferred_language)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data ->> 'phone',
    COALESCE(NEW.raw_user_meta_data ->> 'language', 'hindi')
  );
  RETURN NEW;
END;
$$;

-- Create trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Create indexes for better performance
CREATE INDEX idx_profiles_user_id ON public.profiles(user_id);
CREATE INDEX idx_asha_workers_user_id ON public.asha_workers(user_id);
CREATE INDEX idx_asha_workers_location ON public.asha_workers(district, block);
CREATE INDEX idx_chat_conversations_user_id ON public.chat_conversations(user_id);
CREATE INDEX idx_chat_conversations_session ON public.chat_conversations(session_id);
CREATE INDEX idx_chat_messages_conversation ON public.chat_messages(conversation_id);
CREATE INDEX idx_health_queries_user_id ON public.health_queries(user_id);
CREATE INDEX idx_health_queries_category ON public.health_queries(query_category);
CREATE INDEX idx_vaccination_schedules_user_id ON public.vaccination_schedules(user_id);
CREATE INDEX idx_vaccination_schedules_due_date ON public.vaccination_schedules(due_date);
CREATE INDEX idx_outbreak_alerts_active ON public.outbreak_alerts(active);
CREATE INDEX idx_outbreak_alerts_areas ON public.outbreak_alerts USING GIN(affected_areas);
CREATE INDEX idx_health_analytics_type_date ON public.health_analytics(metric_type, recorded_date);