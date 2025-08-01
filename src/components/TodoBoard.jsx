import { Accordion, Dialog } from "radix-ui";
import React from "react";
import { FaAngleUp } from "react-icons/fa6";

export default function TodoBoard() {
  const AccordionTrigger = React.forwardRef(
    ({ children, ...props }, forwardedRef) => (
      <Accordion.Header>
        <Accordion.Trigger
          className="data-[state=open]:font-semibold px-4 py-2 flex items-center w-full group"
          {...props}
          ref={forwardedRef}
        >
          {children}
          <FaAngleUp className="ml-auto group-data-[state=open]:rotate-180 transition-all 2s" />
        </Accordion.Trigger>
      </Accordion.Header>
    )
  );

  const AccordionContent = React.forwardRef(
    ({ children, ...props }, forwardedRef) => (
      <Accordion.Content
        className="overflow-hidden px-4 py-2 data-[state=open]:animate-accordion-open 0.3s data-[state=closed]:animate-accordion-close"
        {...props}
        ref={forwardedRef}
      >
        <div>{children}</div>
      </Accordion.Content>
    )
  );

  return (
    <section>
      <Accordion.Root type="single" collapsible>
        <Accordion.Item
          className="mb-2 text-sm overflow-hidden bg-iris-3 dark:bg-violet-4 data-[state=open]:bg-iris-4 dark:data-[state=open]:bg-violet-5 transition-colors 1.5s rounded-lg"
          value="item-1"
        >
          <AccordionTrigger>title2</AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center justify-between">
              <div>
                <p>sdfsdfj sjod eifjslk osgksjeo ksdfjo content</p>
              </div>
              <Dialog.Root>
                <Dialog.Trigger className="px-2 py-1 rounded-md border-1 border-iris-7 dark:border-iris-8 text-whitea-12 text-xs font-semibold bg-iris-7 hover:bg-iris-6 dark:bg-iris-8 dark:hover:bg-iris-7 cursor-pointer">
                  EDIT
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="bg-blacka-4 fixed inset-0" />
                  <Dialog.Content
                    aria-describedby={undefined}
                    className="w-[90vw] md:w-[50vw] h-26 p-3 bg-linear-to-r from-iris-3 to-violet-3 dark:from-iris-5 dark:to-violet-5 dark:bg-irisdark-11 rounded-md shadow-blacka-3 fixed top-[50%] left-[50%] -translate-[50%]"
                  >
                    <div className="h-full flex flex-col justify-between">
                      <Dialog.Title className="font-semibold text-sm">
                        Edit
                      </Dialog.Title>
                      <input
                        autoFocus
                        value={"ssdjfoipj soeijoif soeifjdii eieii"}
                        onChange={() => {}}
                        className="w-full p-2 text-sm outline-none bg-whitea-12 border-1 border-violet-6"
                      />
                    </div>
                    <Dialog.Close className="absolute top-0 right-12 text-xs p-1 mt-3  hover:text-iris-10 dark:hover:text-irisdark-10 hover:cursor-pointer">
                      Close
                    </Dialog.Close>
                    <Dialog.Close className="absolute top-0 right-0 text-xs p-1 mr-3 mt-3  hover:text-iris-10 dark:hover:text-irisdark-10 hover:cursor-pointer">
                      Save
                    </Dialog.Close>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          </AccordionContent>
        </Accordion.Item>
        <Accordion.Item
          className="text-sm overflow-hidden bg-iris-3 dark:bg-violet-4 data-[state=open]:bg-iris-4 dark:data-[state=open]:bg-violet-5 transition-colors 1.5s rounded-lg"
          value="item-2"
        >
          <AccordionTrigger>title2</AccordionTrigger>
          <AccordionContent>content content</AccordionContent>
        </Accordion.Item>
      </Accordion.Root>
    </section>
  );
}
