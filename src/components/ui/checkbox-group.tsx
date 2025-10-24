import { ReactNode } from 'react';
import { CheckIcon } from '@radix-ui/react-icons';

interface CheckboxGroupProps {
  values: string[];
  onValuesChange: (values: string[]) => void;
  children: ReactNode;
  className?: string;
}

export function CheckboxGroup({
  children,
  className = '',
}: Omit<CheckboxGroupProps, 'values' | 'onValuesChange'>) {
  return <div className={`space-y-2 ${className}`}>{children}</div>;
}

interface CheckboxItemProps {
  value: string;
  values: string[];
  onValuesChange: (values: string[]) => void;
  children: ReactNode;
  className?: string;
}

export function CheckboxItem({
  value,
  values,
  onValuesChange,
  children,
  className = '',
}: CheckboxItemProps) {
  const isChecked = values.includes(value);

  const handleChange = (checked: boolean) => {
    if (checked) {
      onValuesChange([...values, value]);
    } else {
      onValuesChange(values.filter(v => v !== value));
    }
  };

  return (
    <label
      className={`flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-md p-2 -m-2 transition-colors duration-150 ${className}`}
    >
      <input
        type='checkbox'
        checked={isChecked}
        onChange={e => handleChange(e.target.checked)}
        className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
      />
      <span className='text-sm text-gray-700 flex-1'>{children}</span>
      {isChecked && <CheckIcon className='w-4 h-4 text-blue-600' />}
    </label>
  );
}
