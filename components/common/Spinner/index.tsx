import { memo } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

type SpinnerSize = 'small' | 'medium' | 'large';

type Props = {
  isLoading?: boolean;
  speedMultiplier?: number;
  size?: SpinnerSize;
  color?: 'black' | 'white';
};

function Spinner({
  isLoading, speedMultiplier = 1, size = 'medium', color = 'black',
}: Props) {
  if (!isLoading) {
    return null;
  }

  return (
    <div
      data-testid="spinner"
      title="loading..."
      style={{
        animationDuration: `${speedMultiplier}s`,
      }}
      className={clsx([styles[size]], [styles[color]], {
        [styles.loader]: isLoading,
      })}
    />
  );
}

export default memo(Spinner);
