import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonExampleButton = () => {
    return (
        <div>
            <Button.Group size='massive' vertical>
                <Button>Feed</Button>
                <Button>Messages</Button>
                <Button>Events</Button>
            </Button.Group>
            <Button>Photos</Button>
        </div>
    )

}

export default ButtonExampleButton
