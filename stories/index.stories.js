import { action } from '@storybook/addon-actions';
import AccordionSimple from './accordion-simple.svelte';
import AccordionControlled from './accordion-controlled.svelte';

export default {
  title: 'Accordion',
};

export const SimpleAccordion = () => ({
  Component: AccordionSimple,
  props: {},
  on: {},
});
export const Controlled = () => ({
  Component: AccordionControlled,
  props: {},
  on: {},
});