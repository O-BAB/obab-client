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


/**
 * 현재는 시간 관계 상 제거 하지 못함
 * - 이부분은 전부 recoil로 addForm, updateForm으로 관리하고자 하였으나,
 *   그 방식은 비효율적이라, 그냥 아래는 제거해야함
 *   현재는 이미지 추가/수정 폼에서 상태 관리로 들어가고 정리르 하지 못해 잠시 남겨둠
 *   이 부분은 src/component/form/MainImageSection.jsx 에서 사용 중이나
 *   하위 컴포넌트로 배치를 하는 것이 잘못 되었음
 *   본래는 추가 부분이라 local state 관리 방식 (useState 로 사용할것)
 * @type {RecoilState<unknown>}
 */
export const mainImageFormState = atom({
  key: 'mainImageFormState',
  default: null,
});
