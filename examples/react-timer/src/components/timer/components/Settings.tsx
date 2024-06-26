import React, {SyntheticEvent, useState} from 'react';
import {ISettings, IState} from "../types";

type IProps = {
    data: IState;
    togglePopup: (e: SyntheticEvent, b?: boolean) => void;
    voiceSettingSave: (s: ISettings, b?: boolean) => void;
}

const Settings: React.FC<IProps> = ({togglePopup, voiceSettingSave}) => {
    const [state] = useState({});

    const settingSave = (e: SyntheticEvent) => {
        voiceSettingSave(state);

        e.preventDefault();

        return false
    };
    const clearSettings = (e: SyntheticEvent) => {
        voiceSettingSave({...state}, true)
        togglePopup(e, false);
    };

    return (
        <div>
            <div className='modal-window'>
                <div>
                    <a
                        href=''
                        title='Close'
                        className='modal-close'
                        onClick={e => togglePopup(e, false)}
                    >
                        Close
                    </a>
                    <h4>Web Speech Synthesis Demo</h4>

                    <div>
                        <form onSubmit={() => false} id="settings-form">
                            <div id='page-wrapper'>
                                <p id='msg'/>
                                <div className="btn-wrap">
                                    <button className='btn btn-primary' onClick={settingSave}>Save</button>
                                    &nbsp;&nbsp;
                                    <button className='btn btn-danger' onClick={clearSettings}>Clear Settings</button>
                                </div>
                            </div>
                            <div>
                                <a
                                    href=''
                                    title='Close'
                                    className='modal-close bottom'
                                    onClick={e => togglePopup(e, false)}
                                >
                                    Close
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
