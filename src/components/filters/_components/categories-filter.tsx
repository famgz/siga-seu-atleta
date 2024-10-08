import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { CategoriesCount } from '@/types/athlete';
import { Category } from '@/types/sport';

interface Props {
  category: string;
  categoriesCount: CategoriesCount;
  onCategoryChange: (category: Category) => void;
}

export default function CategoriesFilter({
  category,
  categoriesCount,
  onCategoryChange,
}: Props) {
  return (
    <div className='flex flex-col md:flex-row items-center gap-1 md:mt-0 '>
      <span className='text-sm underline decoration-yellow-500 block md:hidden'>
        Categoria:
      </span>

      <ToggleGroup
        type='single'
        value={category}
        onValueChange={onCategoryChange}>
        <ToggleGroupItem
          value='all'
          aria-label='Selecionar todos'
          className='whitespace-nowrap'>
          Todos ({categoriesCount.all})
        </ToggleGroupItem>
        <ToggleGroupItem
          value='olympic'
          aria-label='Selecionar Olímpicos'
          className='whitespace-nowrap'>
          Olímpicos ({categoriesCount.olympic})
        </ToggleGroupItem>
        <ToggleGroupItem
          value='paralympic'
          aria-label='Selecionar Paralímpicos'
          className='whitespace-nowrap'>
          Paralímpicos ({categoriesCount.paralympic})
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
