import React, { useState } from 'react';
import styled from '@emotion/styled';
import { DateRange, Range, RangeKeyDict } from 'react-date-range';
import locale from 'date-fns/locale/ko';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays, addYears } from 'date-fns';
import { name_num } from './SelectNumBox';
import SelectOption from './SelectOption';
import PickButton from './PickButton';

const Base = styled.div`
  /* background-color: beige; */
`;

const BtnsContainer = styled.div`
  display: flex;
  /* width: 230px; */
  width: 100%;
  /* background-color: bisque; */
  margin-bottom: 5px;
`;

const CheckHotelBtn = styled.button`
  width: calc(100% - 3.5rem);
  /* width: calc(230px - 55px); */
  /* height: 50px; */
  font-size: 1.2rem;
  border: 0;
  background-color: #768CCE;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-right: .5rem;
`;




const SelectOptionContainer = styled.div`
  background-color: #EFF3FF;
  padding: 1rem;
  /* width: 190px; */
`;

const OptionContainer = styled.div`
  & + & {
    margin-top: 30px;
  }
`;

const DateRangeContainer = styled.div`
  position: absolute;
  left: -143px;
  border: 1px solid #949494;
`;


const PriceContainer = styled.div`
  display: flex;
  /* background-color: aliceblue; */
  width: fit-content;
  margin-top: 30px;

  & span {
    font-size: 18px;
  }
`;

const Price = styled.span`
  color: #1B4FEB;
  margin-left: 13px;
`;

const AddToCalBtn = styled.button`
  border: 0;
  border-radius: 5px;
  background-color: white;
  color: #1E1E1E;
  /* width: 190px; */
  width: 100%;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    border: 2px solid #cddaff;
  }
`;



interface Props {
  hotel: string
}

const DetailSideBar: React.FC = () => {
  const [dateRange, setDateRange] = useState<Range>(
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection'
    }
  );//DateRange에 보여지는 기간
  const [personNum, setPersonNum] = useState<{
    adult: number,
    child: number
  }>();
  const [roomNum, setRoomNum] = useState<number>();

  const onPersonNumChange = (state: name_num[]) => {
    setPersonNum({
      adult: state.find((val) => val.name==="성인")!.num,
      child: state.find((val) => val.name==="어린이")!.num,
    });
  }

  const onRoomNumChange = (state: name_num[]) => {
    setRoomNum(state[0].num);
  }

  const onDateRangeChange = (range: RangeKeyDict) => {
    setDateRange(range.selection);
  }

  const getDateText = (date: Date | undefined) => {
    if (date !== undefined)
      return `${date?.getFullYear()}/${date?.getMonth()+1}/${date?.getDate()}`;
  }

  const onPickBtnClick = (isPicked: boolean) => {//찜하기 버튼 눌렀을 때
    if (isPicked) {
      //찜 목록에 추가
    } else {
      //찜 목록에서 삭제
    }
  }

  const onAddToCalBtnClick = () => {//내 일정에 추가
    const hotel_name = "종로 아이콘 호텔";//예시
    if (dateRange.startDate && dateRange.endDate) {
      if (window.confirm(`\"${getDateText(dateRange.startDate)} - ${getDateText(dateRange.endDate)}, ${hotel_name}\"을 내 일정에 추가하시겠습니까?`)){
        const schedule = {
          start: dateRange.startDate,
          end: dateRange.endDate,
          title: ""//prop으로 받은 호텔 이름 or 정보
        }
        //데이터베이스에 저장하는 로직 작성 필요

        window.alert("추가 완료!")
      }
    }
    
  }

  return (
    <Base>
      <BtnsContainer>
        <CheckHotelBtn>숙소 확인하기</CheckHotelBtn>
        <PickButton onClick={onPickBtnClick}/>
      </BtnsContainer>
      
      <SelectOptionContainer>
        <OptionContainer>
          <SelectOption 
            title='기간' 
            text={(
              <span>
                <span>{getDateText(dateRange.startDate)}</span>
                <span> - </span>
                <span>{getDateText(dateRange.endDate)}</span>
              </span>
            )}>
            <DateRangeContainer>
              <DateRange
                ranges={[dateRange]}
                editableDateInputs={true}
                minDate={new Date()}
                maxDate={addYears(new Date(),1)}
                onChange={onDateRangeChange}
                locale={locale}
              />
            </DateRangeContainer>
          </SelectOption>
        </OptionContainer>

        {/* <OptionContainer>
          <SelectOption 
            title='인원' 
            text={(
              <span>
                <span>{`성인 ${personNum?.adult}명`}</span>
                <span>, </span>
                <span>{`어린이 ${personNum?.child}명`}</span>
                </span>
            )}
          >
            <SelectNumBox 
              options={["성인","어린이"]} 
              initialValues={[1,0]} 
              onChange={onPersonNumChange}
            />
          </SelectOption>
        </OptionContainer>

        <OptionContainer>
          <SelectOption title='객실' text={`객실 ${roomNum}개`}>
            <SelectNumBox 
              options={["객실"]} 
              initialValues={[1]} 
              onChange={onRoomNumChange}
            />
          </SelectOption>
        </OptionContainer>

        <PriceContainer>
          <span>총 금액</span>
          <Price>128600원</Price>
        </PriceContainer> */}

        <AddToCalBtn onClick={onAddToCalBtnClick}>
          내 일정에 추가
        </AddToCalBtn>
        
      </SelectOptionContainer>
      
    </Base>
  )
}



export default DetailSideBar