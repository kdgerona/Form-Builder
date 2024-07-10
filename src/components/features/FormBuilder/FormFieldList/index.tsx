'use client';

import { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import FormField from '../FormField';
import { useFormBuilderContext } from '../hooks/useFormBuilderContext';

const FormFieldList: React.FC = () => {
  const { fields, actions } = useFormBuilderContext();

  const FormFields = useMemo(
    () => fields?.map((field) => <FormField key={field.id} field={field} />),
    [fields]
  );

  return (
    <>
      {FormFields}
      <div className='w-full flex justify-center items-center'>
        <Button onClick={actions?.addField}>+ Add Field</Button>
      </div>
    </>
  );
};

export default FormFieldList;
