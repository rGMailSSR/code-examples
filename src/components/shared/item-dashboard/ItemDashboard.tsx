import { IItemDashboardProps } from './types';

export function ItemDashboard({ icon, text }: IItemDashboardProps) {
  return (
    <div className='flex items-center gap-2 py-1'>
      {icon}
      <span>{text}</span>
    </div>
  );
}
