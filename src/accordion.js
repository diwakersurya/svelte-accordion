import {default as Accordion} from "./Accordion.svelte";
import {default as Section} from "./AccordionSection.svelte";
import {default as Header} from "./AccordionHeader.svelte";
Accordion.Section=Section;
Accordion.Header=Header;
export default Accordion;