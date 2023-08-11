import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import FullCalendar from '@fullcalendar/react';
import { EventSourceInput } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid';
import koLocale from '@fullcalendar/core/locales/ko';

const Base = styled.div`
  width: 100%;
  /* background-color: aliceblue; */
`;

const CalendarContainer = styled.div`
  width: 100%;
`;

const MyPageCalendar: React.FC = () => {
  const [events, setEvents] = useState<EventSourceInput>();


  useEffect(() => {
    //내 일정 데이터 가져오기
    
    setEvents([
      {
        title: '종로 아이콘 호텔',
        start: '2023-08-04',
        end: '2023-08-07'
      },
      {
        title: '호텔 메리어트',
        start: '2023-08-20',
        end: '2023-08-22'
      },
      {
        title: '호텔 선샤인',
        start: '2023-08-31',
        end: '2023-09-02'
      }
    ]);//예시 데이터

  }, []);
  
  return (
    <Base>
      <CalendarContainer>
        <FullCalendar 
          plugins={[ dayGridPlugin ]}
          initialView='dayGridMonth'
          locale={koLocale}
          events={events}
        />
      </CalendarContainer>
      
    </Base>
  )
}

export default MyPageCalendar