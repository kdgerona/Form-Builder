'use client';

import { Card, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IProps } from './types';
import { useFormBuilderContext } from '../hooks/useFormBuilderContext';

const FormField: React.FC<IProps> = (props) => {
  const { field } = props;
  const { actions } = useFormBuilderContext();

  const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const { value } = event?.currentTarget;

    if (!actions?.setGeneralFormData) return;

    actions?.updateField({
      id: field?.id,
      question: value,
    });
  };

  return (
    <Card>
      <CardHeader className='grid grid-cols-2 items-end'>
        <Input
          placeholder='Tell us your question'
          value={field?.question}
          label='Question'
          onChange={handleChange}
        />
        <div className='self-end justify-self-end'>
          <Button
            variant={'destructive'}
            onClick={() => actions?.removeField(field?.id)}
          >
            Remove
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default FormField;
