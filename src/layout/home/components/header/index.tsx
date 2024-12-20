import { Box } from '@/components';
import { ButtonIcon } from '@/components/common/button-icon';
import { paths } from '@/constants/routes';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CartButton } from './components';
import * as Styles from './styles';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styles.Container>
      <Box alignItems="center" gap={0.5}>
        <ButtonIcon
          label="menu toggle"
          icon={{ name: 'menuLeft' }}
          onClick={() => setIsOpen(true)}
        />
        <ButtonIcon label="search" icon={{ name: 'search', size: 15 }} />
      </Box>
      <Link href="/">Магазин одежды Аванти</Link>

      <Box alignItems="center" gap={0.5}>
        <ButtonIcon label="like" icon={{ name: 'heartOutline' }} />
        <CartButton />
      </Box>
      <Styles.Navigation active={isOpen}>
        <Styles.NavHeader>
          <Box flex={1} justifyContent="center" alignItems="center">
            Магазин одежды Аванти
          </Box>
          <ButtonIcon
            onClick={() => setIsOpen(false)}
            label="close"
            icon={{ name: 'close' }}
          />
        </Styles.NavHeader>
        <Styles.List onClick={() => setIsOpen(false)}>
          <li>
            <Link href={paths.home}>Главная</Link>
          </li>
        </Styles.List>
      </Styles.Navigation>
    </Styles.Container>
  );
}
