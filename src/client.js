import { createClient } from '@supabase/supabase-js'

const URL = 'https://rvokqgjrvxfwsdrewhwf.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2b2txZ2pydnhmd3NkcmV3aHdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4NzgyMjIsImV4cCI6MjA3ODQ1NDIyMn0.oeKrys6FJzh1cYImgR5dxL0c3t6bS566YBBZ64yGXZo'

export const supabase = createClient(URL, API_KEY)