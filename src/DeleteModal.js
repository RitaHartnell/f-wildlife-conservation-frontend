import React from 'react'
import { Button, Modal} from 'semantic-ui-react'

function DeleteModal(props){
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button >Delete Account</Button>}
        >
        <Modal.Header>Delete User?</Modal.Header>
        <Modal.Content image>
            <Modal.Description>
                <p>Are you sure you want to delete your account?</p>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button color='grey' onClick={() => setOpen(false)}>
            No, wait
            </Button>
            <Button
            content="Yes, I'm sure"
            labelPosition='right'
            icon='checkmark'
            onClick={() => {
                setOpen(false)
                props.deleteUser()
            }}
            color='teal'
            />
        </Modal.Actions>
        </Modal>
    )
}

export default DeleteModal