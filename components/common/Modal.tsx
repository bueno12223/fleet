import Paper from 'components/general/Paper'
import React from 'react'
import { Modal as RNModal, View, Text, StyleSheet } from 'react-native'

interface ModalProps {
  open: boolean;
  onClose: () => void;
  secondaryActions?: React.ReactNode;
  children: React.ReactNode;
  maxWidth?: boolean;
  actions?: React.ReactNode;
  height?: number | string;
  title?: string;
  disableEscapeKeyDown?: boolean;
  fullWidth?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  secondaryActions,
  children,
  actions,
  title,
}) => {
  return (
    <RNModal
      visible={open}
      onRequestClose={onClose}
      animationType='slide'
      transparent
    >
      <Paper style={styles.modalContainer}>
        <View>
          {title && (
            <View style={styles.header}>
              <Text style={styles.title}>{title}</Text>
              {secondaryActions}
            </View>
          )}
          <View style={styles.content}>{children}</View>
          {actions && <View style={styles.actions}>{actions}</View>}
        </View>
      </Paper>
    </RNModal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: '#fff',
    padding: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: '#fff',
  },
})

export default Modal