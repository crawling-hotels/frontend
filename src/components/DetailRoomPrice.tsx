import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import Chart from 'react-apexcharts';


const Base = styled.div`
  position: relative;

  & p b {
    color: #3D66E0;
  }
`;

const RoomButton = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ selected }) => selected ? "black" : "white" };
  color: ${({ selected }) => selected ? "white" : "black" };
  width: 170px;
  position: relative;
  padding: 2px 0px;
  border-radius: .5rem;
  border: 1px solid;
  border-color:  ${({ selected }) => selected ? "white" : "black" };
  cursor: pointer;
`;

const WrapIcon = styled.div`
  position: absolute;
  right: 2px;
`;

const RoomBox = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => isOpen ? "block" : "none"};
  background-color: white;
  border-radius: .5rem;
  border: 1px solid black;
  width: 170px;
  overflow: hidden;
  position: absolute;
  z-index: 1;

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;

    & li {
      text-align: center;
      cursor: pointer;
      padding: 0.2rem 0;

      &:hover {
        background-color: #F5F5F5;
      }
    }
  }
`;

const SkeletonChart = styled.div`
  width: 100%;
  height: 400px;
  background-color: #F5F5F5;
  color: #3E3E3E;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const DetailRoomPrice: React.FC = () => {
  const [isRoomBoxOpen, setIsRoomBoxOpen] = useState<boolean>(false);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const room_types = ["스탠다드 더블룸", "패밀리 트윈룸", "트리플룸"];
  const props_chart = {
    options: {
      chart: {
        id: "basic-line"
      },
      xasis: {
        categories: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
      }
    },
    series: [
      {
        name: 'prices',
        data: [140000, 145000, null, 143000, 152000, 200000, 210000, 165000, 144000, 175000]
      }
    ]
  };

  useEffect(() => {
    
  }, []);

  useEffect(()=> {

  }, [selectedRoom]);//객실 유형 선택시

  return (
    <Base>

      <RoomButton selected={selectedRoom ? true : false} onClick={() => setIsRoomBoxOpen(!isRoomBoxOpen)}>
        <span>{selectedRoom ? selectedRoom : "객실 유형"}</span>
        <WrapIcon>
          {
            isRoomBoxOpen 
            ? <MdKeyboardArrowUp /> 
            : <MdKeyboardArrowDown />
          }
        </WrapIcon>
      </RoomButton>
      <RoomBox isOpen={isRoomBoxOpen}>
        <ul>
          {
            room_types.map((room, idx) => (
              <li key={`room-${idx}`} onClick={()=>setSelectedRoom(room)}>
                {room}
              </li>
            ))
          }
        </ul>
      </RoomBox>
      {
        selectedRoom
        ? <Chart 
          options={props_chart.options}
          series={props_chart.series}
          type="line"
          height={400} />
        : <SkeletonChart>객실 유형을 선택해 가격을 조회해보세요!</SkeletonChart>
      }
      <p>
        2023년 8월 6일 - 8월 7일 숙박 시 해당 객실을 최저가(
        <b>215000</b>
        원)로 예약할 수 있습니다.
      </p>
    </Base>
  )
}

export default DetailRoomPrice