import { Box, Button, Flex, Modal, Text } from '@mantine/core';
import { useBlocker, useNavigate } from 'react-router-dom';
import { closeAllModals, closeModal } from '@mantine/modals';
import { Fragment } from 'react';

const ContactPage = () => {
  const navigate = useNavigate();
  const blocker = useBlocker(true);
  const isBlocked = blocker.state === 'blocked';

  return (
    <Fragment>
      <Box p="lg">
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </Box>

      <Modal
        withCloseButton={false}
        centered={true}
        size="sm"
        overlayProps={{ blur: 5 }}
        transitionProps={{ transition: 'pop', duration: 100 }}
        stackId="confirmRedirect"
        opened={isBlocked}
        onClose={() => closeModal('confirmRedirect')}
      >
        <Box p="lg" ta="center">
          <Text fz="xl" fw="bolder">
            Are you sure you want to leave this page ?
          </Text>
          <Flex gap="sm" justify="center" mt="md">
            <Button
              size="sm"
              variant="default"
              c="green"
              fz="md"
              onClick={() => isBlocked && blocker.proceed()}
            >
              Yes, Leave
            </Button>
            <Button
              size="sm"
              fz="md"
              onClick={() => {
                if (isBlocked) {
                  blocker.reset();
                }
                closeAllModals();
              }}
            >
              No
            </Button>
          </Flex>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default ContactPage;
