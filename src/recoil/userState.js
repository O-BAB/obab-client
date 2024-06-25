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

/**
 * 사용자 정보 - session storage로 정보 저장
 * @type {RecoilState<any>}
 */
export const userState = atom({
  key: 'userState',
  default: {
    id: -9999,
    email: '',
    name: '',
    nickname: '',
    profileImg: '',
    selfInfo: '',
    createdAt: '',
    updatedAt: '',
  },
  effects_UNSTABLE: [persistAtom]
});
