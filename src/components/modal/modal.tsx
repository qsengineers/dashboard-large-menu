import { AnimatePresence, motion } from "framer-motion";
import {
  defaultModalAnimation,
  defaultModalBackdropAnimation,
} from "./modal.utils";
export interface IModalProps {
  className?: string;
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

export const Modal = ({
  className: customClassName,
  children,
  show,
  onClose,
}: IModalProps) => {
  if (!show) return <></>;

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            {...defaultModalAnimation}
            className={`modal ${customClassName} fixed bottom-0 left-0 right-0 top-0 z-50 m-auto flex h-fit min-h-80 w-fit min-w-[300px] max-w-full justify-center rounded bg-white p-4 shadow md:max-w-2xl`}
          >
            <div className="relative flex w-full flex-col">
              <button
                type="button"
                className="absolute right-[-8px] top-[-10px] ms-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-sm text-gray-800 hover:bg-gray-200 hover:text-gray-900"
                onClick={() => onClose()}
              >
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
              {children}
            </div>
          </motion.div>

          <motion.div
            key="modal-backdrop"
            {...defaultModalBackdropAnimation}
            onClick={() => onClose()}
            className="fixed inset-0 z-40 bg-gray-900/50"
          />
        </>
      )}
    </AnimatePresence>
  );
};
