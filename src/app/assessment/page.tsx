'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { STEPS, INDUSTRY_SUGGESTIONS, COUNTRY_SUGGESTIONS } from '@/data/assessment-steps';
import type { Answers, ScanResult, CompetitorResult, DimensionScore } from '@/types/assessment';
import Autocomplete from '@/components/assessment/Autocomplete';

/* ======================================================
   AskBodhi AI Readiness Assessment v4 — Live Intelligence
   ====================================================== */

// Map step numbers to named answer keys (scoring logic uses named keys)
const STEP_KEY_MAP: Record<string, string> = {
  '03': 'companySize',
  '04': 'discovery',
  '05': 'revenueTracking',
  '06': 'aiCited',
  '07': 'schemaMarkup',
  '08': 'aiMaturity',
  '09': 'challenge',
  '10': 'wish',
  '11': 'foundAskBodhi',
};