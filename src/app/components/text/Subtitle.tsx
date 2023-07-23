import { PropsWithChildren, memo } from 'react';
import module from '@/assets/styles/modules/_texts.module.scss';

const Subtitle = ({ children }: PropsWithChildren) => {
  const styles = module as Record<string, string>;

  return <h2 className={styles.subtitle}>{children}</h2>;
};

export default memo(Subtitle);
