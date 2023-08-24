// Libs
import { memo } from 'react';

// Components
import { FeatureItem } from '@components/common/FeatureItem';

// Define the props for the Notification Feature component
interface NotificationFeatureProps {
  onFindOut: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const NotificationFeature = memo(({ onFindOut }: NotificationFeatureProps): JSX.Element => {
  return (
    <FeatureItem 
      classItem="notification"
      srcSet = {{
        desktop: {
          img: '/images/notification/notification-desktop.webp',
          img2x: '/images/notification/notification-desktop-2x.webp',
        },
        tablet: {
          img: '/images/notification/notification-tablet.webp',
          img2x: '/images/notification/notification-tablet-2x.webp',
        },
      }}
      imageSrc = {{
        mobile: {
          img: '/images/notification/notification-mobile.webp',
          img2x: '/images/notification/notification-mobile-2x.webp',
        }
      }}
      imageSize = {{
        width:360,
        height:310
      }}
      subTitle="Amazing features"
      title="Never forget anything, ever again"
      desc="We're a growing family of 382,081 designers and makers from around the world"
      labelButton="Find out more"
      onClick={onFindOut}
    />
  )
});
