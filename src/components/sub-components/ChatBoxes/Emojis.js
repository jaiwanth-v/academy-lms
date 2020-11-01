import React from 'react'
import Picker from 'emoji-picker-react';
import './css/Chat.css'

const Emojis = (props) => {
    const onEmojiClick = (event, emojiObject) => {
     let realEmoji = emojiObject.emoji
      props.addEmoji(realEmoji)
    };

    return (
        <div className="emojiPanel">
            <Picker onEmojiClick={onEmojiClick} disableSearchBar={true} disableSkinTonePicker={true} />
        </div>
    )
}

export default Emojis
