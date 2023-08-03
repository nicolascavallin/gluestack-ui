import React from 'react';
import {
  Button,
  Toast,
  useToast,
  Icon,
  CloseIcon,
  VStack,
  CheckIcon,
  Pressable,
  Center,
} from '../../../ui-components';
import { MessageCircle, AlertTriangleIcon } from 'lucide-react-native';

const ToastFigmaStory = ({ _placement = 'top', ...props }: any) => {
  return (
    <Toast {...props}>
      <VStack space="xs">
        <Toast.Title
          dataSet={{
            'component-props': JSON.stringify({
              'is-text-style': true,
              'component-name': 'Text',
              'size': 'md',
            }),
          }}
        >
          Hello World Toast{' '}
        </Toast.Title>
        <Toast.Description
          dataSet={{
            'component-props': JSON.stringify({
              'is-text-style': true,
              'component-name': 'Text',
              'size': 'sm',
            }),
          }}
        >
          Please create a support ticket from the support page
        </Toast.Description>
      </VStack>
      <Pressable>
        <Icon
          as={CloseIcon}
          dataSet={{
            'component-props': JSON.stringify({
              'instance': true,
              'instance-name': 'Icon',
              'name': 'CloseIcon',
              'size': 'md',
            }),
          }}
        />
      </Pressable>
    </Toast>
  );
};

const ToastStory = ({ placement = 'top', ...props }: any) => {
  const toast = useToast();

  return (
    <Button
      onPress={() => {
        toast.show({
          placement: placement,
          duration: null,
          render: ({ id }) => {
            return (
              <>
                <Toast nativeID={id} {...props}>
                  <VStack space="xs">
                    <Toast.Title
                      dataSet={{
                        'component-props': JSON.stringify({
                          'is-text-style': true,
                          'component-name': 'Text',
                          'size': 'md',
                        }),
                      }}
                    >
                      Hello World Toast
                    </Toast.Title>
                    <Toast.Description
                      dataSet={{
                        'component-props': JSON.stringify({
                          'is-text-style': true,
                          'component-name': 'Text',
                          'size': 'sm',
                        }),
                      }}
                    >
                      Please create a support tibnnbcket from the support page
                    </Toast.Description>
                  </VStack>
                  <Pressable onPress={() => toast.close(id)}>
                    <Icon
                      as={CloseIcon}
                      dataSet={{
                        'component-props': JSON.stringify({
                          'instance': true,
                          'instance-name': 'Icon',
                          'name': 'CloseIcon',
                          'size': 'md',
                        }),
                      }}
                    />
                  </Pressable>
                </Toast>
              </>
            );
          },
        });
      }}
    >
      <Button.Text
        dataSet={{
          'component-props': JSON.stringify({
            'is-text-style': true,
            'component-name': 'Text',
            'size': 'md',
          }),
        }}
      >
        Press Me
      </Button.Text>
    </Button>
  );
};

export default ToastFigmaStory;

export {
  ToastStory,
  Toast,
  useToast,
  Icon,
  CloseIcon,
  VStack,
  CheckIcon,
  MessageCircle,
  AlertTriangleIcon,
  Button,
  Pressable,
  Center,
};
