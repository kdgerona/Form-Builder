'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useFormBuilderContext } from '../hooks/useFormBuilderContext';
import { TFormData } from '../FormBuilderProvider/types';

const FormBuilderGeneralForm: React.FC = () => {
  const { formData, actions } = useFormBuilderContext();
  const { name, description } = formData ?? {};

  const handleChange = (
    event: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event?.currentTarget;

    console.log('Test', name, value);

    if (!actions?.setGeneralFormData) return;

    actions?.setGeneralFormData({
      [name as keyof Partial<TFormData>]: value,
    } as TFormData);
  };

  return (
    <Card>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <div>
            <CardTitle>Build Form</CardTitle>
            <CardDescription>
              From contact forms to surveys, bring your ideas to life
              effortlessly
            </CardDescription>
          </div>
          <div className='flex gap-2'>
            <Button variant={'outline'} onClick={actions?.onCancel}>
              Cancel
            </Button>
            <Button onClick={actions?.onSubmit}>Save</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className='w-full h-full flex flex-col gap-2'>
          <div className='w-full h-full grid grid-cols-2'>
            <Input
              placeholder='Untitled form'
              label='Form Name'
              name='name'
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className='w-full h-full grid grid-cols-2'>
            <Textarea
              label='Description'
              name='description'
              placeholder='Tell us what this form is all about.'
              value={description}
              onChange={handleChange}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FormBuilderGeneralForm;
