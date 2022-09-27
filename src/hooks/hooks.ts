import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';



// Nuestro hook personalizado para usar el selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// Nuestro hook personalizado para usar el dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;