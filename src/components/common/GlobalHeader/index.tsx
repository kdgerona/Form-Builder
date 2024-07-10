import { Label } from '@/components/ui/label';

const GlobalHeader: React.FC = () => {
  return (
    <div className={'flex h-16 items-center border-b bg-accent px-36 gap-1'}>
      <h3 className={'text-2xl font-semibold leading-none tracking-tight'}>
        Form Builder
      </h3>
      <span>v1.0</span>
    </div>
  );
};

export default GlobalHeader;
