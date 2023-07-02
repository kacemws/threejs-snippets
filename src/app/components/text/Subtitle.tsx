import { PropsWithChildren, memo } from 'react';
import styles from '@/assets/styles/modules/_texts.module.scss';

const Subtitle = ({ children }: PropsWithChildren) => {
  return <h2 className={styles.subtitle}>{children}</h2>;
};

export default memo(Subtitle);
