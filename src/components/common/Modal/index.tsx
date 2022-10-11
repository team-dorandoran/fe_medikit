import { Card, CardContent, Modal } from '@mui/material';
import { ReactNode } from 'react';

interface ModlaProps {
  open: boolean
  handleClose: () => void
  ariaLabel?: string
  ariaDescribedBy?: string
  children: ReactNode
}

const CustomModal = ({ open, handleClose, ariaLabel, ariaDescribedBy, children }: ModlaProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby={ariaLabel}
      aria-describedby={ariaDescribedBy}
    >
      <Card style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} sx={{ minWidth: 275 }}>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </Modal >
  );
};

export default CustomModal;