import { useTranslations } from 'next-intl';
import Text from '@/app/components/text/Text';
import Title from '@/app/components/text/Title';
import stylesModule from '@/assets/styles/modules/_home.module.scss';

export default function Home() {
  const t = useTranslations('home');
  const styles = stylesModule as Record<string, string>;

  return (
    <main className={styles['home-page-container']}>
      <div className={styles['home-page-background']} />
      <div className={styles['home-page-content']}>
        <Title>{t('title')}</Title>
        <Text>{t('description')}</Text>
      </div>
    </main>
  );
}
