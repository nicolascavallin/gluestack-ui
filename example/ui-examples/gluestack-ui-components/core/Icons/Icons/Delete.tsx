<<<<<<<< HEAD:packages/themed-native-base/components/Icons/Icons/Delete.tsx
import { createIcon } from '../styled-components';

const DeleteIcon = createIcon({
========
import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';

export const DeleteIcon = createIcon({
  Root,
>>>>>>>> source-gluestack-style:example/ui-examples/gluestack-ui-components/core/Icons/Icons/Delete.tsx
  viewBox: '0 0 24 24',
  d: 'M5.11111 19.7778C5.11111 21 6.11111 22 7.33333 22H16.2222C17.4444 22 18.4444 21 18.4444 19.7778V6.44444H5.11111V19.7778ZM19.5556 3.11111H15.6667L14.5556 2H9L7.88889 3.11111H4V5.33333H19.5556V3.11111Z',
});

DeleteIcon.displayName = 'DeleteIcon';

export { DeleteIcon };
