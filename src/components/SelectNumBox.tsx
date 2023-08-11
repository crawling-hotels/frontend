import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { SelectNumBoxOption } from './SelectNumBoxOption';

const Base = styled.div`
  border: 1px solid #E1DFDF;
  border-radius: 5px;
  background-color: white;
  padding: 8px;
  width: 100%;
  /* width: 174px; */
`;

export type name_num = {
  name: string;
  num: number;
}

interface Props {
  options: string[];
  initialValues: number[];
  onChange: (numsState: name_num[]) => void;
}


const SelectNumBox: React.FC<Props> = ({ options, initialValues, onChange }) => {

  if (options.length !== initialValues.length) {
    throw new Error("The length of options and initialValues must be the same!");
  }

  const [numsState, setNumsState] = useState<name_num[]>([]);

  useEffect(() => {
    let arr: name_num[] = [];
    options.forEach((val, idx) => {
      arr.push({
        name: val,
        num: initialValues[idx]
      });
    });
    setNumsState(arr);
  }, []);

  useEffect(() => {
    if (numsState.length > 0) 
      onChange(numsState);
  }, [numsState]);

  return (
    <Base>
      {
        options.map((option, idx) => (
          <SelectNumBoxOption 
            type={option} 
            initialValue={initialValues[idx]}
            groupNumState={numsState}
            setGroupNumState={setNumsState}
            key={`select_num_box_option_${idx}`} 
          />
        ))
      }
    </Base>
    )
}


export default SelectNumBox