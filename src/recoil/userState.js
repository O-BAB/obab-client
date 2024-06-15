import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined

/**
 * browser state에 저장
 * - 주로 로그인 이후, 회원 정보를 위해 저장함
 * - App에서는 device state 저장으로 설정한다.
 */
const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: sessionStorage,
  converter: JSON
});

export const userState = atom({
  key: 'userState',
  default: null,
  effects_UNSTABLE: [persistAtom]
});
