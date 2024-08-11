import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined

/**
 * browser state에 저장
 * - 주로 로그인 이후, 회원 정보를 위해 저장함
 * - App에서는 device state 저장으로 설정한다.
 */
const {persistAtom} = recoilPersist({
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


/**
 * 사용자 정보 - 북마크 리스트 출력
 * @type {RecoilState<unknown>}
 */
export const userinfoBookmarkState = atom({
  key: 'userinfoBookmarkState',
  default: [
    // {
    // bookmarkCount: 1,
    // categoryCD: "seasoning_recipe",
    // createdAt: "2024-07-10T22:57:34.296481",
    // difficulty: "medium",
    // id: 4,
    // intro: "맛있는 족발",
    // likeCount: 1,
    // peopleNum: 3000,
    // thumnail: "http://localhost:8000/media/img/2024/7/10/user_1/20240710_admin_c806595d-bc03-4497-a132-79819c1f4c6e.png",
    // time: "15:42:38",
    // title: "양념",
    // updatedAt: "2024-07-10T22:57:34.296513",
    // user: 1
    // }
  ]
})

/**
 * 사용자 정보 - 레시피 글 쓴거 출력
 * @type {RecoilState<unknown>}
 */
export const userinfoRecipeWriteState = atom({
  key: 'userinfoRecipeWriteState',
  default: [
    // {
    // bookmarkCount: 1,
    // categoryCD: "seasoning_recipe",
    // createdAt: "2024-07-10T22:57:34.296481",
    // difficulty: "medium",
    // id: 4,
    // intro: "맛있는 족발",
    // likeCount: 1,
    // peopleNum: 3000,
    // thumnail: "http://localhost:8000/media/img/2024/7/10/user_1/20240710_admin_c806595d-bc03-4497-a132-79819c1f4c6e.png",
    // time: "15:42:38",
    // title: "양념",
    // updatedAt: "2024-07-10T22:57:34.296513",
    // user: 1
  // }
  ]
})

/**
 * 사용자 정보 - 레시피 글 쓴거 출력
 * @type {RecoilState<unknown>}
 */
export const userinfoCommentWriteState = atom({
  key: 'userinfoCommentWriteState',
  default: [
    // {
    //   id : 1,
    //   user: "곰돌이곰곰",
    //   recipe: "제목",
    //   root: 11,
    //   text: "텍스트",
    //   createdAt: "생성 날짜",
    //   rootComment: "???"
    // }
  ]
})
