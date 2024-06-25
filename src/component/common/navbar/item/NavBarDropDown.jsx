import React, {Fragment} from 'react';
import {Menu, Transition} from "@headlessui/react";
import {ListUl} from "react-bootstrap-icons";
import {useRecoilValue} from "recoil";
import {userState} from "../../../../recoil/userState";
import userContainer from "../../../../hooks/UserContainer";

const NavBarDropDown = () => {
  const { handleLogout } = userContainer();
  const user = useRecoilValue(userState);
  console.log(user?.id)
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {/*<ListUl className={`size-20 text-right mr-auto`}/>*/}
          <ListUl className="size-20 h-5 w-5 text-gray-400" aria-hidden="true"/>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({active}) => (
                <div
                  href="#"
                  className={(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                  )}
                >
                  Signed in as Tom@example.com
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({active}) => (
                <a
                  href="/korean/cuisine"
                  className={(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                  )}
                >
                  Korean Cuisine
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({active}) => (
                <a
                  href="/food/recipe"
                  className={(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                  )}
                >
                  Food recipe
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({active}) => (
                <a
                  href="/cooking/tips"
                  className={(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                  )}
                >
                  Cooking Tips
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({active}) => (
                <a
                  href="/recipe"
                  className={(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                  )}
                >
                  Recipe
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({active}) => (
                <a
                  href="/soup/recipe"
                  className={(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                  )}
                >
                  Soup Recipe
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({active}) => (
                <a
                  href="/mypage"
                  className={(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                  )}
                >
                  마이페이지
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({active}) =>
                user?.id < 0 ?
                (
                <a
                  href="/login"
                  className={(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                  )}
                >
                  로그인
                </a>
              )
                  :
                  (
                    <button className={(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    onClick={() => {handleLogout()}}
                    >로그아웃</button>
                  )
              }
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default NavBarDropDown;
