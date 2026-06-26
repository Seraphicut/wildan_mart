/* ======================================================
   SUPABASE CONFIG
====================================================== */
import { createClient }
from "https://esm.sh/@supabase/supabase-js";

const SUPABASE_URL =
  "https://nshexilqvfqrimhmecru.supabase.co";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zaGV4aWxxdmZxcmltaG1lY3J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzNDk1NjcsImV4cCI6MjA5NzkyNTU2N30.gXO65px6jyIjl-x4UFOtETVCI-mppEAVRnolYDY7etg";

export const supabase = createClient(

    SUPABASE_URL,

    SUPABASE_KEY

);