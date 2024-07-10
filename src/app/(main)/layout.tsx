import { PropsWithChildren } from 'react';
import GlobalHeader from '@/components/common/GlobalHeader';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col w-full h-full'>
      <GlobalHeader />
      <div className='w-full h-full px-72 py-10'>{children}</div>
    </div>
  );
};

export default MainLayout;
