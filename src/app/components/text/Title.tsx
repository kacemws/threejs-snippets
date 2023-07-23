import { PropsWithChildren, memo } from 'react';
import module from '@/assets/styles/modules/_texts.module.scss';

const Title = ({ children }: PropsWithChildren) => {
  const styles = module as Record<string, string>;

  return <h1 className={styles.title}>{children}</h1>;
};

export default memo(Title);
