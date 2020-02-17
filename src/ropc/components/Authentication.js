import React, { useEffect, useState } from 'react';
import AriaModal from 'react-aria-modal';

import { withAuthenticator } from 'aws-amplify-react'
import Amplify, {Auth} from 'aws-amplify'
import awsconfig from 'aws-exports'


Amplify.configure(awsconfig)

function Authentication({isShowing, toggleShowing}) {
    console.log("toggleShowing Value:", isShowing)
    const applicationNode = () => {
        return document.getElementById('root')
    }
    if (isShowing) {
        return(
            <AriaModal
                titleText="Log In"
                onExit={toggleShowing}
                getApplicationNode={applicationNode}
            >

                <div id="auth-modal" className="modal">
                    This is some text.
                    <button id="close-authentication" onClick={toggleShowing}>
                        Close
                    </button>
                </div>
            </AriaModal>
        )
    } else {
        return null
    }
}

// const federatedConfig = {
//   google_client_id: '1032227651519-e2c4uantc6vk7u9i7inqkb13t5fm0va1.apps.googleusercontent.com'
// }

// export default withAuthenticator(Authentication, {federated: federatedConfig})
export default withAuthenticator(Authentication)