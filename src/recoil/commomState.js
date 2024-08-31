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
 * const CATEGORIES = [
 *   { subCategoryId: 1, name: "Korean Cuisine" },
 *   { subCategoryId: 2, name: "Food recipe" },
 *   { subCategoryId: 3, name: "Cooking Tips" },
 *   { subCategoryId: 4, name: "Recipe" },
 *   { subCategoryId: 5, name: "Soup Recipe" },
 * ];
 */
export const categoriesState = atom({
  key: 'CATEGORIES',
  default: null
  // default: []
});

/**
 * 반응형 웹 앱 전역 상태 관리 (픽셀 조정용)
 * @type {RecoilState<number>}
 */
export const innerWidthState = atom({
  key: 'innerWidth',
  default: window.innerWidth
})
