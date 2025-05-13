import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function ConfirmAction({
  name,
  state,
  change,
  onDelete,
}) {
  return (
    <Dialog open={state} onClose={change} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex-center min-h-full text-center p-4 sm:mr-[15px]">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-200 data-leave:ease-in max-w-[24em] w-full bg-stone-800 mx-auto"
          >
            <div className="flex-center flex-col p-4 gap-4">
              <div className="flex-center size-12 shrink-0 rounded-full bg-red-100">
                <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-stone-400">
                  Are you sure you want to delete <span className="font-bold word-wrap">{name}</span>?
                </p>

                <p className="text-red-300">
                  This action cannot be undone.
                </p>
              </div>
            </div>

            <div className="flex flex-col p-4 gap-4 sm:flex-row-reverse">
              <button
                type="button"
                onClick={onDelete}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 cursor-pointer"
              >
                Delete
              </button>

              <button
                type="button"
                data-autofocus
                onClick={() => change(false)}
                className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-stone-600 shadow-xs ring-1 ring-stone-600 ring-inset hover:text-white hover:ring-white cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
