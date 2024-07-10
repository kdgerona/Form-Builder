import FormBuilderGeneralForm from '../FormBuilderGeneralForm';
import FormFieldList from '../FormFieldList';

const FormBuilderSheet: React.FC = () => {
  return (
    <div className='w-full h-full flex flex-col gap-2'>
      <FormBuilderGeneralForm />
      <FormFieldList />
    </div>
  );
};

export default FormBuilderSheet;
