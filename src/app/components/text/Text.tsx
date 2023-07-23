import { PropsWithChildren, memo } from 'react';
import module from '@/assets/styles/modules/_texts.module.scss';

const Text = ({ children }: PropsWithChildren) => {
  const styles = module as Record<string, string>;

  return <p className={styles.text}>{children}</p>;
};

export default memo(Text);
