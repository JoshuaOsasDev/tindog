import Modal from "./Modal";

function ConfirmModal({ onConfirm }) {
  return (
    <Modal>
      <Modal.Open opens="confirm-adopt">
        <button className="rounded-full bg-green-500 px-4 py-2 text-white hover:bg-green-600">
          🏠 Adopt
        </button>
      </Modal.Open>

      <Modal.Window name="confirm-adopt">
        <ConfirmModalContent onConfirm={onConfirm} />
      </Modal.Window>
    </Modal>
  );
}

function ConfirmModalContent({ onConfirm, close, dogIamge }) {
  console.log(dogIamge);
  return (
    <div className="w-full max-w-[300px] p-1 text-center md:max-w-sm">
      {/* Icon */}
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-teal-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {/* Title & Message */}
      <h3 className="mb-2 text-xl font-bold text-gray-800">Confirm Adoption</h3>
      <p className="mb-6 text-gray-600">
        Are you sure you want to adopt this pet? This action cannot be undone.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-3">
        <button
          onClick={() => {
            onConfirm();
            close();
          }}
          className="rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all hover:from-emerald-600 hover:to-teal-700 hover:shadow-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
        >
          Yes, Confirm
        </button>

        <button
          onClick={close}
          className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 focus:ring-2 focus:ring-gray-400 focus:outline-none"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmModal;
