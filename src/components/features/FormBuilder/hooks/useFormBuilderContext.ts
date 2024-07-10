import { useContext } from 'react';
import { FormBuilderContext } from '../FormBuilderProvider';

export const useFormBuilderContext = () => useContext(FormBuilderContext);
