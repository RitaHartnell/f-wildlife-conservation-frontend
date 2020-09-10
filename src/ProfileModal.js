import React from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

function ProfileModal(props){
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Edit Profile</Button>}
        >
        <Modal.Header>Edit Profile</Modal.Header>
        <Modal.Content image>
            <Modal.Description>
                <Form>
                    <Form.Input label='Enter new Photo URL' type='text' onChange={(e)=> props.imgChange(e)}/>
                    <Form.TextArea label='Bio' placeholder={props.bio} onChange={(e)=> props.bioChange(e)}/>
                </Form>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button color='grey' onClick={() => setOpen(false)}>
            Cancel
            </Button>
            <Button
            content="Save"
            labelPosition='right'
            icon='checkmark'
            color='teal'
            onClick={() => {
                setOpen(false)
                props.patchUser()
            }}
            />
        </Modal.Actions>
        </Modal>
    )
}

export default ProfileModal