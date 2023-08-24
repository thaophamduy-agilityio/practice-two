import { memo } from 'react';

interface HamburgerMenuProps {
  isOpenMenuOnMobile: boolean;
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const HamburgerMenu = memo(({ isOpenMenuOnMobile, ...props }: HamburgerMenuProps): JSX.Element => {
  return <i className={`menu-button ${isOpenMenuOnMobile ? 'open' : ''}`} {...props} />;
});
