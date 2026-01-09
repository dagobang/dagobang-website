import { Icon } from "@iconify/react";

export type IconSize = {
  width: string;
  height: string;
};

export const DefaultSize = {
  width: "22",
  height: "22",
};

export const BNBCoinIcon = ({
  size = DefaultSize,
  className,
}: {
  size?: IconSize;
  className?: any;
}) => (
  <Icon
    color="#f0b90b"
    className={className}
    height={size.width}
    width={size.height}
    icon="mingcute:binance-coin-bnb-fill"
  />
);

export const ChainCoinIcon = ({
  chainId,
  className,
  size = DefaultSize,
}: {
  chainId?: any;
  className?: any;
  size?: IconSize;
}) => {
  let icon;
  switch (chainId?.toString()) {
    case "56":
    case "204":
    case "5611":
      icon = <BNBCoinIcon size={size} />;
      break;
  }

  return <div className={className}>{icon}</div>;
};
