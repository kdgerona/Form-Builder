import FormHeading from '@/components/features/Form/FormHeading';
import FormList from '@/components/features/Form/FormList';

const MainPage: React.FC = () => {
  return (
    <div className='w-full h-full flex flex-col gap-10'>
      <FormHeading />
      <FormList />
    </div>
  );
};

export default MainPage;
