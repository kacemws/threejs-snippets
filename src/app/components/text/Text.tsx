import { PropsWithChildren, memo } from 'react';
import styles from '@/assets/styles/modules/_texts.module.scss';

const Text = ({ children }: PropsWithChildren) => {
  return <p className={styles.text}>{children}</p>;
};

export default memo(Text);
