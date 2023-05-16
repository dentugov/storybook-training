import React from 'react';
import { Button as PrimeButton, ButtonProps } from 'primereact/button';

interface IProps extends Omit<ButtonProps,
| 'badge'
| 'badgeClassName'
| 'rounded'
| 'raised'
| 'link'
| 'visible'
> {
  icon?: React.ReactNode;
}

export const Button: React.FC<IProps> = (props) => {
  const { icon, iconPos = 'left', ...restProps } = props;

  if (typeof icon !== 'string' && icon) {
    return (
      <PrimeButton
        icon={<span className={`p-button-icon p-c p-button-icon-${iconPos}`}>{icon}</span>}
        iconPos={iconPos}
        {...restProps}
      />
    )
  } else {
    return <PrimeButton {...props} />;
  }
}
