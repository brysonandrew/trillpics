import { titleToKebab } from '@utils/format';
import { Category } from './category';
import { ITEMS } from './config';

export const Collection = () => {
  return (
    <section className='w-full column'>
      <div className='column relative w-container gap-16'>
        {ITEMS.map(([title, srcs]) => {
          return (
            <Category
              key={title}
              name={titleToKebab(title)}
              title={title}
              classValue='col-span-3'
              listClassValue='row'
              srcs={srcs}
            />
          );
        })}
      </div>
    </section>
  );
};
