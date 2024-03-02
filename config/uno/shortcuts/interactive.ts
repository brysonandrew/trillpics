import { StaticShortcutMap } from 'unocss';
import {
  NEU_CLASSES_RECORD,
  TNewClassesRecord,
} from '../neu/constants';

export const SHAPES: StaticShortcutMap =
  {
    'circle-interactive':
      'relative p-3 cursor-pointer',
    'interactive-sq-sm':
      'p-1 w-7 h-7 rounded-sm',
    'interactive-sq-md':
      'p-1 w-10 h-10 rounded-sm',
    'interactive-sq-lg':
      'p-1 w-14 h-14 rounded-sm',
    'interactive-rect-sm':
      'py-1 px-3 rounded-sm',
    'interactive-rect':
      'py-2.5 px-4 rounded-sm',
    'interactive-circ-sm':
      'w-7 h-7 p-1 rounded-full',
    'interactive-circ-md':
      'w-10 h-10 p-2 rounded-full',
    'interactive-circ-lg':
      'w-14 h-14 p-3 rounded-full',
  };

export const LOOKS: StaticShortcutMap =
  {
    'interactive-bg-backdrop':
      'bg-section-02 backdrop-blur-lg',
    'interactive-bg-backdrop-border-02':
      'interactive-bg-backdrop border-1-gray-02',
    'interactive-bg-backdrop-border-04':
      'interactive-bg-backdrop border-1-gray-04',
    ...(NEU_CLASSES_RECORD as TNewClassesRecord),
  } as const;

export const INTERACTIVE: StaticShortcutMap =
  {
    interactive:
      'relative center hover:interactive-hover disabled:interactive-disabled',
    'interactive-active':
      'border-1-gray-04 text-primary',
    'interactive-disabled':
      'text-gray-1 cursor-not-allowed opacity-90',
    'interactive-hover': 'opacity-90',
    ...SHAPES,
    ...LOOKS,
  } as const;
