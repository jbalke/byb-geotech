export type KeyFrameProps = {
  animatingOut: boolean;
  direction: 'left' | 'right';
};

export type AnimatingInfo = {
  duration: number;
} & KeyFrameProps;
