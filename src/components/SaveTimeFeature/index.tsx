// Libs
import { memo } from 'react';

// Components
import { FeatureItem } from '@components/common/FeatureItem';
import { ListSaveTime } from '@components/SaveTime';

// Interface
import { SaveTime } from '@interface/save-time';

// Define the props for the Save Time Feature component
interface SaveTimeFeatureProps {
  saveTimes: SaveTime[];
  OnSignUp: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const SaveTimeFeature = memo(({ OnSignUp, saveTimes }: SaveTimeFeatureProps): JSX.Element => {
  return (
    <section className="save-time-container">
      <FeatureItem 
        classItem="save-time"
        srcSet = {{
          desktop: {
            img: '/images/save-time/save-time-desktop.webp',
            img2x: '/images/save-time/save-time-desktop-2x.webp',
          },
          tablet: {
            img: '/images/save-time/save-time-tablet.webp',
            img2x: '/images/save-time/save-time-tablet-2x.webp',
          },
        }}
        imageSrc = {{
          mobile: {
            img: '/images/save-time/save-time-mobile.webp',
            img2x: '/images/save-time/save-time-mobile-2x.webp',
          }
        }}
        imageSize = {{
          width:684,
          height:487
        }}
        subTitle="Deep Focus & Multitasking"
        title="Increase Productivity"
        desc="We're a growing family of 382,081 designers and makers from around the world"
        labelButton="Sign up now"
        onClick={OnSignUp}
      />
      <ListSaveTime saveTimes={saveTimes} />
    </section>
  )
});
