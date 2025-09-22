-- Insert sample outbreak alerts
INSERT INTO public.outbreak_alerts (disease_name, alert_type, severity_level, affected_areas, description, prevention_measures, symptoms, cases_reported, deaths_reported) VALUES
('Dengue Fever', 'outbreak', 3, ARRAY['Delhi', 'Gurgaon', 'Noida'], 'Dengue outbreak reported in NCR region with increasing cases', 'Eliminate standing water, use mosquito nets, seek immediate medical attention for fever', ARRAY['High fever', 'Severe headache', 'Body aches', 'Nausea'], 245, 3),
('Chikungunya', 'warning', 2, ARRAY['Mumbai', 'Pune', 'Thane'], 'Rising cases of Chikungunya in Maharashtra', 'Use mosquito repellents, keep surroundings clean, avoid water stagnation', ARRAY['Joint pain', 'Fever', 'Rash', 'Muscle pain'], 89, 0),
('Japanese Encephalitis', 'advisory', 4, ARRAY['Assam', 'West Bengal', 'Bihar'], 'Seasonal advisory for Japanese Encephalitis prevention', 'Vaccination recommended, avoid outdoor activities during dusk and dawn', ARRAY['High fever', 'Headache', 'Neck stiffness', 'Confusion'], 12, 2);

-- Insert sample health analytics
INSERT INTO public.health_analytics (metric_type, metric_value, location, time_period) VALUES
('daily_queries', '{"total": 2500, "resolved": 2300, "escalated": 200}', 'National', 'daily'),
('language_usage', '{"hindi": 45, "english": 25, "telugu": 15, "odia": 10, "others": 5}', 'National', 'weekly'),
('query_categories', '{"fever": 30, "vaccination": 25, "pregnancy": 20, "child_health": 15, "others": 10}', 'National', 'weekly'),
('response_accuracy', '{"verified_correct": 87, "needs_improvement": 13}', 'National', 'monthly'),
('user_satisfaction', '{"rating": 4.2, "total_reviews": 1250}', 'National', 'monthly');

-- Insert sample vaccination schedules (these would typically be user-specific, but adding some examples)
INSERT INTO public.vaccination_schedules (child_name, child_dob, vaccine_name, due_date, status, location) VALUES
('Demo Child 1', '2023-01-15', 'DPT-1', '2023-04-15', 'administered', 'Delhi'),
('Demo Child 1', '2023-01-15', 'DPT-2', '2023-06-15', 'administered', 'Delhi'),
('Demo Child 1', '2023-01-15', 'DPT-3', '2023-08-15', 'pending', 'Delhi'),
('Demo Child 2', '2023-03-20', 'BCG', '2023-03-21', 'administered', 'Mumbai'),
('Demo Child 2', '2023-03-20', 'Hepatitis B-1', '2023-04-20', 'administered', 'Mumbai'),
('Demo Child 2', '2023-03-20', 'Hepatitis B-2', '2023-06-20', 'pending', 'Mumbai');