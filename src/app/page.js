"use client"

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, {Draggable, DropArg} from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import WeeklyCalendar from './components/CalendarComponent.js';

export default function Home() {
  return (
    <>
    <nav className='flex justify-between mb-12 border-b border-violet-100 p-4'>
      <h1 className='font-bol text-2xl text-gray-700'>Calendar</h1>
    </nav>
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      
    </main>
    </>
  );
}