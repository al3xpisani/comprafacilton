import {SetStateAction} from 'react';
import {Dispatch} from 'react';
import {createContext, useContext} from 'react';
import {mapProducts} from '../mapping/customMap';

export type GlobalContent = {
  cartWish: mapProducts | undefined;
  setCartWish: Dispatch<SetStateAction<mapProducts | undefined>>;
};
export const MyGlobalContext = createContext<GlobalContent>({
  cartWish: [],
  setCartWish: () => null,
});
export const useGlobalContext = () => useContext(MyGlobalContext);
