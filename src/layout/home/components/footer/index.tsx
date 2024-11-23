import { Box, Container, Typography } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import * as Styles from './styles';

export function Footer() {
  return (
    <>
      <Styles.Container>
        <Container size="lg">Магазин одежды Аванти</Container>
        <Container size="lg">
          <Box
            flexDirection={{
              '@initial': 'column',
              '@table-min': 'row',
            }}
            justifyContent="space-between"
            gap={2}
          >
            <Box flexDirection="column" gap={1}>
              <Typography fontWeight="500" size="md" color="heading">
                Категории
              </Typography>
              <Styles.List>
                <li>
                  <Link href="">Одежда</Link>
                </li>
                <li>
                  <Link href="">Аксессуары</Link>
                </li>
                <li>
                  <Link href="">Женская одежда</Link>
                </li>
                <li>
                  <Link href="">Мужская одежда</Link>
                </li>
                <li>
                  <Link href="">Обувь</Link>
                </li>
                <li>
                  <Link href="">Новые поступления</Link>
                </li>
              </Styles.List>
            </Box>
            <Box flexDirection="column" gap={1}>
              <Typography fontWeight="500" size="md" color="heading">
                Наша политика
              </Typography>
              <Styles.List>
                <li>
                  <Link href="">Наш бренд</Link>
                </li>
                <li>
                  <Link href="">Связаться с нами</Link>
                </li>
                <li>
                  <Link href="">О нас</Link>
                </li>
                <li>
                  <Link href="">Блог</Link>
                </li>
                <li>
                  <Link href="">В разработке</Link>
                </li>
                <li>
                  <Link href="">Магазин</Link>
                </li>
              </Styles.List>
            </Box>
            <Box flexDirection="column" gap={1}>
              <Typography fontWeight="500" size="md" color="heading">
                Где нас найти
              </Typography>
              <Styles.List>
                <li>
                  <Link href="">
                    <span>Новочеркасск</span>
                    <br />
                    <span>Московская, 1</span>
                    <br />
                  </Link>
                </li>
                <li>
                  <Link href="">support@example.com</Link>
                </li>
                <li>
                  <Link href="">(939) 353-1107, (302) 259-2375</Link>
                </li>
              </Styles.List>
            </Box>
            <Box flexDirection="column" gap={1}>
              <Typography fontWeight="500" size="md" color="heading">
                Подпишись на нас
              </Typography>
              <Styles.List>
                <li>
                  <Link href="">Facebook</Link>
                </li>
                <li>
                  <Link href=""> Twitter</Link>
                </li>
                <li>
                  <Link href="">Instagram</Link>
                </li>
                <li>
                  <Link href="">Pinterest</Link>
                </li>
                <li>
                  <Link href="">Youtube</Link>
                </li>
              </Styles.List>
            </Box>
          </Box>
        </Container>
      </Styles.Container>
      <Container size="lg">
        <Box marginTop={3} marginBottom={3}>
          <Typography size="xsm">
            © Белгород {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </>
  );
}
