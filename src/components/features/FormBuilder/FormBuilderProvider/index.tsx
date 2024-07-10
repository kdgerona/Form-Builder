'use client';

import { createContext, PropsWithChildren, useState, useEffect } from 'react';
import {
  IFormBuilderProps,
  IFormBuilderContext,
  IFormData,
  IActions,
} from './types';
import { IField, IFormEntity } from '@/models/form';
import { v4 as uuid } from 'uuid';
import { useRouter } from 'next/navigation';
import { BASE_URL } from '@/constants/api';

export const FormBuilderContext = createContext<Partial<IFormBuilderContext>>(
  {}
);

interface IProps extends IFormBuilderProps, PropsWithChildren {}

const FormBuilderProvider: React.FC<IProps> = (props) => {
  const { children, formId } = props;
  const router = useRouter();
  const [formData, setFormData] = useState<IFormData>({
    data: {
      name: '',
      description: '',
    },
  });
  const [fields, setFields] = useState<IField[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getForm = async () => {
    try {
      setIsLoading(true);
      const form = await (await fetch(`${BASE_URL}/form/${formId}`)).json();
      const { name = '', description = '', fields = [] } = form ?? {};

      setFormData((prev) => ({
        ...prev,
        data: {
          name,
          description,
        },
      }));

      setFields(fields);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getForm();
  }, [formId]);

  const setGeneralFormData = (
    data: Pick<IFormEntity, 'name' | 'description'>
  ) => {
    setFormData((prev) => ({
      ...prev,
      data: {
        ...prev?.data,
        ...data,
      },
    }));
  };

  const addField = () => {
    const fieldId = uuid();

    setFields((prev) => [
      ...prev,
      {
        id: fieldId,
        question: '',
      },
    ]);
  };

  const removeField = (fieldId: string) => {
    const fieldIndex = fields?.findIndex((field) => field?.id === fieldId);
    const clonedFields = [...fields];
    clonedFields.splice(fieldIndex, 1);

    setFields(clonedFields);
  };

  const updateField = (fieldData: IField) => {
    const fieldIndex = fields?.findIndex(
      (field) => field?.id === fieldData?.id
    );
    const clonedFields = [...fields];
    clonedFields.splice(fieldIndex, 1, fieldData);

    setFields(clonedFields);
  };

  const onSubmit = async () => {
    try {
      const { name = '', description = '' } = formData?.data ?? {};

      await (
        await fetch(`${BASE_URL}/form/${formId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            description,
            fields,
          }),
        })
      ).json();

      router?.replace('/');
    } catch (e) {
      console.error(e);
    }
  };

  const onCancel = () => {
    router?.replace('/');
  };

  const actions: IActions = {
    setGeneralFormData,
    addField,
    updateField,
    removeField,
    onSubmit,
    onCancel,
  };

  if (isLoading) {
    return (
      <div className='w-full h-full flex items-center justify-center'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <FormBuilderContext.Provider
      value={{
        formData: formData.data,
        fields,
        actions,
      }}
    >
      {children}
    </FormBuilderContext.Provider>
  );
};

export default FormBuilderProvider;
