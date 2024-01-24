import { tv } from 'tailwind-variants';
import { deepMergeObjects } from '../deepMerge';

export function tva(options: any) {
  const parentVariants = options?.parentVariants;
  const parentCompoundVariants = options?.parentCompoundVariants;

  delete options.parentVariants;
  delete options.parentCompoundVariants;

  options.variants = deepMergeObjects(parentVariants, options.variants);
  if (
    Array.isArray(parentCompoundVariants) &&
    parentCompoundVariants.length > 0
  ) {
    if (!options.compoundVariants) {
      options.compoundVariants = [];
    }
    options.compoundVariants = [
      ...parentCompoundVariants,
      ...options.compoundVariants,
    ];
  }

  const callback = tv(options);

  return (inlineProps: any) => {
    const { parentVariants: inlineParentVariants = {}, ...variant } =
      inlineProps;

    const mergedVariants = deepMergeObjects(inlineParentVariants, variant);

    return callback({ ...mergedVariants });
  };
}
