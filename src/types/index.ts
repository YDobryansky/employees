export type SortType = 'alphabet' | 'birthday';
export type Position = 'all' | 'analyst' | 'designer' | 'manager' | 'android' | 'ios';
export type Employee = {
  id?: string;
  name: string;
  avatar?: string;
  email: string;
  phone?: string;
  birthDate: string;
  position: string;
  tag: string;
};
