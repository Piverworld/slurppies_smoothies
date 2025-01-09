import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

interface StatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: "success" | "failure";
  message: string;
  subtext: string;
}

const StatusModal: React.FC<StatusModalProps> = ({
  isOpen,
  onClose,
  status,
  message,
  subtext,
}: StatusModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={closeModal}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
            className="w-full max-w-sm p-6 bg-white rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  delay: 0.2,
                }}
                className={`rounded-full p-3 ${
                  status === "success" ? "bg-green-100" : "bg-red-100"
                }`}>
                {status === "success" ? (
                  <Check className="w-8 h-8 text-green-600" />
                ) : (
                  <X className="w-8 h-8 text-red-600" />
                )}
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`mt-4 text-xl font-semibold ${
                  status === "success" ? "text-green-600" : "text-red-600"
                }`}>
                {message}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-2 text-gray-600">
                {subtext}
              </motion.p>
            </div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-full px-4 py-2 mt-6 text-white transition duration-200 bg-blue-600 rounded hover:bg-blue-700"
              onClick={closeModal}>
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StatusModal;
