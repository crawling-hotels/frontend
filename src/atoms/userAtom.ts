import { atom } from 'recoil';

export const userState = atom<string | null>({
  key: 'userState',
  default: null
});//string을 객체화해서 사용