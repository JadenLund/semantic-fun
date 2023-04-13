import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonExampleButton = () => {
    return (
        <div>
            <Button.Group size='small' >
                <Button>Feed</Button>
                <Button>Messages</Button>
                <Button>Events</Button>
                <Button>Photos</Button>
            </Button.Group>

        </div>
    )

}

export default ButtonExampleButton
