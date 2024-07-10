export interface IField {
  id: string;
  question: string;
}

export interface IFormEntity {
  id: string;
  name: string;
  description?: string;
  fields: IField[];
}
