import { AnimatedGradient } from './AnimatedGradient';

export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center opacity-20" />
      <AnimatedGradient />
    </div>
  );
}; 