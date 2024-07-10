'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IProps } from './types';
import { useRouter } from 'next/navigation';

const FormItem: React.FC<IProps> = (props) => {
  const { formId, onRemove, form } = props;
  const { name = '', description = '' } = form ?? {};
  const router = useRouter();

  const onEdit = () => {
    router?.replace(formId);
  };

  return (
    <Card>
      <CardHeader className='grid grid-cols-2 items-end'>
        <div>
          <CardTitle>{name || 'Untitled Form'}</CardTitle>
          <CardDescription>{description || 'No description'}</CardDescription>
        </div>
        <div className='flex self-end justify-self-end gap-2'>
          <Button variant={'outline'} onClick={onEdit}>
            Edit
          </Button>
          <Button variant={'destructive'} onClick={onRemove}>
            Remove
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default FormItem;
