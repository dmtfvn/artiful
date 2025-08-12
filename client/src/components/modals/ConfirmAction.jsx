import { useActionState } from 'react';

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function ConfirmAction({
  name,
  state,
  change,
  onDelete,
}) {
  const [, actionDelete, isPending] = useActionState(onDelete);

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
            className="relative transform rounded-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-200 data-leave:ease-in max-w-[24em] w-full mx-auto bg-gradient-to-r from-stone-800 via-neutral-900 to-stone-800"
          >
            <div className="flex-c-col p-4 gap-4">
              <div className="flex-center size-12 shrink-0 rounded-full bg-red-100">
                <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-stone-400">
                  Are you sure you want to delete <span className="font-bold word-wrap">{name}</span>?
                </p>

                <p className="text-slate-500">
                  This action cannot be undone.
                </p>
              </div>
            </div>

            <form action={actionDelete} className="flex flex-col p-4 gap-4 sm:flex-row-reverse">
              <button
                type="submit"
                disabled={isPending}
                className={`action-button-style text-white bg-red-600 hover:bg-red-500 ${isPending ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
              >
                Delete
              </button>

              <button
                type="button"
                data-autofocus
                onClick={() => change(false)}
                className="action-button-style text-stone-600 hover:text-white ring-1 ring-inset ring-stone-600 hover:ring-white cursor-pointer"
              >
                Cancel
              </button>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
