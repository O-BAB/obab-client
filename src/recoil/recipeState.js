import {atom} from "recoil";

/* 리스트에 필요한 state 상태 관리 */
/**
 * 레시피 리스트 상태 관리 - 대부분 카테고리별로 출력 됨
 * @type {RecoilState<*[]>}
 */
export const recipesState = atom({
  key: 'recipesState',
  default: []
});

/**
 * 카테고리별 레시피 제목에 사용할 상태 관리
 * @type {RecoilState<string>}
 */
export const categoryTitleState = atom({
  key: 'categoryTitleState',
  default: ''
});



/* 추가/수정 에 사용할 폼에 필요한 state 상태관리 */
/**
 * 카테고리 설정 폼 상태관리
 * @type {RecoilState<unknown>}
 */
export const recipeFormState = atom({
  key: 'recipeFormState',
  default: null,
});

export const subItemsFormState = atom({
  key: 'subItemsFormState',
  default: [{ description: '', image: null }],
});

export const mainImageFormState = atom({
  key: 'mainImageFormState',
  default: null,
});

export const ingredientsFormState = atom({
  key: 'ingredientsFormState',
  default: [],
  // default: [{ id: '', type: '', name: '', count: '', unit: '', etc: '' }],
});

export const seasoningsFormState = atom({
  key: 'seasoningsFormState',
  default: [],
  // default: [{ id: '', type: '', name: '', count: '', unit: '', etc: '' }],
});
