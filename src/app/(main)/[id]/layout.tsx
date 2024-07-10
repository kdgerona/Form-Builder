'use client';

import { PropsWithChildren } from 'react';
import { useParams } from 'next/navigation';
import FormBuilderProvider from '@/components/features/FormBuilder/FormBuilderProvider';

const FormBuilderLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const params = useParams();
  const formId = params?.id as string;

  return (
    <div className='w-full h-full'>
      <FormBuilderProvider formId={formId}>{children}</FormBuilderProvider>
    </div>
  );
};

export default FormBuilderLayout;
