import './dialog-actions.styles.scss';

type DialogActionProps = {
  onCancel: () => void;
  disableAction?: boolean;
};

const DialogActions = ({ onCancel, disableAction }: DialogActionProps) => {
  return (
    <div className="action-buttons">
      <button className="action-buttons--cancel" type="button" onClick={onCancel}>
        Cancel
      </button>
      <button className="action-buttons--action" type="submit" disabled={disableAction}>
        Save
      </button>
    </div>
  );
};

export default DialogActions;
