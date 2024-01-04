import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { closeSearchModal } from "./searchSlice";

function SearchModal() {
  const { isOpen } = useSelector((state: RootState) => state.navMenuSearch);
  const dispatch: AppDispatch = useDispatch();
  const closeModal = () => dispatch(closeSearchModal());

  return (
    <>
      <Modal show={isOpen} onHide={closeModal} centered>
        <input
          type="text"
          className="form-control p-3"
          placeholder="search here..."
        />
      </Modal>
    </>
  );
}

export default SearchModal;
