import React from 'react';

type WaveProps = {
  height: number;
};

const Wave = ({ height }: WaveProps) => {
  return (
    <div className="bg-[#B8CDDB] w-[100px] rounded-b-full" style={{ height }} />
  );
};

export default Wave;