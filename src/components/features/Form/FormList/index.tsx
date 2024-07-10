'use client';

import { useEffect, useMemo, useState } from 'react';
import FormItem from '../FormItem';
import { IFormEntity } from '@/models/form';
import { BASE_URL } from '@/constants/api';

const FormList: React.FC = () => {
  const [forms, setForms] = useState<IFormEntity[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getForms = async () => {
    try {
      setIsLoading(true);
      const forms = await (await fetch(`${BASE_URL}/form`)).json();
      setForms(forms);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getForms();
  }, []);

  const handleRemove = async (formId: string) => {
    try {
      const form = await (
        await fetch(`${BASE_URL}/form/${formId}`, {
          method: 'DELETE',
        })
      ).json();

      const formIndex = forms?.findIndex((form) => form?.id === formId);
      const clonedForms = [...forms];
      clonedForms.splice(formIndex, 1);
      setForms(clonedForms);
    } catch (e) {
      console.error(e);
    }
  };

  const FormItems = useMemo(
    () =>
      forms?.map((form) => (
        <FormItem
          key={form?.id}
          formId={form?.id}
          onRemove={() => handleRemove(form?.id)}
          form={form}
        />
      )),
    [forms]
  );

  if (isLoading) {
    return (
      <div className='w-full h-full flex items-center justify-center'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className='w-full h-full'>
      {!!forms?.length ? (
        <div className='w-full h-full flex flex-col gap-2'>{FormItems}</div>
      ) : (
        <div className='w-full h-full flex items-center justify-center'>
          <span className='text-slate-500'>
            {"You don't have any forms yet"}
          </span>
        </div>
      )}
    </div>
  );
};

export default FormList;
