import clsx from 'clsx';
import Image from 'next/image';

import { Heading, Text } from '@/components/shared';

import type { TMilestoneItemProps } from '../lib/milestoneItem.type';

export const MilestoneItem = ({ date, feature, image, className }: TMilestoneItemProps) => {
  return (
    <div
      className={clsx(
        'relative z-20 flex w-fit rounded-sm shadow-md shadow-blue-primary',
        'justify-center',
        className
      )}
    >
      <div className="absolute z-10 flex h-full w-full max-w-[25rem] flex-col items-center justify-center gap-2 p-3 max-lg:max-w-none">
        <Heading level={5}>{date}</Heading>
        <Text type="xl" weight="medium" className="text-center">
          {feature}
        </Text>
      </div>
      <div className="flex blur-sm">
        <Image
          src={image}
          width={400}
          height={500}
          alt="backgrounds"
          className="h-auto w-auto max-w-[31.25rem] max-lg:w-full max-lg:max-w-none"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
    </div>
  );
};
