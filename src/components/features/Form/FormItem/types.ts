import { IFormEntity } from '@/models/form';

export interface IProps {
  formId: string;
  onRemove: () => void;
  form: IFormEntity;
}
