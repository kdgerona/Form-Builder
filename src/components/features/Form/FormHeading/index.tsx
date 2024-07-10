'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { BASE_URL } from '@/constants/api';

const FormHeading: React.FC = () => {
  const router = useRouter();

  const handleCreateForm = async () => {
    try {
      const form = await (
        await fetch(`${BASE_URL}/form`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: 'Untitled Form',
          }),
        })
      ).json();
      router?.push(form?.id);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='w-full h-full flex justify-between'>
      <h1>Recent forms</h1>
      <Button onClick={handleCreateForm}>Create Form</Button>
    </div>
  );
};

export default FormHeading;
