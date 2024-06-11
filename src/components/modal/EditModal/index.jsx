import "./EditModal.css";
import PropTypes from "prop-types";

const EditModal = ({ children, setEditUser }) => {
    const handleClose = () => {
        setEditUser(null);
    };

    return (
        <div className="modal">
            <div className="modal__overlay" onClick={handleClose}></div>
            {children}
        </div>
    );
};

EditModal.propTypes = {
    children: PropTypes.node.isRequired,
    setEditUser: PropTypes.func.isRequired,
};

export default EditModal;
