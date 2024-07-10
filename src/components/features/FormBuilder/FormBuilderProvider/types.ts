import { IFormEntity, IField } from '@/models/form';

export interface IFormBuilderProps {
  formId: string;
}

export type TFormData = Pick<IFormEntity, 'name' | 'description'>;

export interface IFormBuilderContext {
  formData?: TFormData;
  form?: IFormEntity;
  fields?: IField[];
  actions: IActions;
}

export interface IActions {
  setGeneralFormData: (data: TFormData) => void;
  addField: () => void;
  updateField: (fieldData: IField) => void;
  removeField: (fieldId: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

export interface IFormData {
  data?: TFormData;
  errors?: Record<keyof IFormEntity, string>;
}
