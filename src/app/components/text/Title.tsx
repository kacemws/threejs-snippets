import { PropsWithChildren, memo } from 'react';
import styles from '@/assets/styles/modules/_texts.module.scss';

const Title = ({ children }: PropsWithChildren) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default memo(Title);
