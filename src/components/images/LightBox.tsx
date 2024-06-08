import * as React from 'react'
import { Button, Dialog, DialogTrigger, Heading, Modal, ModalOverlay } from "react-aria-components";
import { Image } from "astro:assets";
import SwiperBox from "@/components/images/SwiperBox";
// function that render the modal with the swiperbox inside,
// you can use SwiperBox without the modal
export default function LightBox({ images }) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  return (
    <DialogTrigger>
      {images.map((image, index) => (
        <Button onPress={()=>setCurrentIndex(index)} className="cursor-pointer focus-visible:ring-2 focus-visible:ring-white/75">
          <img
            width="224"
            height="160"
            class="rounded-md object-cover  max-w-[224px] min-w-[224px] max-h-[160px] min-h-[160px]"
            src={image.thumbnail}
            alt={image.id}
          />
        </Button>
      ))}
      <ModalOverlay
        className={({ isEntering, isExiting }) => `
          fixed inset-0 z-10 overflow-y-auto bg-black/25 flex min-h-full items-center justify-center p-4 text-center backdrop-blur
          ${isEntering ? "animate-in fade-in duration-300 ease-out" : ""}
          ${isExiting ? "animate-out fade-out duration-200 ease-in" : ""}
        `}
      >
        <Modal
          className={({ isEntering, isExiting }) => `
            w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl
            ${isEntering ? "animate-in zoom-in-95 ease-out duration-300" : ""}
            ${isExiting ? "animate-out zoom-out-95 ease-in duration-200" : ""}
          `}
        >
          <Dialog role="alertdialog" className="outline-none relative">
            {({ close }) => (
              <>
                <Heading
                  slot="title"
                  className="text-xxl font-semibold leading-6 my-0 text-slate-700"
                >
                  Delete folder
                </Heading>
                <div className="w-6 h-6 text-red-500 absolute right-0 top-0 stroke-2"></div>
                <p className="mt-3 text-slate-500">
                  Are you sure you want to delete "Documents"? All contents will be permanently
                  destroyed.
                </p>
                <SwiperBox images={images} currentImageId={currentIndex} />
                <div className="mt-6 flex justify-end gap-2">
                  <DialogButton
                    className="bg-slate-200 text-slate-800 hover:border-slate-300 pressed:bg-slate-300"
                    onPress={close}
                  >
                    Cancel
                  </DialogButton>
                  <DialogButton
                    className="bg-red-500 text-white hover:border-red-600 pressed:bg-red-600"
                    onPress={close}
                  >
                    Delete
                  </DialogButton>
                </div>
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}

function DialogButton({ className, ...props }) {
  return (
    <Button
      {...props}
      className={`inline-flex justify-center rounded-md border border-solid border-transparent px-5 py-2 font-semibold font-[inherit] text-base transition-colors cursor-default outline-none focus-visible:ring-2 ring-blue-500 ring-offset-2 ${className}`}
    />
  );
}
