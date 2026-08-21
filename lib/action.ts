'use server';

import type { AddMealRequestWithImageFile } from '@/app/types/meals.types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

export type ShareMealState = {
  message: string | null;
};

function getRequiredString(formData: FormData, fieldName: string): string {
  const value = formData.get(fieldName);

  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`The "${fieldName}" field is required.`);
  }

  return value.trim();
}

function getRequiredImage(formData: FormData): File {
  const value = formData.get('image');

  if (
    typeof File === 'undefined' ||
    !(value instanceof File) ||
    value.size === 0
  ) {
    throw new Error('A valid image file is required.');
  }

  return value;
}

export async function shareMeal(
  _previousState: ShareMealState,
  formData: FormData,
): Promise<ShareMealState> {
  try {
    const meal: AddMealRequestWithImageFile = {
      title: getRequiredString(formData, 'title'),
      summary: getRequiredString(formData, 'summary'),
      instructions: getRequiredString(formData, 'instructions'),
      image: getRequiredImage(formData),
      creator: getRequiredString(formData, 'name'),
      creator_email: getRequiredString(formData, 'email'),
    };

    await saveMeal(meal);
  } catch (error: unknown) {
    return {
      message:
        error instanceof Error
          ? error.message
          : 'Unable to share the meal. Please try again.',
    };
  }

  revalidatePath('/meals');
  redirect('/meals');
}
