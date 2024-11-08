import { Position } from '@/types';

const tabs: { label: string; position: Position }[] = [
  { label: 'All', position: 'all' },
  { label: 'Designers', position: 'designer' },
  { label: 'Analysts', position: 'analyst' },
  { label: 'Managers', position: 'manager' },
  { label: 'iOS', position: 'ios' },
  { label: 'Android', position: 'android' }
];

export default tabs;
