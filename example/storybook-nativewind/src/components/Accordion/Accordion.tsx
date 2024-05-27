import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionIcon,
  AccordionContent,
  AccordionContentText,
} from '@/components/ui/accordion';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MinusIcon,
  PlusIcon,
} from 'lucide-react-native';

const AccordionBasic = ({ ...props }: any) => {
  const accRef = React.useRef(null);

  return (
    <Accordion mt="$5" {...props}>
      <AccordionItem value="a">
        <AccordionHeader>
          <AccordionTrigger>
            {(states: any) => (
              <>
                <AccordionTitleText>
                  How do I place an order?
                </AccordionTitleText>
                {states.isExpanded ? (
                  <AccordionIcon as={ChevronUpIcon} />
                ) : (
                  <AccordionIcon as={ChevronDownIcon} />
                )}
              </>
            )}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent ref={accRef}>
          <AccordionContentText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, sed
            laudantium eligendi maxime rerum, saepe vitae unde voluptas hic,
            culpa ex dolorem omnis incidunt quisquam? Ex fuga debitis recusandae
            incidunt.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="b">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }: { isExpanded: boolean }) => {
              return (
                <>
                  <AccordionTitleText>
                    What payment methods do you accept?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} />
                  )}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            maxime modi quaerat temporibus quos, omnis, vel ullam debitis labore
            error fugit, blanditiis dolore illum consequuntur laboriosam.
            Voluptates est obcaecati nemo!
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="c">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }: { isExpanded: boolean }) => {
              return (
                <>
                  <AccordionTitleText>
                    What payment methods do you accept?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} />
                  )}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            We accept all major credit cards, including Visa, Mastercard, and
            American Express. We also support payments through PayPal.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="d">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }: { isExpanded: boolean }) => {
              return (
                <>
                  <AccordionTitleText>
                    Can I cancel my subscription at any time?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} />
                  )}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorem
            eos ex officia ratione omnis similique delectus aliquam culpa. Minus
            quis numquam laboriosam non natus, distinctio facilis aspernatur
            beatae earum.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionBasic;

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionIcon,
  AccordionContent,
  AccordionContentText,
  ChevronDownIcon,
  ChevronUpIcon,
  PlusIcon,
  MinusIcon,
};
