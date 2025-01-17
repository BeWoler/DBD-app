'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Text, Button } from '@/components/shared';

import type { TSubscribeFormData } from '../lib/subscribeForm.type';

export const SubscribeForm = ({
  onSubmit,
}: {
  onSubmit: (data: TSubscribeFormData) => Promise<void>;
}) => {
  const t = useTranslations('Subscribe');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TSubscribeFormData>();

  const [success, setSuccess] = useState(false);

  const formSubmit = async (data: TSubscribeFormData) => {
    try {
      await onSubmit(data);
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)} className="flex w-full max-w-md gap-3">
      <div className="flex w-full flex-col">
        <input
          {...register('email', {
            required: t('required'),
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: t('message'),
            },
          })}
          type="email"
          placeholder={t('placeholder')}
          className={clsx(
            'w-full rounded-md px-4 py-2 text-black focus:outline-none',
            errors.email ? 'border-[0.063rem] border-red-secondary' : ''
          )}
          disabled={isSubmitting}
        />
        {errors.email && (
          <Text type="base" className="mt-1 text-sm text-red-secondary">
            {errors.email.message}
          </Text>
        )}
      </div>
      <Button
        backgroundColor="red"
        disabled={isSubmitting}
        onClick={handleSubmit(formSubmit)}
        className="max-h-[2.5rem] hover:bg-blue-secondary hover:bg-opacity-90"
      >
        {success ? (
          <Text type="lg">{t('success')}</Text>
        ) : (
          <Text type="lg">{isSubmitting ? t('sending') : t('subscribe')}</Text>
        )}
      </Button>
    </form>
  );
};
