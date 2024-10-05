"use client";

import React, { useState } from 'react';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, {Draggable, DropArg} from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import FullCalendar from '@fullcalendar/react';


export default function Calendar() {


  return (
    <div>
      <FullCalendar plugins={[
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin
          ]} headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'resourceTimelineWook, dayGridMonth, timeGridWeek'
          }}
          
          events={{}}
          nowIndicator={true}
          editable={true}
          droppable={true}
          selectable={true}
          selectMirror={true}
          // dateClick={{}}
          // drop={}
          // eventClick={}
          />
        </div>
  );
}