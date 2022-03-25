import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { Avatar, IconButton } from "@material-ui/core";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
  Mic,
} from "@material-ui/icons";

import "../css/chat.css";

const Chat = () => {
  const [seed, setSeed] = useState("");
  const [message, setMessage] = useState("");
  const [roomName, setRoomName] = useState("");
  const { roomId } = useParams();

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessage("");
  };

  return (
    <div className="chat">
      <header className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat__header-info">
          <h3>{roomName || "Unknown"}</h3>
          <p>Last seen at 12:01 AM</p>
        </div>

        <header className="chat__header-right">
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </header>
      </header>

      <div className="chat__body">
        {/* Old Message Body */}
        {/* <p className="chat__message">
          <span className="chat__name">Samer</span>
          Hey Guys!
          <span className="chat__timestamp">3:52 PM</span>
        </p> */}

        <p className="chat__message ">
          Hello, Samer
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className="chat__message ">
          How it's going?
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className={`chat__message ${true && "chat__receiver"}`}>
          Hey Sonny!!
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className="chat__message ">
          Hello, Samer
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className="chat__message ">
          How it's going?
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className={`chat__message ${true && "chat__receiver"}`}>
          Hey Sonny!!
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className="chat__message ">
          Hello, Samer
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className="chat__message ">
          How it's going?
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className={`chat__message ${true && "chat__receiver"}`}>
          Hey Sonny!!
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className="chat__message ">
          Hello, Samer
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className="chat__message ">
          How it's going?
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className={`chat__message ${true && "chat__receiver"}`}>
          Hey Sonny!!
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className="chat__message ">
          Hello, Samer
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className="chat__message ">
          How it's going?
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className={`chat__message ${true && "chat__receiver"}`}>
          Hey Sonny!!
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className="chat__message ">
          Hello, Samer
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className="chat__message ">
          How it's going?
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className={`chat__message ${true && "chat__receiver"}`}>
          Hey Sonny!!
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className="chat__message ">
          Hello, Samer
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className="chat__message ">
          How it's going?
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className={`chat__message ${true && "chat__receiver"}`}>
          Hey Sonny!!
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className="chat__message ">
          Hello, Samer
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className="chat__message ">
          How it's going?
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className={`chat__message ${true && "chat__receiver"}`}>
          Hey Sonny!!
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className="chat__message ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In at
          tempore ratione quaerat ex. Rerum dignissimos consequuntur quidem
          illum porro eum quis rem at, adipisci vel tempore. Sapiente
          cupiditate, unde magni corrupti officiis delectus nisi accusantium
          temporibus accusamus praesentium excepturi.
          <span className="chat__timestamp">3:52 PM</span>
        </p>

        <p className={`chat__message ${true && "chat__receiver"}`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In at
          tempore ratione quaerat ex. Rerum dignissimos consequuntur quidem
          illum porro eum quis rem at, adipisci vel tempore. Sapiente
          cupiditate, unde magni corrupti officiis delectus nisi accusantium
          temporibus accusamus praesentium excepturi.
          <span className="chat__timestamp">3:52 PM</span>
        </p>
      </div>

      <footer className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>

        <form>
          <input
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
            type="text"
            placeholder="Send a message..."
          />

          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>

        <IconButton>
          <Mic />
        </IconButton>
      </footer>
    </div>
  );
};

export default Chat;
